import domReady from '@roots/sage/client/dom-ready';

/**
 * Application entrypoint
 */
domReady(async () => {
  const button = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-menu');
  if (button) {

  } else {
    console.error("Button not found.");
  }

});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
