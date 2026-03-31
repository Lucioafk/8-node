import prompt from "prompt";
import mainPrompt from "./prompt/prompt-main.js";
import createQRcode from "./services/qr-code/create.js";
 
 async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select == 1) await createQRcode();
        if (choose.select == 2) console.log ("Escolheu o password");
    })

    prompt.start();
 }

 main ();