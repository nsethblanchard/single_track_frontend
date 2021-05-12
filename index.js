const storeIndex = "http://localhost:3000/api/stores"

document.addEventListener("DOMContentLoaded", function(){
    // e.preventDefault()
   getStoresIndex()
});

function getStoresIndex(){
    fetch(storeIndex)
    .then (resp => resp.json())
    .then (stores => {
        stores.data.forEach(store => {
            const showStore = `
                <div data-id=${store.id}>
                    <h1>Store Name: ${store.attributes.name}</h1>
                    <h3>Store Location: ${store.attributes.city}</h3>
                    <h3>Store Phone: ${store.attributes.phone}</h3>
                    <button data-id=${store.id}> Edit ${store.attributes.name} Information </button>
                </div>
            `
        document.querySelector('#store-container').innerHTML += showStore;    
        })
    })
}