module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/profile': { page: '/profile' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' },
    };
  }
};