(function () {
  const feedTarget = document.querySelector("[data-feed-target]");
  const status = document.getElementById("feed-status");
  const filterButtons = Array.from(document.querySelectorAll("[data-feed-filter]"));
  let activeFilter = "all";
  let renderedPosts = [];

  if (!feedTarget || !status) {
    return;
  }

  const sources = [
    {
      url: "https://storagecleaner.mesikalabs.com/blog/feed.json",
      fallback: {
        title: "Your iPhone Storage Is Full Again. Stunning. Truly Shocking.",
        url: "https://storagecleaner.mesikalabs.com/blog/iphone-storage-full-again/",
        date: "2026-05-31",
        app: "Storage Cleaner",
        summary: "A practical guide to finding duplicate photos, screenshots, and giant videos without panic-deleting your camera roll.",
        category: "iPhone Storage Cleanup",
        image: "/assets/apps/storage-cleaner-preview.png?v=dark-20260531",
        imageAlt: "Storage Cleaner cleanup dashboard thumbnail"
      }
    },
    {
      url: "https://auratv.mesikalabs.com/blog/feed.json",
      fallback: {
        title: "An IPTV Player Is Not a Secret Channel Machine",
        url: "https://auratv.mesikalabs.com/blog/iptv-player-without-channels/",
        date: "2026-05-31",
        app: "Aura TV",
        summary: "A short field guide to playlists, credentials, EPG files, and not confusing a player with a provider.",
        category: "IPTV Player Setup",
        image: "/assets/apps/aura-tv-preview.png",
        imageAlt: "Aura TV live guide thumbnail"
      }
    },
    {
      url: "https://pureshot.mesikalabs.com/blog/feed.json",
      fallback: {
        title: "What If a Camera App Just Took the Picture?",
        url: "https://pureshot.mesikalabs.com/blog/no-filter-camera/",
        date: "2026-05-31",
        app: "PureShot",
        summary: "A note about natural iPhone capture, direct controls, and not turning every face into plastic wrap.",
        category: "No Filter Camera",
        image: "/assets/apps/pureshot-preview.png",
        imageAlt: "PureShot camera controls thumbnail"
      }
    },
    {
      url: "https://mathwar.mesikalabs.com/blog/feed.json",
      fallback: {
        title: "Math Practice Needs Fewer Worksheets and More Battles",
        url: "http://mathwar.mesikalabs.com/blog/math-practice-with-battles/",
        date: "2026-05-31",
        app: "MathWar",
        summary: "A development note about arithmetic gates, army growth, and making short math practice sessions more playable.",
        category: "Math Learning Game",
        image: "/assets/apps/mathwar-preview.png",
        imageAlt: "MathWar gameplay thumbnail"
      }
    }
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
        category: String(item.category || "Blog"),
        image: String(item.image || ""),
        imageAlt: String(item.imageAlt || item.title || "")
      }));
  }

  function render(posts) {
    renderedPosts = posts
      .sort((left, right) => new Date(right.date) - new Date(left.date))
      .slice(0, 6);

    const recentPosts = activeFilter === "all"
      ? renderedPosts
      : renderedPosts.filter((post) => post.app === activeFilter);

    if (renderedPosts.length === 0) {
      status.textContent = "Showing fallback posts while app feeds warm up.";
      return;
    }

    feedTarget.innerHTML = recentPosts.map((post) => {
      const date = Number.isNaN(new Date(post.date).getTime())
        ? post.date
        : dateFormatter.format(new Date(post.date));

      return `
        <article class="post-card" data-app="${escapeHtml(post.app)}">
          ${post.image ? `<img class="post-thumb" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.imageAlt)}" width="414" height="900" loading="lazy" decoding="async">` : ""}
          <p class="post-meta">${escapeHtml(post.app)} / ${escapeHtml(date)}</p>
          <h3><a href="${escapeHtml(post.url)}">${escapeHtml(post.title)}</a></h3>
          <p>${escapeHtml(post.summary)}</p>
        </article>
      `;
    }).join("");

    status.textContent = activeFilter === "all"
      ? `Showing ${recentPosts.length} newest posts from app blogs.`
      : `Showing ${recentPosts.length} ${activeFilter} posts.`;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.feedFilter || "all";
      filterButtons.forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      render(renderedPosts);
    });
  });

  Promise.allSettled(
    sources.map((source) => fetch(source.url, { mode: "cors" }).then((response) => {
      if (!response.ok) {
        throw new Error(`${source.url} returned ${response.status}`);
      }

      return response.json();
    }))
  ).then((results) => {
    const posts = results.flatMap((result, index) => {
      if (result.status === "fulfilled") {
        const normalized = normalizePosts(result.value);
        return normalized.length > 0 ? normalized : [sources[index].fallback];
      }

      return [sources[index].fallback];
    });

    render(posts);
  }).catch(() => {
    status.textContent = "Showing fallback posts while app feeds warm up.";
  });
}());
