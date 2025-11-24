const LAZY_KEYWORDS = [
  "analytics",
  "gtm",
  "google",
  "reviews",
  "wishlist",
  "/apps/",
  "cdn.shopify.com/s/files/1/0557/3513/1284/files/wishlist.js",
];

const lazyLoadScripts = () => {
  const scriptObserver = new MutationObserver((mutations) => {
    mutations.forEach(({ addedNodes }) => {
      addedNodes.forEach((node) => {
        if (
          node.nodeType === 1 &&
          node.tagName === "SCRIPT" &&
          node.src &&
          LAZY_KEYWORDS.some((keyword) => node.src.includes(keyword))
        ) {
          // eslint-disable-next-line no-console
          console.log("Lazy loading script:", node.src);
          node.type = "text/lazy-script";
        }
      });
    });
  });

  scriptObserver.observe(document.head, {
    childList: true,
    subtree: true,
  });

  let scriptsLoaded = false;
  const loadScripts = () => {
    if (scriptsLoaded) return;
    scriptsLoaded = true;

    document
      .querySelectorAll('script[type="text/lazy-script"]')
      .forEach((script) => {
        const newScript = document.createElement("script");
        newScript.src = script.src;
        newScript.async = true;
        document.head.appendChild(newScript);
      });

    // eslint-disable-next-line no-use-before-define
    cleanup();
  };

  const cleanup = () => {
    window.removeEventListener("scroll", loadScripts);
    window.removeEventListener("mousemove", loadScripts);
    window.removeEventListener("touchstart", loadScripts);
  };

  window.addEventListener("scroll", loadScripts, { once: true });
  window.addEventListener("mousemove", loadScripts, { once: true });
  window.addEventListener("touchstart", loadScripts, { once: true });

  window.addEventListener("load", () => {
    setTimeout(loadScripts, 3000); // Load scripts after 3 seconds if no user interaction
  });
};

lazyLoadScripts();
