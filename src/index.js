

document.addEventListener("DOMContentLoaded", function(){
    getStore()
});

function getStore(){
    fetch('http://localhost:3000/api/stores/1')
    .then (resp => resp.json())
    .then (store => {

        // debugger
        // creates a new instance of a syllabus class
        let newStore = new Store(store.data, store.data.attributes)
        // store.data grabs the id and then store.data.attributes grabs the rest(due to fastJSON)

        console.log(newStore)
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

        // button for to show/hide customers
        const custButtonDiv = document.querySelector('#customer-buttons')
        const showHideButton = document.createElement('button')
        showHideButton.classList.add('btn-secondary')
        
        showHideButton.innerHTML = "Toggle Customer View"
        custButtonDiv.appendChild(showHideButton)

        showHideButton.addEventListener('click', function(e){
            e.preventDefault()
            custContainer.classList.toggle('hidden') 
        })

        // list of customers
        const custContainer = document.querySelector('#customer-container')
        const customerList = store.data.attributes.customers
        
        createNewCustomer()
        // called this here so that I wouldn't have to refresh to see new customer

        customerList.map(customer => {

            // PUT THE NEW CUSTOMER HERE!!!!

            const customerDiv = document.createElement('div');
            customerDiv.classList.add('float-child')
            custContainer.appendChild(customerDiv);

            const customerName = document.createElement('h5')
            customerName.innerText = customer.name
            customerDiv.appendChild(customerName)

            const customerEmail = document.createElement('p')
            customerEmail.innerText = customer.email
            customerDiv.appendChild(customerEmail)

            const customerPhone = document.createElement('p')
            customerPhone.innerText = customer.phone
            customerDiv.appendChild(customerPhone)

            const customerBikeStyle = document.createElement('p')
            customerBikeStyle.innerText = `Customer Bike Style: ${customer.bikeStyle}`
            customerDiv.appendChild(customerBikeStyle)

            // customer edit/delete buttons 
            const editCustomerButton = document.createElement('button')
            editCustomerButton.classList.add('btn-secondary')
            editCustomerButton.innerHTML = `Edit ${customer.name}`
            customerDiv.appendChild(editCustomerButton)
            
            const deleteCustomerButton = document.createElement('button')
            deleteCustomerButton.classList.add('btn-secondary')
            deleteCustomerButton.innerHTML = `Delete ${customer.name}`
            customerDiv.appendChild(deleteCustomerButton)
        })

        // button to show/hide new customer form
        const newCustomerForm = document.createElement('button')
        newCustomerForm.classList.add('btn-secondary')
        newCustomerForm.innerHTML = "Add new customer"
        custButtonDiv.appendChild(newCustomerForm)

        const form = document.querySelector('#form-container')
        newCustomerForm.addEventListener('click', function(e){
            e.preventDefault()
            form.classList.toggle('hidden'); 
        })
    })
}

const createCustForm = document.querySelector('#create-cust-form')

function createNewCustomer(){
    createCustForm.addEventListener('submit', function() {
        // set values from customer form after submit
        const nameInput = document.querySelector('#input-name').value
        const emailInput = document.querySelector('#input-email').value
        const phoneInput = document.querySelector('#input-phone').value
        const stravaInput = document.querySelector('#input-stravaURL').value
        const prefRiding = document.querySelector('#input-bikeStyle').value
        const storeID = 1
        postFetch(nameInput, emailInput, phoneInput, stravaInput, prefRiding, storeID)
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
            // you can use the data variable instead of adding each key/value pair since key name and value are same...

        .then(resp => resp.json())
        .then(cust => {
            
            console.log(cust)
        })
    }
}

    


 