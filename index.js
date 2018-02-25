const root = document.getElementById('root');

async function fetchBooks() {
 const res = await fetch('http://it-ebooks-api.info/v1/search/react');
 const data = await res.json();
 root.innerHTML = data.Books.map(book => {
     return `<p>${book.Title}</p>`
 }).join('');
}



window.addEventListener('load', () => {
    
    if (navigator.serviceWorker.controller) {
        console.log('[PWA Builder] active service worker found, no need to register')
      } else {
        //Register the ServiceWorker
        navigator.serviceWorker.register('pwabuilder-sw.js', {
          scope: './'
        }).then(function(reg) {
          console.log('Service worker has been registered for scope:'+ reg.scope);
        });
      }


    fetchBooks()
})