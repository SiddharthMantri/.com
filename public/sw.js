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
    "url": "webpack-runtime-16431165bd6699ca5491.js"
  },
  {
    "url": "styles.f033ceeaa27232ea8b76.css"
  },
  {
    "url": "styles-80e7223394838dc7f3b7.js"
  },
  {
    "url": "commons-fa0db48cc7811cd45a7a.js"
  },
  {
    "url": "app-cb8ecb72bbbe7f29349a.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "088ee40c22fb88933f5c1a797df935fd"
  },
  {
    "url": "google-fonts/s/hind/v10/5aU19_a8oxmIfJpbERySjQ.woff2",
    "revision": "3992fad42f6025e7e3317f4fdd702700"
  },
  {
    "url": "google-fonts/s/hind/v10/5aU19_a8oxmIfLZcERySjQ.woff2",
    "revision": "a0cd803a33fb074cc61a6e6614eec1c6"
  },
  {
    "url": "google-fonts/s/hind/v10/5aU19_a8oxmIfNJdERySjQ.woff2",
    "revision": "7927dae4485c649d860c42c595a23aab"
  },
  {
    "url": "google-fonts/s/hind/v10/5aU69_a8oxmIdGl4BA.woff2",
    "revision": "61e99a257f8899df3bab534a6aa0f9b2"
  },
  {
    "url": "google-fonts/s/merriweather/v21/u-440qyriQwlOrhSvowK_l5-fCZM.woff2",
    "revision": "8276fdb72ae8f4714d4e6eba704cc39f"
  },
  {
    "url": "google-fonts/s/merriweather/v21/u-4n0qyriQwlOrhSvowK_l52_wFZWMf6.woff2",
    "revision": "7528fb70e8a4a82c7305e72ff43ac25f"
  },
  {
    "url": "google-fonts/s/merriweather/v21/u-4n0qyriQwlOrhSvowK_l52xwNZWMf6.woff2",
    "revision": "fa534be7ffa380e39a7f6e03bf9a5e03"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2",
    "revision": "92d16e458625f4d2c8940f6bdca0ff09"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2",
    "revision": "39d93cf678c740f9f6b2b1cfde34bee3"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_epG3gnD_g.woff2",
    "revision": "58cd789700850375b834e8b6776002eb"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2",
    "revision": "bc3aa95dca08f5fee5291e34959c27bc"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-bb03d6690d1d61be3b71.js"
  },
  {
    "url": "component---src-pages-index-tsx-7cb102a99cd21781c9b4.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "d4d23fdcf0f2516ae9301876127f80b7"
  },
  {
    "url": "component---src-pages-gallery-tsx-667b6a3a7fa927283a10.js"
  },
  {
    "url": "page-data/gallery/page-data.json",
    "revision": "faf197f7f3c0136663cfff655a7080d5"
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
