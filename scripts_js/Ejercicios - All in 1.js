// Soluciones a los ejercicio echas por echas por el profe

	// Ejericio 1
		// 	Forma 1
		console.log('------------Ejercicio 1-----------')
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
		console.log('------------Ejercicio 2-----------')
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
		console.log('------------Ejercicio 3-----------')
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
		console.log('------------Ejercicio 4-----------')
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
		console.log('------------Ejercicio 5-----------')
			const invCadena = (cadena = '') => {
    			(!cadena)
    			    ? console.warn('No ingresaste ninguna palabra o texto')
    			    : console.info(cadena.split('').reverse().join(''))
				}

			invCadena()
			invCadena('Hola Mundo')

	// Ejercicio 6
		// 	Forma 1
		console.log('------------Ejercicio 6-----------')
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
		console.log('------------Ejercicio 7-----------')
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
		console.log('------------Ejercicio 8-----------')
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
		console.log('------------Ejercicio 9-----------')
			const aleatorio = () => {
				console.info(Math.round((Math.random() * 100) + 500))
			}

			aleatorio()

	// Ejercicio 10
		// 	Forma 1
		console.log('------------Ejercicio 10-----------')
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
		console.log('------------Ejercicio 11-----------')
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

	// Ejercicio 12
		// Forma 1
		console.log('------------Ejercicio 12-----------')
			const numeroPrimo = (numero = undefined) => {
				if(numero === undefined) return console.warn('No ingresaste ningun numero')

				if(typeof numero !== 'number') return console.error('El valor ingresado no es un numero')

				if(numero === 0) return console.error('El numero no puede ser 0')

				if(numero === 1) return console.error('El numero no puede ser 1')
				
				if(Math.sign(numero) === -1) return console.error('El numero no puede ser negativo')

				let divisible = false

				for(let i = 2; i < numero; i++){
					if(numero % i === 0)
					divisble = true
					break
				}
				return (divisible)
				? console.log(`El numero ${numero} NO es primo`)
				: console.log(`El numero ${numero} SI es primo`)
			}

			numeroPrimo()
			numeroPrimo('320')
			numeroPrimo(true)
			numeroPrimo(0)
			numeroPrimo(1)
			numeroPrimo(-13)
			numeroPrimo(13)
			numeroPrimo(200)

	// Ejercicio 13
		// Forma 1
		console.log('------------Ejercicio 13-----------')
			const numParImpar = (numero = undefined) => {
				if(numero === undefined) return console.warn('No ingresaste ningun numero')

				if(typeof numero !== 'number') return console.error('El valor ingresado no es un numero')

				return (numero % 2 === 0)
				? console.log(`El numero ${numero} SI es un numero par`)
				: console.log(`El numero ${numero} NO es un numero par`)
			}

			numParImpar()
			numParImpar('hola')
			numParImpar('8')
			numParImpar(10)
			numParImpar(15)

	// Ejercicio 14
		// Forma 1
		console.log('------------Ejercicio 14-----------')
			const grados = (numero, unidad) => {
				if(numero === undefined) return console.warn('No ingresaste ningun numero')

				if(typeof numero !== 'number') return console.error('El valor ingresado no es un numero')

				if(unidad === undefined) return console.warn('No ingresaste el tipo de temperatura')

				if(typeof unidad !== 'string') return console.error('El valor ingresado no es valido')

				if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.error('El valor ingresado no es valido. Ingresado una C para Celsius o una F para Fahrenheit')

				let fahr = numero * (9/5) + 32
				let celsius = (numero - 32) * (5/9)

				if(unidad === 'C'){
					return console.log(`${numero}°C = ${fahr}°F`)
				}else{
					console.log(`${numero}°F = ${Math.round(celsius)}°C`)
				}
			}

			grados()
			grados('2')
			grados(2)
			grados(2, true)
			grados(2, 'hola')
			grados(2, 'E')
			grados(2, 'C')
			grados(35, 'F')

	// Ejercicio 15
		// Forma 1
		console.log('------------Ejercicio 15-----------')
			const conversion = (numero, base) => {
				if(numero === undefined) return console.warn('No ingresaste ningun numero')
			
				if(typeof numero !== 'number') return console.error('El valor ingresado no es un numero')
			
				if(numero < 0) return console.error('El numero ingresado no puede ser negativo')
			
				if(base === undefined) return console.error('No ingresaste la base para la conversion')

				if(typeof base !== 'number') console.error('El valor ingresado NO es un numero')

				if(base.length > 2) return console.error('El tipo de dato ingresado no es valido. Por favor 	ingresa 2 para conversion de Binario y 10 para conversion de Decimal')

				if(base === 2){
					return console.info(`${numero} en base ${base} = ${parseInt(numero, base)} en base 10`)
				}else if(base === 10){
					return console.info(`${numero} en base ${base} = ${(numero.toString(base))} en base 2`)
				}else{
					console.error('El tipo de base a convertir NO es valido')
				}
			}

			conversion()
			conversion(2)
			conversion('5')
			conversion(-1)
			conversion(100)
			conversion(100, '2')
			conversion(100, 2)
			conversion(11001, 2)
			conversion(10110101, 2)
			conversion(4, 10)
			conversion(10, 10)
			conversion(100, 10)
			conversion(154, 10)
			conversion(10110, 10)
			conversion(111, 8)

		// Forma 2
			const conversion1 = (numero, base) => {
				if(numero === undefined) return console.warn('No ingresaste ningun numero')
			
				if(typeof numero !== 'number') return console.error('El valor ingresado no es un numero')
			
				if(numero < 0) return console.error('El numero ingresado no puede ser negativo')
			
				if(base === undefined) return console.error('No ingresaste la base para la conversion')
				
				if(typeof base !== 'number') console.error('El valor ingresado NO es un numero')
				
				return (base === 2)
					? console.info(`${numero} en base ${base} = ${parseInt(numero, base)} en base 10`)
					: (base === 10)
						? console.info(`${numero} en base ${base} = ${(numero.toString(2))} en base 2`)
						: console.error('El valor ingresado no es valido. Por favor ingresa 2 para conversion 	de Binario y 10 para conversion de Decimal')
			}
			
			// Tambien se pudo haber resuelto con una expresion regular como en el ejercicio de los grados 	donde pusieramos como parametros 2 y 10
			
			conversion1()
			conversion1(2)
			conversion1('5')
			conversion1(-1)
			conversion1(100)
			conversion1(100, '2')
			conversion1(100, 2)
			conversion1(11001, 2)
			conversion1(10110101, 2)
			conversion1(4, 10)
			conversion1(10, 10)
			conversion1(100, 10)
			conversion1(154, 10)
			conversion1(10110, 10)
			conversion1(111, 8)

	// Ejercicio 16
		// Forma 1
		console.log('------------Ejercicio 16-----------')
			const aplicarDescuento = (monto, descuento = 0) => {
				if(monto === undefined) return console.warn('No ingresaste un valor')

				if(monto === 0) return console.error('El valor no puede ser 0')

    			if(typeof monto !== 'number') return console.error('El valor ingresado no es valido')

    			if(monto < 0) return console.error('El valor no puede ser un numero negativo')

    			if(typeof descuento !== 'number') return console.error('El porcentaje debe ser un valor de tipo numerico')

    			if(descuento < 0) return console.error('El valor del porcentaje no puede ser negativo')

				return console.info(`$${monto} - ${descuento}% = $${(monto - (monto * descuento) / 100)}`)
			}

			aplicarDescuento()
			aplicarDescuento('hola')
			aplicarDescuento(-100)
			aplicarDescuento(0)
			aplicarDescuento(1000)
			aplicarDescuento(1000, '20')
			aplicarDescuento(1000, -20)
			aplicarDescuento(1000, 25)

	// Ejercicio 17
		// Forma 1
		console.log('------------Ejercicio 17-----------')
			const anios = (fecha) => {
				if(fecha === undefined) return console.warn('No ingresaste ninguna fecha')
			
				if(!(fecha instanceof Date)) return console.error('El valor de fecha no es valido')
			
				let difFecha = new Date().getTime() - fecha.getTime()
				let aniosEnMS = 1000 * 60 * 60 * 24 * 365
				let aniosHumanos = Math.floor(difFecha / aniosEnMS)
			
				return (Math.sign(aniosHumanos) === -1)
					? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
					: (Math.sign(aniosHumanos) === 1)
						? console.info(`Han pasado ${aniosHumanos} años, desde el año ${fecha.getFullYear()}`)
						: console.info(`${fecha.getFullYear()} es el año en curso`)
			}
			
			anios()
			anios({})
			anios('hola')
			anios(new Date())
			anios(new Date(1890,8,25))
			anios(new Date(1990,8,25))
			anios(new Date(2090,8,25))

	// Ejercicio 18
		// Forma 1
			const vocCons = (text) => {
				if(!text) return console.warn('No ingresaste ningun texto')
				
				if(typeof text !== 'string') return console.error('El tipo de dato ingresado no es valido')
			
				let vocales = 0
				let consonantes = 0
				let signos = 0
			
				text = text.toLowerCase()
			
				for(let letra of text){
					if(/[aeiouáéíóú]/.test(letra)){
						vocales++
					}
					if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)){
						consonantes++
					}
					if(/[,.;:/?!-]/.test(letra)){
						signos++
					}
				}
				return console.info({
					text,
					vocales,
					consonantes,
					signos
				})
			}
			
			vocCons()
			vocCons(10)
			vocCons('3')
			vocCons('hola mundo')
			vocCons('ÑOÑO')
			vocCons('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum! quia adipisci ipsa non at 	ipsum facere, repellendus repudiandae iste laudantium veritatis placeat aperiam sequi, temporibus 	voluptatibus perferendis illo voluptates nostrum?.')

	// Ejercicio 19
		// Forma 1
			const validarNombre = (nombre) => {
				if(!nombre) return console.warn('No ingresaste ningun nombre')
			
				if(typeof nombre !== 'string') return console.error('El valor ingresado no es valido')
			
				let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g.test(nombre)
			
				return (expReg === true)
					? console.info(`"${nombre}" es un nombre valido`)
					: console.info('El nombre ingresado NO es valido')
			}

			validarNombre('')
			validarNombre(738)
			validarNombre({})
			validarNombre([])
			validarNombre('1239478')
			validarNombre('Moises 121212')
			validarNombre('Moisés Hernández')
			validarNombre('Toño Muñiz')
			validarNombre('Tomas Müller')

	// Ejercicio 20
		// Forma 1
			const email = (email) => {
				if(!email) return console.warn('No ingresaste ningun email')
			
				if(typeof email !== 'string') return console.error(`El valor ${email} ingresado no es valido`)
			
				let expReg = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúÜüÑñ._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9]+$/g.test(email)
				// /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
					// Expresion regular utilizada por el profe Jon Mircha
			
				return (expReg)
					? console.info(`${email} es un correo válido`)
					: console.info(`El email ingresado NO es valido`)
			}

			email()
			email('')
			email(4323)
			email('238948')
			email('238948@')
			email('238948@gmail.')
			email('238948@.outlook')
			email('238948@.com')
			email('238734@gmail.com')
			email('eliab.hdez@icloud.com')
			email('moises_hl_zod@hotmail.com')

	// Ejercicio extra
		// Fusion Ejercicios 19 - 20
			const nameEmail = (name_email, expReg) => {
				if(!name_email) return console.warn('No ingresaste ningun nombre')
			
				if(typeof name_email !== 'string') return console.error(`El nombre ${name_email} no es válido`)
			
				if(expReg === undefined) return console.warn('No ingresaste el patron a evaluar')

				if(!(expReg instanceof RegExp)) return console.error(`El valor ${expReg} no es una expresion regular`)
			
				let expReg1 = expReg.test(name_email)
			
				return (expReg1)
					? console.info(`El valor ${name_email} coincide con el patron`)
					: console.warn(`El valor ${name_email} NO coincide con el patron`)
			}

			nameEmail('')
			nameEmail(25)
			nameEmail('Moises Hernandez')
			nameEmail('Moises Hernandez', 'hola')
			nameEmail('Moises Hernandez', /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/g)
			nameEmail('moises_hl_zod@hotmail', /^[a-zA-Z0-9ÁÉÍÓÚáéíóúÜüÑñ._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9]+$/g)
			nameEmail('moises_hl_zod@hotmail.com', new RegExp(/^[a-zA-Z0-9ÁÉÍÓÚáéíóúÜüÑñ._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9]+$/g))