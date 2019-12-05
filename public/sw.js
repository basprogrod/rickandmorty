/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

const cacheName = 'mysite-dynamic'
const HEADER_NAME = 'last-update'

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(cacheName)
      .then((cache) => cache.match(event.request)
        .then((responce) => {
          if (responce) {
            return responce
          }
          return fetch(event.request)
            .then((responce) => {
              console.log('TCL: responce', responce)
              return responce
            })
        })),
  )
})
