'use strict';

module.exports = {
  name: require('./package').name,

  contentFor(type) {
    if (type === 'head-footer') {
      return `
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138326907-2"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        </script>
      `;
    }
  },
};
