const createCustForm = document.querySelector('#create-cust-form')

document.addEventListener("DOMContentLoaded", function(){
    getStore()
    createNewCustomer()
});

function getStore(){
    fetch('http://localhost:3000/api/stores/1')
    .then (resp => resp.json())
    .then (store => {
        // Store Info
        const storeName = document.createElement('h1')
        storeName.innerText = store.data.attributes.name
        const storePhone = document.createElement('h3')
        storePhone.innerText = store.data.attributes.phone
        const storePic = document.createElement('img')
        storePic.src = 'https://lh3.googleusercontent.com/OZ_i32kAJo5viB3gTBaph2QhI1DclqlGsr53Pfnc4nBWULSmm6CmZGalXiTiO0cM3TzZvg=s85'
        storePic.width = '350'
        const storeContainer = document.querySelector('#store-container')
        storeContainer.append(storeName, storePhone, storePic)

        // button for customers
        const custButtonDiv = document.querySelector('#customer-list-button')
        const button = document.createElement('button')
        button.classList.add('btn-secondary')
        button.innerHTML = "Show List of Current Customers"
        custButtonDiv.appendChild(button)
        
        
        
        // list of customers
        const custContainer = document.querySelector('#customer-container')
        const customerList = store.data.attributes.customers
        customerList.map(customer => {
            const customerDiv = document.createElement('div');
            
            custContainer.appendChild(customerDiv);

            const customerName = document.createElement('p')
            customerName.innerText = customer.name
            customerDiv.appendChild(customerName)
            


            // console.log(customer)
        })


        button.addEventListener('click', function(e){
            e.preventDefault()
            console.log('hey')
        })
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

    


 