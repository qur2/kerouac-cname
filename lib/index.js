exports = module.exports = function(domain) {
  return function cname(site, pages) {
    site.page('/CNAME', function(page, next) {
      page.write(domain);
      page.end();
    });
  };
};
