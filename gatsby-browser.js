// custom typefaces
import * as React from 'react';
import { PreviewStoreProvider } from 'gatsby-source-prismic';

import 'prismjs/themes/prism.css';

import './src/styles/tailwind.css';
import './src/styles/global.css';

var trustAllScripts = function () {
  var scriptNodes = document.querySelectorAll('.load-external-scripts script');

  for (var i = 0; i < scriptNodes.length; i += 1) {
    var node = scriptNodes[i];
    var s = document.createElement('script');
    s.type = node.type || 'text/javascript';

    if (node.attributes.src) {
      s.src = node.attributes.src.value;
    } else {
      s.innerHTML = node.innerHTML;
    }

    document.getElementsByTagName('head')[0].appendChild(s);
  }
};

export function onRouteUpdate() {
  trustAllScripts();
}

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
);
