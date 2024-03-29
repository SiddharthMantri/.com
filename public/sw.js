/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-281ecd75098437c763a2.js"
  },
  {
    "url": "framework-d585a04b7d285a7760d6.js"
  },
  {
    "url": "styles.6b485e11cc20025b7b90.css"
  },
  {
    "url": "styles-8fab2804fb6f85b824b6.js"
  },
  {
    "url": "app-1e60cca92184aa5305d2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "dda963600f10872756ae544297169670"
  },
  {
    "url": "static/webfonts/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2"
  },
  {
    "url": "static/webfonts/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2"
  },
  {
    "url": "static/webfonts/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2"
  },
  {
    "url": "static/webfonts/s/montserrat/v18/JTURjIg1_i6t8kCHKm45_epG3gnD_g.woff2"
  },
  {
    "url": "static/webfonts/s/hind/v11/5aU69_a8oxmIdGl4BA.woff2"
  },
  {
    "url": "static/webfonts/s/merriweather/v25/u-440qyriQwlOrhSvowK_l5-fCZM.woff2"
  },
  {
    "url": "static/webfonts/s/hind/v11/5aU19_a8oxmIfJpbERySjQ.woff2"
  },
  {
    "url": "static/webfonts/s/hind/v11/5aU19_a8oxmIfLZcERySjQ.woff2"
  },
  {
    "url": "static/webfonts/s/hind/v11/5aU19_a8oxmIfNJdERySjQ.woff2"
  },
  {
    "url": "static/webfonts/s/merriweather/v25/u-4n0qyriQwlOrhSvowK_l52xwNZWMf6.woff2"
  },
  {
    "url": "static/webfonts/s/merriweather/v25/u-4n0qyriQwlOrhSvowK_l52_wFZWMf6.woff2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-16703ee5599528db9f93.js"
  },
  {
    "url": "polyfill-b71b9362b942c4bf9334.js"
  },
  {
    "url": "a3336d3c033a5ec9d59a088cb032c68b95c64a61-80c7091c35bdafbe9a4e.js"
  },
  {
    "url": "component---src-pages-index-tsx-e5a10d57fa68275b5c38.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "072876287d33dc1fefc63e1174d931a0"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "4e1175dd667869ef93943034ae096bde"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e1e02600b87b27eb7620d2174825c3aa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-1e60cca92184aa5305d2.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
