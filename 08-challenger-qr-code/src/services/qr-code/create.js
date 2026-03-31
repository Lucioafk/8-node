import prompt from "prompt";
import promptQRcode from "../../prompt/prompt-qrcode.js";
import handle from "./handle.js";

async function createQRcode() {
    prompt.get(promptQRcode, handle);

    prompt.start();
}

export default createQRcode;