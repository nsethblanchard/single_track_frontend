


class Store {
    constructor(id, attributes) {
        this.id = id;
        this.name = attributes.name;
        this.phone = attributes.phone;
        this.city = attributes.city;
        Store.all.push(this);
        // debugger
    }

    // don't need "function" keyword when declared in classes
    renderStore() {
        // debugger
        return `
            <div data-id=${this.id}>
                <h1>${this.name}</h1>
                <h3>Located in ${this.city}</h3>
                <h3>${this.phone}</h3>
            </div>
            <br>
        `
    }


}

Store.all = [];