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

class pelicula{
    constructor(idIMBD, titulo, director, añoEstreno, pais, generos, clasificacion, calificacionIMBD){
		if(titulo.length > 100) return console.error('El titulo no puede contener mas de 100 caracteres')

		if(director.length > 50) return console.error('El nombre del director no puede contener mas de 50 caracteres')

		if(typeof añoEstreno !== 'number') return console.error('El año tiene que estar definido por numeros')

		if(añoEstreno.length > 4) return console.warn('El año solo debe de contener 4 caracteres numericos. Por ejemplo 1990')

		if(!(pais instanceof Array)) return console.error('El/Los pais(es) de origen deben estar almacenados en un Array')

		if(!(generos instanceof Array)) return console.error('El/Los genero(s) deben estar almacenados en un Array')

		if(generos !== Action || generos !== Adult) return console.error('El genero ingresado no es valido')

		if(calificacionIMBD < 0 || calificacionIMBD > 10) return console.error('La calificacion tiene que ser un numero entre 0 y 10')

        this.id = idIMBD
        this.titulo = titulo
        this.director = director
        this.estreno = añoEstreno
        this.pais = pais
        this.genero = generos
        this.calificacion = calificacionIMBD
		this.clasificacion = clasificacion
    }

	get Generos(){
		return console.warn('Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.')
	}

	set fichaTecnica(fichaTecnica){
		return console.log(``)
	}
}

class fury extends pelicula{
	constructor(idIMBD, titulo, director, añoEstreno, pais, generos, clasificacion, calificacionIMBD){
		this.id = idIMBD
		this.titulo = titulo
		this.director = director
		this.estreno = añoEstreno
		this.pais = pais
		this.generos = generos
		this.clasificacion = clasificacion
		this.calificacion = calificacionIMBD
	}
}