function rank(qtdVitoria, qtdDerrotas){
    saldo = qtdVitoria - qtdDerrotas;

    switch(true){
        case(saldo <= 10):
            nivel = "Ferro";
            break;
        case(saldo >= 11 && saldo <= 20):
            nivel = "Bronze";
            break;
        case(saldo >= 21 && saldo <= 50):
            nivel = "Prata";
            break;
        case(saldo >= 51 && saldo <= 80):
            nivel = "Ouro";
            break;
        case(saldo >= 81 && saldo <= 90):
            nivel = "Diamante";
            break;
        case(saldo >= 91 && saldo <= 100):
            nivel = "Lendário";
            break;
        case(saldo > 101):
            nivel = "Imortal";
            break;
    }
}

let nivel;
let saldoVitoria = 60; // Mudar quantidade de vitórias 
let saldoDerrotas = 32; // Mudar quantidade de derrotas
let saldo;

rank(saldoVitoria, saldoDerrotas);
console.log(`O Herói tem um saldo de ${saldo} e está no nível ${nivel}`);