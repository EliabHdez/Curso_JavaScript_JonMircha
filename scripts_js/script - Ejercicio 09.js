// 9.- Programa una función que obtenga un numero aleatorio entre 501 y 600

const aleatorio = () => {
    return console.info(Math.round(Math.random() * (600 - 501) + 501))
    // console.info(Math.round(Math.random() * (600 - 501) + 501))
}

const aleatorio2 = () => {
    // return console.info(Math.floor(Math.random() * (600 - 501) + 501))
    return console.info()
}

aleatorio()
aleatorio2(Math.floor(Math.random() * (600 - 501) + 501))