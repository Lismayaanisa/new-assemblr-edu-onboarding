/* Local dev only. Polls dev-server.py: CSS edits swap in place, other edits reload.
   The demo keeps its own state in localStorage, so a reload lands on the same step. */
(() => {
  if (!/^(127\.0\.0\.1|localhost)$/.test(location.hostname)) return;
  let last = null;
  setInterval(async () => {
    try {
      const v = await (await fetch("/__version", { cache: "no-store" })).json();
      if (last && v.code !== last.code) return location.reload();
      if (last && v.css !== last.css) {
        document.querySelectorAll('link[rel="stylesheet"][href*="styles.css"]').forEach((l) => {
          const base = l.href.replace(/[?&]v=[^&]*/g, "");
          l.href = base + (base.includes("?") ? "&" : "?") + "v=" + v.css;
        });
      }
      last = v;
    } catch (e) { /* server restarting */ }
  }, 1000);
})();
