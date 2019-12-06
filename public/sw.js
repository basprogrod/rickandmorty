/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

const cacheName = 'mysite-dynamic'
const HEADER_NAME = 'last-update'
const TIMER = 500000
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(cacheName)
      .then((cache) => cache.match(event.request)
        .then((response) => {
          if (response) {
            const responseTime = new Date(response.headers.get(HEADER_NAME))
            const timeDiff = new Date().getTime() - responseTime
            if (timeDiff < TIMER) {
              return response
            }
          }
          return fetch(event.request)
            .then((response) => {
              const requestInit = {
                status: response.status,
                statusText: response.statusText,
                headers: {
                  [HEADER_NAME]: new Date().toUTCString(),
                },
              }
              response.headers.forEach((value, key) => {
                requestInit.headers[key] = value
              })
              const responseCopy = response.clone()
              responseCopy.blob()
                .then((body) => {
                  cache.put(event.request, new Response(body, requestInit))
                })
              return response
            })
        })),
  )
})
