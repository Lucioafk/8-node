async function addItem(userCart) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total,item) => total + item.subTotal(), 0);
    console.log(result);    
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index ===! -1) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, index) {
    
}

export {
    addItem, calculateTotal, deleteItem, removeItem
}
