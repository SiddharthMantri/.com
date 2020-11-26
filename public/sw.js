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
    "url": "webpack-runtime-62bab80fa1c9bba5de3b.js"
  },
  {
    "url": "styles.f033ceeaa27232ea8b76.css"
  },
  {
    "url": "styles-80e7223394838dc7f3b7.js"
  },
  {
    "url": "commons-54925bdf43cfae969c18.js"
  },
  {
    "url": "app-cb8ecb72bbbe7f29349a.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "33bb73824052e59170253695dea67fe5"
  },
  {
    "url": "static/webfonts/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2"
  },
  {
    "url": "static/webfonts/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2"
  },
  {
    "url": "static/webfonts/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2"
  },
  {
    "url": "static/webfonts/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_epG3gnD_g.woff2"
  },
  {
    "url": "static/webfonts/s/hind/v11/5aU69_a8oxmIdGl4BA.woff2"
  },
  {
    "url": "static/webfonts/s/merriweather/v22/u-440qyriQwlOrhSvowK_l5-fCZM.woff2"
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
    "url": "static/webfonts/s/merriweather/v22/u-4n0qyriQwlOrhSvowK_l52xwNZWMf6.woff2"
  },
  {
    "url": "static/webfonts/s/merriweather/v22/u-4n0qyriQwlOrhSvowK_l52_wFZWMf6.woff2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-bb03d6690d1d61be3b71.js"
  },
  {
    "url": "component---src-pages-index-tsx-56bf1cfa5987c4449512.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "d4d23fdcf0f2516ae9301876127f80b7"
  },
  {
    "url": "component---src-pages-gallery-tsx-ff4f2c926fa13d259326.js"
  },
  {
    "url": "page-data/gallery/page-data.json",
    "revision": "7b0aa338acca8306f3a9012fa435dbf2"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9b076f500502ebad5072e1b83d2e4f44"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

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
  if (!resources || !(await caches.match(`/app-cb8ecb72bbbe7f29349a.js`))) {
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
