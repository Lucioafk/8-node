const player1 = {
    NOME: "Mario", 
    VELOCIDADE: 4,
    MANOBRABILIDADE: 2,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi", 
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function rollDice(){
   return Math.floor(Math.random() * 6);
}

async function getRandomBlock() {
    let = random = Math.random();
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break
        default:
            result = "CONFRONTO";
    }

    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
        console.log(`${characterName} rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
    
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);

        //sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);

            //rolar dados
    let diceResult1 = await rollDice ();
    let diceResult2 = await rollDice ();

    //teste de habilidade
    let testSkill1 = 0;
    let testSkill2 = 0;

    if (block === "RETA") {
        testSkill1 = diceResult1 + character1.VELOCIDADE;
        testSkill2 = diceResult2 + character2.VELOCIDADE;

        await logRollResult (
            character1.NOME,
            "velocidade",
            diceResult1,
            character1.VELOCIDADE
        );

        await logRollResult (
            character2.NOME,
            "velocidade",
            diceResult2,
            character2.VELOCIDADE
        );

        
    };
    if (block === "CURVA") {
        testSkill1 = diceResult1 + character1.MANOBRABILIDADE;
        testSkill2 = diceResult2 + character2.MANOBRABILIDADE;

        await logRollResult (
            character1.NOME,
            "manobrabilidade",
            diceResult1,
            character1.MANOBRABILIDADE
        );

        await logRollResult (
            character2.NOME,
            "manobrabilidade",
            diceResult2,
            character2.MANOBRABILIDADE
        );
    };
    if (block === "CONFRONTO") {
        let powerResult1 = diceResult1 + character1.PODER;
        let powerResult2 = diceResult2 + character2.PODER;

        await logRollResult (
            character1.NOME,
            "velocidade",
            diceResult1,
            character1.VELOCIDADE
        );

        await logRollResult (
            character2.NOME,
            "velocidade",
            diceResult2,
            character2.VELOCIDADE
        );
    };

        if (testSkill1 > testSkill2) {
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if (testSkill2 > testSkill1) {
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++
        }
    }


}

(async function main() {
    console.log(`Corrida entre ${player1.NOME} e ${player2.NOME} começando a corrida... \n`)        
    
    await playRaceEngine(player1, player2)
})();

