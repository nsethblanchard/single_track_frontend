

class Customer {
    constructor(id, attributes) {
        this.id = id
        this.name = attributes.name;
        this.email = attributes.email;
        this.phone = attributes.phone;
        this.bikeStyle = attributes.bikeStyle;
        Customer.all.push(this);
    }  
}

Customer.all = []