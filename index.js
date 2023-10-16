// Desafio do Heroi

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}*/

let nomeHeroi = "Thiago Mazarakis Cruz "
let quantidadeDeXp = 10001
let nivelH = ""


if (quantidadeDeXp < 1000){

 nivelH = "Ferro"

}else if (quantidadeDeXp >= 1000 &&  quantidadeDeXp <= 2000){

 nivelH = "Bronze"
   
}else if (quantidadeDeXp >= 2001 &&  quantidadeDeXp <= 6000){
   
nivelH = "Prata"

}else if (quantidadeDeXp >= 6001 &&  quantidadeDeXp <= 7000){

nivelH = "Ouro"

}else if (quantidadeDeXp >= 7001 &&  quantidadeDeXp <= 8000){

nivelH = "Platina"

}else if (quantidadeDeXp >= 8001 &&  quantidadeDeXp <= 9000){

nivelH = "Ascendente"

}else if (quantidadeDeXp >= 9001 &&  quantidadeDeXp <= 10000){

 nivelH = "Imortal"

}else if (quantidadeDeXp >= 10001){

nivelH = "Radiante"

}

console.log("O Héroi de nome " + nomeHeroi + " está no nível " + nivelH)




