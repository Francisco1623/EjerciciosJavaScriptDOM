const inventory = {
  items: [
    { name: "Laptop", quantity: 5, price: 1200 },
    { name: "Mouse", quantity: 25, price: 20 },
    { name: "Keyboard", quantity: 15, price: 50 }
  ],
  totalItems: 0
};


function updateTotalItems (inventory){
    inventory.totalItems =  inventory.items.reduce((total, product)=> total+product.quantity,0)
}

function addItem(itemName, quantity, price, inventory) {
    const product = inventory.items.find(product => product.name.toLowerCase() === itemName.toLowerCase());
    let response = 'added';
    if (product) {
        product.quantity += quantity;
        product.price = price;
        response = 'updated';
    } else {
        inventory.items.push({name: itemName, quantity, price})
    }
    updateTotalItems(inventory)
    return response;
}

function removeItem(itemName, inventory){
    const productIndex = inventory.items.findIndex(product => product.name.toLowerCase() === itemName.toLowerCase());
    if(productIndex!=-1){
        inventory.items.splice(productIndex,1)
    }
    updateTotalItems(inventory)
}

function removeItem2(itemName, inventory){
    inventory.items = inventory.items.filter(product => product.name.toLowerCase() != itemName.toLowerCase())
    updateTotalItems(inventory)
}

export {inventory, updateTotalItems, addItem, removeItem}

