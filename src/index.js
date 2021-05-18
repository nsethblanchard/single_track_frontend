document.addEventListener("DOMContentLoaded", function(){ 
    getCustomers()
    getStore()
    createNewCustomer()
});


// button for to show/hide customers
const custButtonDiv = document.querySelector('#customer-buttons')
const custContainer = document.querySelector('#customer-container')
const showHideButton = document.createElement('button')
showHideButton.classList.add('btn-secondary')
showHideButton.innerHTML = "Toggle Customer View"
custButtonDiv.appendChild(showHideButton)

showHideButton.addEventListener('click', function(e){
    e.preventDefault()
    custContainer.classList.toggle('hidden') 
})

// button to show/hide new customer form
const newCustomerFormButton = document.createElement('button')
newCustomerFormButton.classList.add('btn-secondary')
newCustomerFormButton.innerHTML = "Add new customer"
custButtonDiv.appendChild(newCustomerFormButton)

const form = document.querySelector('#form-container')
newCustomerFormButton.addEventListener('click', function(e){
    e.preventDefault()
    form.classList.toggle('hidden'); 
})


// buttons for deleting customers (tried to include in class html render but couldn't querySelect)
// const allCustContainers = document.querySelectorAll('.float-child')
// console.log(allCustContainers)


function getStore(){
    fetch('http://localhost:3000/api/stores/1')
    .then (resp => resp.json())
    .then (store => {
        // creates a new instance of a store class
        let newStore = new Store(store.data, store.data.attributes)
        const storeContainer = document.querySelector('#store-container')
        storeContainer.innerHTML += newStore.renderStore()
        
        // added picture manually, should have added as attribute in initial migration
        const storePic = document.createElement('img')
        storePic.src = 'https://lh3.googleusercontent.com/OZ_i32kAJo5viB3gTBaph2QhI1DclqlGsr53Pfnc4nBWULSmm6CmZGalXiTiO0cM3TzZvg=s85'
        storePic.width = '350'
        storeContainer.append(storePic)
        })
    }


function getCustomers() {
    fetch('http://localhost:3000/api/stores/1/customers')
    .then (resp => resp.json())
    .then (customers => {
        customers.data.forEach(customer => {
            let newCustomer = new Customer(customer, customer.attributes)
            const customerContainer = document.querySelector('#customer-container')

            customerContainer.innerHTML += newCustomer.renderCustomer()
            
        })

        // delete button
        const deleteButton = document.querySelectorAll('.delete-customer')
        
        deleteButton.forEach(del => {
            del.addEventListener('click', function(e){
                e.preventDefault()
                console.log("id =>", e.target.id)
                console.log(Customer.findById(e.target.id))

            })
        })

    })
}

const createCustForm = document.querySelector('#create-cust-form')

function createNewCustomer(){
    createCustForm.addEventListener('submit', function(e) {
        e.preventDefault()
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
        
        fetch('http://localhost:3000/api/stores/1/customers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)})
            // you can use the data variable instead of adding each key/value pair since key name and value are same...destructuring

        .then(resp => resp.json())
        .then(customer => {
                // console.log(customer)
                
                // let newCustomer = new Customer(customer)
                // const customerContainer = document.querySelector('#customer-container')

                // customerContainer.innerHTML += newCustomer.renderCustomer()
        })
    }
}


// function deleteCustomer() {
//     fetch(`http://localhost:3000/api/stores/1/customers/${}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         }
//         body: JSON.stringify()}) 

//         .then(resp => resp.json())
//         .then(customer => {



//         })

// }

    


 