const storeOption = document.querySelector('#pref-store')
const createCustForm = document.querySelector('#create-cust-form')

document.addEventListener("DOMContentLoaded", function(){
    
    getStoresIndex()
    createNewCustomer()
});


function getStoresIndex(){
    // read fetch for store index!!
    fetch('http://localhost:3000/api/stores')
    .then (resp => resp.json())
    .then (stores => {
        stores.data.map(store => {
            const showStore = `
                <div id=store-${store.id}>
                    <h4>Store Name: ${store.attributes.name}</h4>
                    <button class=store-info id=info-button-${store.id}> See ${store.attributes.name} Information </button>
                    <br>    
                </div>`
            document.querySelector('#store-container').innerHTML += showStore; 
            
            // trying to get each button to have a click event!!
            let button = document.getElementById(`info-button-${store.id}`)
            // console.log(button)
            button.addEventListener('click', function(){
                console.log('hey')
            })   

            // add all of the store names as options in new customer dropdown
            let newOption = document.createElement('option')
            newOption.innerText = store.attributes.name
            newOption.value = store.id
            storeOption.appendChild(newOption)
        })
    })
}

function createNewCustomer(){
    createCustForm.addEventListener('submit', function(e) {
        e.preventDefault()
        console.log(e)
        // second fetch for creating new customer
        


    })


}

    


 