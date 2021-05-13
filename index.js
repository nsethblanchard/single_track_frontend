const storeIndex = "http://localhost:3000/api/stores"


document.addEventListener("DOMContentLoaded", function(e){
    e.preventDefault()
    getStoresIndex()
    
});

function getStoresIndex(){
    fetch(storeIndex)
    .then (resp => resp.json())
    .then (stores => {
        stores.data.map(store => {
            const showStore = `
                <div id=${store.id}>
                    <h4>Store Name: ${store.attributes.name}</h4>
                    <button class=store-info id=${store.id}> See ${store.attributes.name} Information </button>
                    <br>    
                </div>`
        document.querySelector('#store-container').innerHTML += showStore;    
        })
    })
}


const storeButton = document.querySelectorAll(".store-info")
// console.log(storeButton)
for (button of storeButton){
    button.addEventListener("click", function(){
        console.log("hey")
    })
}




// storeContainer.addEventListener('click', function(e){
//     fetch(`http://localhost:3000/api/stores/${e.target.id}`)
//     .then(resp => resp.json())
//     .then(info => {
//         // console.log(info.data.attributes.customers.length)

//         info.data.attributes.customers.map(cust =>{
//             console.log(cust)
            
//         })    
//     })   
// })
    


 