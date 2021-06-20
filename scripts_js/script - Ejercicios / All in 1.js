// Soluciones a los ejercicio echas por echas por el profe

	// Ejericio 1
	// 	Forma 1
			contarCaracteres = (cadena = '') => {
			if(cadena === ''){
				console.warn('No ingresaste ninguna palabra')
			}else{
				console.info(`La palabra "${cadena}" tiene ${cadena.length} caracteres`)
				}
			}	
			contarCaracteres('parangarocutirimicuaro')

		// Forma 2
			const contCar = (word = '') => 
				(!word) 
					? console.warn('No ingresaste ninguna palabra') 
					: console.info(`La palabra "${cadena}" tiene ${cadena.length} caracteres`)

	// Ejercicio 2
	// 	Forma 1
			const recTexto = (cadena = '', longitud = undefined) =>
				(!cadena)
					? console.warn('No ingresaste ninguna palabra')
					: (longitud === undefined)
						? console.warn('No ingresaste la longitud donde terminara de el recortado')
						: console.info(cadena.slice(0, longitud))
				
			recTexto("Hola Mundo", 4)
			recTexto()
			recTexto("Hola Mundo")
			recTexto("", 5)

	// Ejercicio 3
	// 	Forma 1
			const strToArr = (cadena = '', separator = undefined) => {
				if(!cadena){
					console.warn('No ingresaste ninguna palabra')
				}else{
					if(!separator){
						console.warn('No ingresaste ningun separador')
					}else{
						console.info(cadena.split(separator))
					}
				}
			}

			strToArr('lorem impsum dolor sit amet consectectur', ' ')
			strToArr('Ene, Feb, Mar, Abr, Mayo, Jun, Jul, Ago, Sept, Oct, Nov, Dic', ',')
			strToArr()
			strToArr('Hola Mundo')
			strToArr('','-')

		// Forma 2
			const strToArr2 = (cadena = '', separator = undefined) =>
				(!cadena)
				? console.warn('No ingresaste ninguna palabra')
				: (!separator === undefined)
					? console.warn('No ingresaste ningun separador')
					: console.info(cadena.split(separator))

			strToArr2('lorem impsum dolor sit amet consectectur', ' ')
			strToArr2('Ene, Feb, Mar, Abr, Mayo, Jun, Jul, Ago, Sept, Oct, Nov, Dic', ',')
			strToArr2()
			strToArr2('Hola Mundo')
			strToArr2('','-')

	// Ejercicio 4
	// 	Forma 1
			const repTexto = (texto = '', repeticiones = undefined) => {
				if(!texto) return console.warn('No ingresaste ningun texto o palabra')

				if(!repeticiones) return console.warn('No ingresaste el numero de repeticiones')

				if(repeticiones === 0) return console.error('El numero de repeticiones no puede ser 0')
				
				if(Math.sign(repeticiones) === -1) return console.warn('El numero de repeticiones no puede ser negativo')

				for(let i = 1; i <= repeticiones; i++) console.info(`${texto}, ${i}`)
			}

			repTexto('Hola Mundo', 3)
			repTexto('Hola Mundo', 0)
			repTexto('Hola Mundo', -20)
			repTexto('', 20)
			repTexto('Hola Mundo')

	// Ejercicio 5
	// 	Forma 1
			const invCadena = (cadena = '') => {
    			(!cadena)
    			    ? console.warn('No ingresaste ninguna palabra o texto')
    			    : console.info(cadena.split('').reverse().join(''))
				}

			invertirCadena()
			invertirCadena('Hola Mundo')

	// Ejercicio 6
	// 	Forma 1
			let x = 0
			let cont = 0

			const repWord = (texto = '', word = '') => {
			    if(!texto) return console.warn('No ingresaste un texto')

			    if(!word) return console.warn('No ingresaste la palabra a buscar')

			    while (x !== -1){
			        x = texto.toLowerCase().indexOf(word, x)
			        if(x !== -1){
			            x++
			            cont++
			        }
			    }
			    return console.info(`La palabra ${word}, se repite ${cont} veces`)
			}

			repWord()
			repWord('', 'moto')
			repWord('Tengo una moto, con esa moto hice uno de los mejores viajes de mi vida. AMO MI MOTO')
			repWord('Tengo una moto, con esa moto hice uno de los mejores viajes de mi vida. AMO MI MOTO', 'moto')

	// Ejercicio 7
	// 	Forma 1
		const palindromo = (palabra = '') => {
			if (!palabra) return console.warn('No ingresaste ninguna palabra')

			palabra = palabra.toLowerCase()
			let palReves = palabra.split('').reverse().join('')

			return (palabra === palReves)
			? console.info(`La palabra ${palabra} es palindroma`)
			: console.info(`La palabra ${palabra} no es palindroma`)
		}

		palindromo('')
		palindromo('Honda')
		palindromo('Salas')

	// Ejercicio 8
	// 	Forma 1
			const delCaracteres = (texto = '', patron = '') => {
	    (!texto)
	    ? console.warn('No ingresaste ningun texto')
	    : (!patron)
	        ? console.warn('No ingresaste el patron de caracteres a eliminar')
	        : console.info(texto.replace(new RegExp(patron,'ig'),''))
		}

		delCaracteres()
		delCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5')
		delCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz')
		delCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xy')
		delCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xz')
		delCaracteres('xyz1, xyz2, xyz3, xyz4 y xyz5', 'yz')

	// Ejercicio 9
	// 	Forma 1
			const aleatorio() => {
				console.info(Math.round((Math.random() * 100) + 500))
			}

			aleatorio()

	// Ejercicio 10
	// 	Forma 1
			const capicua = (numero = 0) => {
    			if(!numero) return console.warn('No ingresaste un número')

    			if(typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un numero`)

    			numero = numero.toString()
    			let alReves = numero.split('').reverse().join('')

    			return (numero === alReves)
    			    ? console.info(`Si es capicua. Numero original: ${numero}. Numero al reves: ${alReves}`)
    			    : console.info(`No es capicua. Numero original: ${numero}. Numero al reves: ${alReves}`)
			}

			capicua()
			capicua('19')
			capicua({})
			capicua(2000)
			capicua(2002)
			capicua(18.99)
			capicua(212.212)

	// Ejercicio 11
	// 	Forma 1
			const factorial = (num = undefined) => {    
    			if(num === undefined) return console.warn('No ingresaste ningun valor numerico')

    			if(num < 0) return console.error('Los numeros negativos no son validos')

    			if(num === 0) return console.error('El numero 0 no es valido')

    			if(typeof num !== 'number') return console.error('El valor ingresado NO es un numero')

    			let factorial = 1

    			for(let i = num; i > 1; i--){
    			    factorial *= i
    			}
    			return console.info(`El factorial de ${num} es ${factorial}`)
			}

			factorial()
			factorial('5')
			factorial([1,2,3])
			factorial(0)
			factorial(-5)
			factorial(5)
			factorial(8)