import * as cartService from ".services/carrinho.js";
import createItem from "./services/itens";

const cart = [];

const item1 = await createItem("pao", 20.99, 1);
const item2 = await createItem("pao de forma", 39.99,3);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

await cartService.deleteItem(cart, item1.name)
await cartService.deleteItem(cart, item2.name)

await cartService.calculateTotal(cart);