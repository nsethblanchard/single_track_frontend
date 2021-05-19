


class Store {
    constructor(store) {
        // debugger
        this.id = store.id;
        this.name = store.name;
        this.phone = store.phone;
        this.city = store.city;
        Store.all.push(this);
        
    }

    // don't need "function" keyword when declared in classes
    renderStore() {
        // debugger
        return `
            <div data-id="${this.id}">
                <h1>${this.name}</h1>
                <h3>Located in ${this.city}</h3>
                <h3>${this.phone}</h3>
                <button type="button" id="${this.id}" class="btn-secondary delete-store"> Delete ${this.name} </button>
            </div>
            <br>
        `
    }


}

Store.all = [];