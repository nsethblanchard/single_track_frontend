

class Customer {
    constructor(data) {
        this.id = data.id
        this.name = data.name;
        this.email = data.email;
        this.phone = data.phone;
        this.bikeStyle = data.bikeStyle;
        Customer.all.push(this);
    }  
}

Customer.all = []