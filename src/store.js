


class Store {
    constructor(id, attributes) {
        this.id = id;
        this.name = attributes.name;
        this.email = attributes.email;
        this.phone = attributes.phone;
        this.stravaURL = attributes.stravaURL;
        this.bikeStyle = attributes.bikeStyle;
        Store.all.push(this);
        debugger
    }



}

Store.all = [];