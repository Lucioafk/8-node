async function addItem(userCart) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total,item) => total + item.subTotal(), 0);
    console.log(`\nTotal: ${result}`);    
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index ===! -1) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, index) {
    const deleteIndex = index -1; 

    if (index >= 0 && index < userCart.length){ 
        userCart.splice(index, 1);
    }
}

async function displaycart(userCart) {
    console.log("\nShopee cart list: ")
    userCart.forEach((item, index ) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal ${item.subTotal()}`);
    })
    
}

export {
    addItem, calculateTotal, deleteItem, removeItem, displaycart
}
