


class Store {
    constructor(id, attributes) {
        this.id = id;
        this.name = attributes.name;
        this.phone = attributes.phone;
        this.city = attributes.city;
        Store.all.push(this);
        // debugger
    }



}

Store.all = [];