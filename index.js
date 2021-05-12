const storeIndex = "http://localhost:3000/api/stores"

document.addEventListener("DOMContentLoaded", function(e){
    e.preventDefault()
    getStoresIndex()


});

function getStoresIndex(){
    fetch(storeIndex)
    .then (resp => resp.json())
    .then (stores => {
        stores.data.forEach(store => {
            const showStore = `
                <div id=${store.id}>
                    <h1>Store Name: ${store.attributes.name}</h1>
                    <h3>Store Location: ${store.attributes.city}</h3>
                    <h3>Store Phone: ${store.attributes.phone}</h3>
                    <button class=store-info id=${store.id}> See ${store.attributes.name} Customer List </button>
                    <button> Edit Store Information </button>
                    <br>
                    <br>
                    <br>
                </div>
            `
        document.querySelector('#store-container').innerHTML += showStore;    
        })
    })

    const storeContainer = document.querySelector("#store-container")

    storeContainer.addEventListener('click', function(e){
        fetch(`http://localhost:3000/api/stores/${e.target.id}`)
        .then(resp => resp.json())
        .then(info => {
            // console.log(info.data.attributes.customers.length)

            info.data.attributes.customers.forEach(cust =>{
                console.log(cust)
                
                const showCustomers = `
                <div id=table_${id}>
                    <h1>Customer Name: ${store.attributes.name}</h1>
                    <h3>Store Location: ${store.attributes.city}</h3>
                    <h3>Store Phone: ${store.attributes.phone}</h3>
                    <button class=store-info id=${store.id}> See ${store.attributes.name} Customer List </button>
                    <button> Edit Store Information </button>
                    <br>
                    <br>
                    <br>
                </div>
            `

            })
            // if (info.data.attributes.customers.length > 0) {
            //     console.log(info.data.attributes.customers)
            // } else {
            //     alert("This store currently has no listed customers.");
            // }
            
        })
        
    })
    
}


 