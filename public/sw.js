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
    "url": "1bfc9850-a9bb76d792caeaab95d7.js"
  },
  {
    "url": "1bfc9850-a9bb76d792caeaab95d7.js.map",
    "revision": "0cbaa511fb9166b472f19b4a34ec9bb4"
  },
  {
    "url": "5e2a4920-832fc325daf551b45db0.js"
  },
  {
    "url": "5e2a4920-832fc325daf551b45db0.js.map",
    "revision": "48d2e252df7b6978395825e65a00ac98"
  },
  {
    "url": "78e521c3-bf7cfd94b188cb3fb15f.js"
  },
  {
    "url": "78e521c3-bf7cfd94b188cb3fb15f.js.map",
    "revision": "a2ba357d43a31ed4d15012d8e6d82898"
  },
  {
    "url": "app-eadeea0441b15686062a.js"
  },
  {
    "url": "app-eadeea0441b15686062a.js.map",
    "revision": "e5dde8453d3f16ef57a0eac6f9cdcec4"
  },
  {
    "url": "bg-gradient.svg",
    "revision": "e846864dda67ae4cd94f3f322925c7df"
  },
  {
    "url": "bg-image.svg",
    "revision": "c402d6ad6dd6d90ce9dfe30f4f489539"
  },
  {
    "url": "cd1b2b2548ccdfb1c5f216bcff064f01656278a5-f1740fb25a417813cf52.js"
  },
  {
    "url": "cd1b2b2548ccdfb1c5f216bcff064f01656278a5-f1740fb25a417813cf52.js.map",
    "revision": "9e4c27a4d1fc26aba36fd355ad84d6c6"
  },
  {
    "url": "chunk-map.json",
    "revision": "da293757d42c40fb0369bf3d473b5c84"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7188043127c4e8798842.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7188043127c4e8798842.js.map",
    "revision": "24e59c1dfd34c893f5ebe058524bc431"
  },
  {
    "url": "component---src-pages-design-js-a7ac883ecc3915c2cf12.js"
  },
  {
    "url": "component---src-pages-design-js-a7ac883ecc3915c2cf12.js.map",
    "revision": "39601e530de21871d98053a8b116df8c"
  },
  {
    "url": "component---src-pages-index-js-51cc4cb56555018e1d2a.js"
  },
  {
    "url": "component---src-pages-index-js-51cc4cb56555018e1d2a.js.map",
    "revision": "4b6bac5ca17aa1269a1a3fab387b79a8"
  },
  {
    "url": "component---src-pages-projects-js-af677c7118538094b8fd.js"
  },
  {
    "url": "component---src-pages-projects-js-af677c7118538094b8fd.js.map",
    "revision": "2e017a67281dd70194a5b0e117e74369"
  },
  {
    "url": "cursor-pointer.cur",
    "revision": "f26f314ea5350b7edc79b8181092b799"
  },
  {
    "url": "cursor-pointer.ico",
    "revision": "f26f314ea5350b7edc79b8181092b799"
  },
  {
    "url": "cursor-pointer.png",
    "revision": "765148c42c97aa4ff43edb2841491e64"
  },
  {
    "url": "cursor-pointer.svg",
    "revision": "179c64d205ef970cecb2a7fc54605a9e"
  },
  {
    "url": "d7eeaac4-17c7fbf76afe328f79bc.js"
  },
  {
    "url": "d7eeaac4-17c7fbf76afe328f79bc.js.map",
    "revision": "d8347e72194e47614798845ac1b3d044"
  },
  {
    "url": "design/index.html",
    "revision": "486c24a85d9ae68564bfa9a112641738"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "7d629c46425aa8ec04447564669e042c"
  },
  {
    "url": "favicon.ico",
    "revision": "3a318e3ceb32f2e06b497c0795ae14cb"
  },
  {
    "url": "favicon.png",
    "revision": "a8c2b1f94376a0ee09ef45d2c266da8c"
  },
  {
    "url": "framework-d18255661b01063664e4.js"
  },
  {
    "url": "framework-d18255661b01063664e4.js.map",
    "revision": "b33f4a2c64d35eb8b92e26fc7bba47f8"
  },
  {
    "url": "gradient-bg.svg",
    "revision": "e846864dda67ae4cd94f3f322925c7df"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "983c8016c682af824df64b79b9a15d07"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "ccfc472ee897dd5cf63c60da7bb3d2fc"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "ff56a6d25e74fb2439dae722fefd1fe3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "fb67fd82772de888175476079877eecf"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "699fe0c7898a7cf6f2252a0bf69a3317"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "a8c2b1f94376a0ee09ef45d2c266da8c"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "00b1493633855fda9a6165e7952bd26c"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "00bf1e6d5660c39aec68030f0be54302"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "images/background/background1.jpg",
    "revision": "7126ff68858b8f5c144bff21f8879611"
  },
  {
    "url": "images/background/background2.jpg",
    "revision": "5018eec5b613c1eb48378c2674f29240"
  },
  {
    "url": "images/background/background3.jpg",
    "revision": "43b44ce8fd39caf03a06f67ee0a96202"
  },
  {
    "url": "images/background/background4.jpg",
    "revision": "248945e57c5432048c9f8e54ccccf7c9"
  },
  {
    "url": "images/background/background5.jpg",
    "revision": "148332b4b827c1ea70e917a97e07556a"
  },
  {
    "url": "images/background/background6.jpg",
    "revision": "1202f8d1aff13a7473cb536152f57fb9"
  },
  {
    "url": "images/background/background7.jpg",
    "revision": "148332b4b827c1ea70e917a97e07556a"
  },
  {
    "url": "images/background/background8.jpg",
    "revision": "1202f8d1aff13a7473cb536152f57fb9"
  },
  {
    "url": "images/backgrounds/background1.jpg",
    "revision": "7126ff68858b8f5c144bff21f8879611"
  },
  {
    "url": "images/backgrounds/background13.jpg",
    "revision": "5018eec5b613c1eb48378c2674f29240"
  },
  {
    "url": "images/backgrounds/background14.jpg",
    "revision": "148332b4b827c1ea70e917a97e07556a"
  },
  {
    "url": "images/backgrounds/background15.jpg",
    "revision": "1202f8d1aff13a7473cb536152f57fb9"
  },
  {
    "url": "images/backgrounds/background2.jpg",
    "revision": "5018eec5b613c1eb48378c2674f29240"
  },
  {
    "url": "images/backgrounds/background3.jpg",
    "revision": "43b44ce8fd39caf03a06f67ee0a96202"
  },
  {
    "url": "images/backgrounds/background3.orig.jpg",
    "revision": "43b44ce8fd39caf03a06f67ee0a96202"
  },
  {
    "url": "images/backgrounds/background4.jpg",
    "revision": "58eb503418023b3d13441c2877361b82"
  },
  {
    "url": "images/backgrounds/background5.jpg",
    "revision": "248945e57c5432048c9f8e54ccccf7c9"
  },
  {
    "url": "images/backgrounds/background6.jpg",
    "revision": "764073ab067669e33d1556628fc0c6c6"
  },
  {
    "url": "images/backgrounds/background7.jpg",
    "revision": "148332b4b827c1ea70e917a97e07556a"
  },
  {
    "url": "images/backgrounds/background8.jpg",
    "revision": "1202f8d1aff13a7473cb536152f57fb9"
  },
  {
    "url": "images/illustration/coodo.png",
    "revision": "57e4ef55863b84d9583d4487c187f536"
  },
  {
    "url": "images/illustration/koodo.png",
    "revision": "d60464e98f037258854507ce5fc55ff0"
  },
  {
    "url": "images/illustration/soundify.png",
    "revision": "1e9985ea90bf6b603ae9a036ae800e38"
  },
  {
    "url": "images/koodo.png",
    "revision": "57e4ef55863b84d9583d4487c187f536"
  },
  {
    "url": "index.html",
    "revision": "3fca424cbd178dd9e871438e8ad70912"
  },
  {
    "url": "logo.png",
    "revision": "ef8445d6d6337459add3ee3eadd3fd18"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "41a6db005db8a30b811b20cfb701bedf"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "27ab35abe1e9d9f3ed581be953d612dd"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "4c5494baec235ffcaae95172d74d8011"
  },
  {
    "url": "page-data/design/page-data.json",
    "revision": "3b607e65ae81f9dbba8f41ee736a5d69"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "a672f57f12e1ed35eab363719135553a"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ccb1677a3924eb7498e27ccb409e361"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/projects/page-data.json",
    "revision": "ef0a865016a83bcdacbe2540b1c09236"
  },
  {
    "url": "projects/index.html",
    "revision": "319656e3681e0e5cb3a2363753dfb2cb"
  },
  {
    "url": "static/d/633080938.json"
  },
  {
    "url": "static/d/970247752.json"
  },
  {
    "url": "styles-57a23a0f5b7fff3c235a.js"
  },
  {
    "url": "styles-57a23a0f5b7fff3c235a.js.map",
    "revision": "3eddbbba1a3b62f4fd9833b2d375d886"
  },
  {
    "url": "styles.7ecdece5b6e3d215f293.css"
  },
  {
    "url": "webpack-runtime-35540dfd17b73e09242d.js"
  },
  {
    "url": "webpack-runtime-35540dfd17b73e09242d.js.map",
    "revision": "0bbaeea24804c42156fc1cc601bf5363"
  },
  {
    "url": "webpack.stats.json",
    "revision": "a91904646254a203d36c660bf8426bef"
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
  if (!resources || !(await caches.match(`/app-eadeea0441b15686062a.js`))) {
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
