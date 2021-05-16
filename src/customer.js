

class Customer {
    constructor(customer, customerAttributes) {
        this.id = customer.id
        this.name = customerAttributes.name;
        this.email = customerAttributes.email;
        this.phone = customerAttributes.phone;
        this.bikeStyle = customerAttributes.bikeStyle;
        Customer.all.push(this);
    }  

    renderCustomer() {
        return `
            <div class="float-child">
                <h5>${this.name}</h5>
                <p>${this.phone}</p>
                <p>${this.email}</p>
                <p>Customer Bike Style: ${this.bikeStyle}</p>
                <button type="button" class="btn-secondary"> Edit ${this.name}</button>
                <button type="button" class="btn-secondary"> Delete ${this.name}</button>
            </div>
        `
    }
}

Customer.all = []