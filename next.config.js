const withImages = require('next-images')
module.exports = withImages({
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/profile': { page: '/profile' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' },
      '/config': { page: '/config' },
    };
  }
});