class Observer {
    /**
     * @param {string} itemName
     */
    notify(itemName) {
        throw new Error("Method 'notify()' must be implemented.");
    }
}

class Customer extends Observer {
    /**
     * @param {string} name
     */
    constructor(name) {
        super();
        this.name = name;
        this.notifications = 0;
    }

    /**
     * @param {string} itemName
     */
    notify(itemName) {
        this.notifications += 1;
    }

    /**
     * @return {number}
     */
    countNotifications() {
        return this.notifications;
    }
}

class OnlineStoreItem {
    /**
     * @param {string} itemName
     * @param {number} stock
     */
   
    observers = new Set([])
    stockNumber = 0
    constructor(itemName, stock) {
        this.itemName = itemName;
        this.stock = stock;
    }

    /**
     * @param {Observer} observer
     */
    subscribe(observer) {
        this.observers.add(observer)
    }

    /**
     * @param {Observer} observer
     */
    unsubscribe(observer) {
        this.observers.delete(observer)
    }

    /**
     * @param {number} newStock
     */
    updateStock(newStock) {
        if(newStock > this.stockNumber) {
        for(const observer of this.observers.keys()) {
            observer.notify()
        } }
        this.stockNumber = newStock
    }
}
