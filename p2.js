console.log("Pode tirar carteira ?");
let idade ;

idade = 14
if (idade >= 18) {
  console.log(`Pode tirar carteira.Pois tem ${idade}.`)
} else if (idade > 0 && idade < 18) {
  console.log(`Não pode tirar carteira pois tem ${idade} anos.`)
} else {
  console.log("Idade errada.")
}