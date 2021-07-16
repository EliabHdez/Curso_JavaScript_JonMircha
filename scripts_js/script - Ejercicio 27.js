/* 27.- Programa una clase llamada Pelicula.
		La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
		  - Todos los datos del objeto son obligatorios.
		  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
		     7 restantes números.
		  - Valida que el título no rebase los 100 caracteres.
		  - Valida que el director no rebase los 50 caracteres.
		  - Valida que el año de estreno sea un número entero de 4 dígitos.
		  - Valida que el país o paises sea introducidos en forma de arreglo.
		  - Valida que los géneros sean introducidos en forma de arreglo.
		  - Valida que los géneros introducidos esten dentro de los géneros 
		     aceptados*.
		  - Crea un método estático que devuelva los géneros aceptados*.
		  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
		    decimal de una posición.
		  - Crea un método que devuelva toda la ficha técnica de la película.
		  - Apartir de un arreglo con la información de 3 películas genera 3 
		    instancias de la clase de forma automatizada e imprime la ficha técnica 
		    de cada película.

		* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

class Pelicula{
    constructor({id, titulo, director, year, pais, generos, clasificacion, calificacion}){

        this.id = id
        this.titulo = titulo
        this.director = director
        this.year = year
        this.pais = pais
        this.generos = generos
        this.calificacion = calificacion
		this.clasificacion = clasificacion

		this.validarIMDB(id)
		this.validarTitulo(titulo)
		this.validarDirector(director)
		this.validarYear(year)
		this.validarPais(pais)
		this.validarGeneros(generos)
		this.validarCalificacion(calificacion)
		this.validarClasificacion(clasificacion)
    }

	static get listaGeneros(){
		return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News, Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
	}
	static generosAceptados(){
		return console.log(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(', ')}`)
	}

	validarCadena(propiedad, valor){
		if(valor === undefined) return console.warn(`${propiedad} "${valor}" esta vacío`)

		if(typeof valor !== 'string') return console.error(`${propiedad} "${valor}" ingresado, NO es un una cadena de texto`)

		return true
	}

	validarIMDB(id){
		if(this.validarCadena('IMDB id', id)){
			if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
				return console.error(`IMDB id "${id}" no es válido, debe contener 9 caracteres, los 2 primeros deben ser letras minúsculas y los 7 restantes números`)
			}
		}
	}

	validarLongitudCadena(propiedad, valor, longitud){
		if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`)

		return true
	}
	
	validarTitulo(titulo){
		if(this.validarCadena('Título', titulo)){
			this.validarLongitudCadena('Título', titulo, 100)
		}
	}

	validarDirector(director){
		if(this.validarCadena('Director', director)){
			this.validarLongitudCadena('Director', director, 50)
		}
	}

	validarNumeros(propiedad, valor){
		const yearEnCurso = 'Año Actual 2021'

		if(valor === undefined) return console.warn(`${propiedad} "${valor}" esta vacío`)

		if(typeof valor !== 'number') return console.error(`${propiedad} "${valor}" ingresado, NO son numeros`)

		if(valor > 2021) return console.error(`El ${propiedad} "${valor}" NO es válido. El ${propiedad} no puede ser mayor al año en curso (${yearEnCurso})`)

		return true
	}

	validarYear(year){
		if(this.validarNumeros('Año de Estreno', year)){
			if(!(/^[0-9]{4}$/.test(year))){
				return console.error(`${year} NO es un año valido. El año se debe conformar de 4 digitos enteros`)
			}
		}
	}

	validarArray(propiedad, valor){
		if(valor === undefined) return console.warn(`No se ha(n) ingresado ${propiedad}`)

		if(!(valor instanceof Array)) return console.error(`El/Los ${propiedad} deben estar en un Array`)

		if(valor.length === 0) return console.warn(`El Array "${propiedad}" esta vacío`)

		valor.forEach((element) => {
			if(typeof element !== 'string') return console.error(`"${element}" NO es válido. El tipo de dato debe ser de texto`)
			
			if(!/^[a-zA-Z-\s]*$/.test(element)) return console.error(`${element} NO es un dato válido`)

			if(element.length === 0) return console.warn('El "valor" del string NO esta definido')
		})

		// for(let element of valor){
		// 	if(typeof element !== 'string') return console.error(`"${element}" NO es válido. El tipo de dato debe ser numerico`)
			
		// 	if(!/^[a-zA-Z-\s]*$/.test(element)) return console.error(`${element} NO es un dato válido`)

		// 	if(element.length === 0) return console.warn('El "valor" del string NO esta definido')
		// }

		return true
	}

	validarPais(pais){
		this.validarArray('País(es) de origen', pais)
	}

	validarGeneros(generos){
		if(this.validarArray('Generos', generos)){
			for (let genero of generos){
				if(!Pelicula.listaGeneros.includes(genero)){
					console.error(`El genero "${genero}" NO es un género válido`)
					Pelicula.generosAceptados()			}
			}
		}
	}

	validarNumCal(propiedad, valor){
		if(valor === undefined) return console.warn('No se ha ingresado ninguna calificacion')

		if(typeof valor !== 'number') return console.error(`${propiedad} "${valor}" no es válida. Esta debe ser un valor numerico`)

		return true
	}

	validarCalificacion(calificacion){
		if(this.validarNumCal(`La calificación`, calificacion))
			return (calificacion < 0 || calificacion > 10) 
				? console.error(`La calificacion debe ser un numero entre 0 y 10. Calificacion asignada "${calificacion}" No es válida`)
				: this.calificacion = calificacion.toFixed(1)
	}

	validarClasificacion(clasificacion){
		if(this.validarCadena(`La clasificacion`, clasificacion)){
			if(clasificacion === 'B-15') return true

			if(clasificacion === 'AA') return true

			if(clasificacion === 'B15') return true

			if(!/^[A|B|C|D]$/.test(clasificacion)) return console.error(`La clasificación ${clasificacion} NO es válida`)
		}
	}
	fichaTecnica(){
		console.log(`
			FICHA TÉCNICA:

			ID: ${this.id}
			Título: ${this.titulo}
        	Director: ${this.director}
        	Año de Estreno: ${this.year}
        	Pais(es): ${this.pais.join(', ')}
        	Géneros: ${this.generos.join(', ')}
        	Calificación: ${this.calificacion}
			Clasificación: ${this.clasificacion}`)
	}
}

const PelisFavoritas = [
	{
		id: 'tt0816692',
		titulo: 'Interestelar',
		director: 'Christopher Nolan',
		year: 2006,
		pais: ['Estados Unidos', 'Reino Unido', 'Canada'],
		generos: ['Sci-Fi', 'Adventure', 'Drama'],
		calificacion: 8.6,
		clasificacion: 'AA'
	},
	{
		id: 'tt2713180',
		titulo: 'Corazones de Hierro',
		director: 'David Ayer',
		year: 2014,
		pais: ['Estados Unidos'],
		generos: ['Action', 'War', 'Drama'],
		calificacion: 7.6,
		clasificacion: 'B15'
	},
	{
		id: "tt1663662",
		titulo: 'Titanes del Pacifico',
		director: 'Guillermo del Toro',
		year: 2013,
		pais: ['Estados Unidos'],
		generos: ['Action', 'Adventure', 'Sci-Fi'],
		calificacion: 6.9,
		clasificacion: 'B'
	}
]

PelisFavoritas.forEach(el => new Pelicula(el).fichaTecnica())