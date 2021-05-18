

class Customer {
    constructor(customer, customerAttributes) {
        this.id = customer.id
        this.name = customerAttributes.name;
        this.phone = customerAttributes.phone;
        this.bikeStyle = customerAttributes.bike_style;
        Customer.all.push(this);
    }  

    renderCustomer() {
        return `
            <div class="float-child">
                <h5>${this.name}</h5>
                <p>${this.phone}</p>
                <p>Customer Bike Style: ${this.bikeStyle}</p>
                <button type="button"  class="btn-secondary edit-customer"> Edit ${this.name}</button>
                <button type="button" id="${this.id}" class="btn-secondary delete-customer"> Delete ${this.name} </button>
            </div>
        `
    }

    static findById(id) {
        return this.all.find(customer => customer.id === id)
    }

    
}

Customer.all = []