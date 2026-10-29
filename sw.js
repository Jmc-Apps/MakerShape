// MakerShape service worker — only used when the app is hosted on a web server.
const CACHE = "makershape-202610291740";
const FILES = ["./", "index.html", "app.css", "app.js", "lib/occ-engine.js", "lib/font.js", "lib/mesh-engine.js", "lib/cad-worker.js", "manifest.webmanifest",
  "assets/icon-32.png", "assets/icon-180.png", "assets/icon-192.png", "assets/icon-512.png", "assets/logo-header.png", "assets/logo-full.png",
  "assets/thumb-thread.png", "assets/thumb-gfbin.png", "assets/thumb-gfbase.png", "assets/thumb-gfgrid.png", "assets/thumb-qr.png", "assets/thumb-sncase.png", "assets/thumb-bento.png", "assets/thumb-pbox.png", "assets/thumb-fast-keyhole.png", "assets/thumb-fast-csk.png", "assets/thumb-fast-magnet.png", "assets/thumb-fast-insert.png", "assets/thumb-fast-nut.png", "assets/thumb-fast-cleat.png", "assets/thumb-jar.png", "assets/thumb-gear.png", "assets/thumb-cutter.png", "assets/thumb-litho.png", "assets/thumb-heraldry.png", "assets/thumb-skboard.png", "assets/thumb-skbin.png", "assets/thumb-shape-box.png", "assets/thumb-shape-cylinder.png", "assets/thumb-shape-sphere.png", "assets/thumb-shape-halfsphere.png", "assets/thumb-shape-cone.png", "assets/thumb-shape-pyramid.png", "assets/thumb-shape-roof.png", "assets/thumb-shape-wedge.png", "assets/thumb-shape-star.png", "assets/thumb-shape-starpyramid.png", "assets/thumb-shape-roundroof.png", "assets/thumb-shape-heart.png", "assets/thumb-shape-text.png"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request)));
});
