

class Customer {
    constructor(customer) {
        this.id = customer.id
        this.store_id = customer.store_id
        this.name = customer.name;
        this.phone = customer.phone;
        this.bikeStyle = customer.bike_style;
        Customer.all.push(this);
    }  

    renderCustomer() {
        return `
            <div class="float-child">
                <h3>${this.name}</h3>
                <p>${this.phone}</p>
                <p>Customer Bike Style: ${this.bikeStyle}</p>
                <button type="button" id="${this.id}" class="btn-secondary delete-customer"> Delete ${this.name} </button>
            </div>
        `
    }

    static findById(id) {
        return this.all.find(customer => customer.id === id)
    }

    
}

Customer.all = []