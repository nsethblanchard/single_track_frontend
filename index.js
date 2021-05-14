// const storeOption = document.querySelector('#pref-store')
const createCustForm = document.querySelector('#create-cust-form')

document.addEventListener("DOMContentLoaded", function(){
    getStoresIndex()
    createNewCustomer()
});

function getStoresIndex(){
    fetch('http://localhost:3000/api/stores/1')
    .then (resp => resp.json())
    .then (store => {
        console.log(store.data.attributes.name)
        const storeName = document.createElement('h1').innerText = store.data.attributes.name
        const storePic = document.createElement('img')
        storePic.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbeardbrews.com%2Flocal_businesses%2Fblack-dog-bikes%2F&psig=AOvVaw0YV9buZ1EG4q44o-5WAho-&ust=1621077702403000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCiu5iHyfACFQAAAAAdAAAAABAD'
        // stores.data.forEach(store => {
        //     const showStore = `
        //         <div id="store-${store.id}">
        //         <h4>Store Name: ${store.attributes.name}</h4>
        //         <button class="store-info" id="info-button-${store.id}"> See ${store.attributes.name} Information </button>
        //         <br>    
        //         </div>
        //         `                   
        //     document.querySelector('#store-container').innerHTML += showStore; 
                
            // let button = document.querySelector(`#info-button-${store.id}`)
            // console.log(button)
           
            
            // button.addEventListener('click', function(e){
            //     e.preventDefault()
            //     console.log('hey')
            // })    
        // })
    })
}



function createNewCustomer(){
    createCustForm.addEventListener('submit', function(e) {
        e.preventDefault()
        
        // set values from customer form after submit
        const nameInput = document.querySelector('#input-name').value
        const emailInput = document.querySelector('#input-email').value
        const phoneInput = document.querySelector('#input-phone').value
        const stravaInput = document.querySelector('#input-stravaURL').value
        const prefRiding = document.querySelector('#input-bikeStyle').value
        const prefStore = document.querySelector('#pref-store').value
        postFetch(nameInput, emailInput, phoneInput, stravaInput, prefRiding, prefStore)
    })

    function postFetch(name, email, phone, stravaURL, bikeStyle, store_id) {
        let data = {name, email, phone, stravaURL, bikeStyle, store_id}
        // second fetch to create new customers
        fetch('http://localhost:3000/api/customers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)})
            // you can use the data variable instead of adding each key since key name and value are same...

        .then(resp => resp.json())
        .then(cust => console.log(cust))
    }
}

    


 