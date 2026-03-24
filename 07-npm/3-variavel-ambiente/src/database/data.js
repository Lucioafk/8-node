async function connectToDatabase(user, password) {
    if (user === "naruto" && password === "uzumaki") {
        console.log("Conexão sucesso")
    } else {
        console.log("Conexão falha")
    }
}

async function main() {
    
}

main();

export default connectToDatabase;