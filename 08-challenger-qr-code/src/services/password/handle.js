async function handle() {
    let characters = [];
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH
    
        if(process.env.UPPERCASE_LETTERS === "true") {
            characters.push(..."ABCDE")
        }
    
        if(process.env.LOWERRCASE_LETTERS === "true") {
            characters.push(..."abcde")
        }
    
        if(process.env.NUMBERS === "true") {
            characters.push(..."1234")
        }
    
        if(process.env.SPECIAL_CHARACTERS === "true") {
            characters.push(..."@#$%¨&(")
        }

        for(let i = 0; i< passwordLength; i++){
            const index = Math.floor(Math.random() * characters.length);
            password += characters[index];
        }

        return password;
    
}

export default handle;