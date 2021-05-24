
const storeContainer = document.querySelector('#store-container')
const storeForm = document.querySelector('#create-store-form')

 // New Store Button
 const createStoreButton = document.querySelector('#create-store')
 const createStoreForm = document.querySelector('#store-form-container')
 
 createStoreButton.addEventListener('click', function(e){
     e.preventDefault()
     createStoreForm.classList.toggle('hidden')
 })

getStores()

// delete store buttons using event delegation
document.addEventListener('click', function(event) {
    
    if (event.target.matches('.delete-store')) {
        // added this second if to kill the undefined error I was getting for the newly created store (so it didn't need a refresh)
        const store = Store.findById(event.target.id)
        if (store !== undefined) {
            const url = `http://localhost:3000/api/stores/${event.target.id}`
            deleteStore(url, store)
            }
        }
    }, false);

function getStores(){
    fetch('http://localhost:3000/api/stores')
    .then (resp => resp.json())
    .then (stores => {
        
        stores.data.forEach(store => {
            
            // I built this object because I wanted to make the data coming from index match post
            const storeData = {
                id: store.id,
                name: store.attributes.name,
                phone: store.attributes.phone,
                city: store.attributes.city,
            }
            
            // create new store
            let newStore = new Store(storeData)
            storeContainer.innerHTML += newStore.renderStore()
                   
            const storeDiv = document.querySelector(`#store-${store.id}`)
            storeDiv.insertAdjacentHTML('afterend', "&nbsp;")
            
            // create associated customers
            store.attributes.customers.forEach(customer => {
                let newCustomer = new Customer(customer);
                storeDiv.innerHTML += newCustomer.renderCustomer()
            })
            
        })
    })
}

//delete store
function deleteStore(deleteURL, store) {
    const delStore = storeContainer.querySelector(`#store-${store.id}`)
    
    fetch(deleteURL, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }) 
    .then(delStore.remove())
}


storeForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const newStoreName = document.querySelector('#input-store-name').value
    const newStorePhone = document.querySelector('#input-store-phone').value
    const newStoreCity = document.querySelector('#input-store-city').value
    postNewStore(newStoreName, newStorePhone, newStoreCity)
})

function postNewStore(name, phone, city) {
    const data = {name, phone, city}
    fetch('http://localhost:3000/api/stores', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)})
    .then(resp => resp.json())
    .then(store => {
        createStoreForm.classList.toggle('hidden')
        
        const newStore = new Store(store)
        let newStoreHTML = newStore.renderStore()
        
        storeContainer.innerHTML += newStoreHTML

        // for some reason, I couldn't get the new store's delete button to show in the previous event delegation-this was the workaround
        let newDeleteButtons = document.getElementsByClassName('delete-store')
        let index = newDeleteButtons.length - 1
            newDeleteButtons[`${index}`].addEventListener('click', function(e){
                e.preventDefault()
                const ind = Store.all.length - 1 
                const store = Store.all[`${ind}`]
                const url = `http://localhost:3000/api/stores/${e.target.id}`

                deleteStore(url, store)
            })
        })
    }

