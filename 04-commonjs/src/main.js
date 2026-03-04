 const p = require("./services/products")
 const config = require("./services/config")
 
 async function main(params) {
   console.log("Olá, mundo!")
   p.getFullName("408", "mousepad") 
   p.getFullName("508", "mousepad") 

   p.getProductLabel("mousepad")

   console.log(config.devArea);
 }

 main();