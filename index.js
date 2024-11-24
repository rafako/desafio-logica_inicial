let nome = "Marston"
let xp = 0
let nomeNivel = ""

switch (true) {
    case xp < 1000:
        nomeNivel = "Ferro";
        break;
    case xp >= 1000 && xp <= 2000:
        nomeNivel = "Bronze";
        break;
    case xp >= 2001 && xp <= 5000:
        nomeNivel = "Prata";
        break;
    case xp >= 5001 && xp <= 7000:
        nomeNivel = "Ouro";
        break;
    case xp >= 7001 && xp <= 8000:
        nomeNivel = "Platina";
        break;
    case xp >= 8001 && xp <= 9000:
        nomeNivel = "Ascendente";
        break;
    case xp >= 9001 && xp <= 10000:
        nomeNivel = "Imortal";
        break;
    case xp > 10000:
        nomeNivel = "Radiante";
        break;
}

console.log("O Herói de nome " + nome + " está no nível " + nomeNivel + ", com " + xp + " pontos de Xp.")