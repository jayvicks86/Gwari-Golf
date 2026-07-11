/* Gwari Golf — placeholder leaderboard render logic.
   Every Part B page ships its "not live yet" empty state as static HTML, so
   there is nothing to render yet. This file exists to carry the one hook
   point the future data pipeline needs: data-scope + data-slug on the page's
   root element.

   When the GitHub Actions cron starts writing /data/<scope>/<slug>.json,
   replace the no-op below with a fetch() that populates <tbody> — the table
   markup, column structure and empty-state cells already ship in every page,
   so no template rewrite is needed then.
*/

(function () {
  var root = document.querySelector('[data-scope]');
  if (!root) return;

  var scope = root.getAttribute('data-scope'); // 'county' | 'state' | 'shield'
  var slug = root.getAttribute('data-slug');

  // Not live yet — intentional no-op. Future:
  //
  // fetch('/data/' + scope + '/' + slug + '.json')
  //   .then(function (res) { return res.json(); })
  //   .then(function (data) { /* populate .lb-table tbody from data.rows */ })
  //   .catch(function () { /* leave the static empty state in place */ });
})();
