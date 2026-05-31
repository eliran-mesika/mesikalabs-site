(function () {
  const feedTarget = document.querySelector("[data-feed-target]");
  const status = document.getElementById("feed-status");

  if (!feedTarget || !status) {
    return;
  }

  const sources = [
    "https://storagecleaner.mesikalabs.com/blog/feed.json",
    "https://auratv.mesikalabs.com/blog/feed.json",
    "https://pureshot.mesikalabs.com/blog/feed.json",
    "https://mathwar.mesikalabs.com/blog/feed.json"
  ];

  const dateFormatter = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]);
  }

  function normalizePosts(payload) {
    const items = Array.isArray(payload) ? payload : payload.items;

    if (!Array.isArray(items)) {
      return [];
    }

    return items
      .filter((item) => item && item.title && item.url && item.date)
      .map((item) => ({
        title: String(item.title),
        url: String(item.url),
        date: String(item.date),
        app: String(item.app || "MesikaLabs"),
        summary: String(item.summary || ""),
        category: String(item.category || "Blog")
      }));
  }

  function render(posts) {
    const recentPosts = posts
      .sort((left, right) => new Date(right.date) - new Date(left.date))
      .slice(0, 6);

    if (recentPosts.length === 0) {
      status.textContent = "Showing fallback posts while app feeds warm up.";
      return;
    }

    feedTarget.innerHTML = recentPosts.map((post) => {
      const date = Number.isNaN(new Date(post.date).getTime())
        ? post.date
        : dateFormatter.format(new Date(post.date));

      return `
        <article class="post-card">
          <p class="post-meta">${escapeHtml(post.app)} / ${escapeHtml(date)}</p>
          <h3><a href="${escapeHtml(post.url)}">${escapeHtml(post.title)}</a></h3>
          <p>${escapeHtml(post.summary)}</p>
        </article>
      `;
    }).join("");

    status.textContent = `Showing ${recentPosts.length} newest posts from app blogs.`;
  }

  Promise.allSettled(
    sources.map((source) => fetch(source, { mode: "cors" }).then((response) => {
      if (!response.ok) {
        throw new Error(`${source} returned ${response.status}`);
      }

      return response.json();
    }))
  ).then((results) => {
    const posts = results.flatMap((result) => (
      result.status === "fulfilled" ? normalizePosts(result.value) : []
    ));

    render(posts);
  }).catch(() => {
    status.textContent = "Showing fallback posts while app feeds warm up.";
  });
}());
