// Classe de círculos
class Circulos{
  constructor(raio){
    this.raio = raio
  }
  area(){
    let area = 3.14*this.raio**2
    console.log(`A area é ${area} m2`)
    return area
  }
  perimetro(){
    let perimetro = 2*3.14*this.raio
    console.log(`O perimetro é ${perimetro} m.`)
    return perimetro
  }
}

let c1 = new Circulos(5)
c1.area()
c1.perimetro()
