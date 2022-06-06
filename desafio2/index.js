import fs from 'fs'

//# El archivo para leer
let productsList = JSON.parse(fs.readFileSync('./productos.json'))

const product1 = {
	title: 'Gardenias',
	price: 80,
	thumbnail: 'foto',
}
const product2 = {
	title: 'petunias',
	price: 70,
	thumbnail: 'foto',
}
const product3 = {
	title: 'Rosas',
	price: 70,
	thumbnail: 'foto',
}

class Contenedor {
	constructor(nombreArchivo) {
		this.nombreArchivo = nombreArchivo
	}

	//recibe un objeto, lo guarda en el archivo y devuelve el id asignado
	async save(obj) {
		try {
			let readJson = await fs.promises.readFile('./productos.json', 'utf-8') //lo lee como string

			let jsonParsed = await JSON.parse(readJson)
			jsonParsed.push(obj)
			readJson = await fs.promises.writeFile(
				'./productos.json',
				JSON.stringify(jsonParsed, null, 2),
				'utf-8'
			)

			let id = 0

			jsonParsed.map((producto) => {
				if (producto.id > id) id = producto.id
			})

			obj.id = id + 1
			await fs.promises.writeFile(
				'./productos.json',
				JSON.stringify(jsonParsed, null, 2)
			)
		} catch (err) {
			throw new Error(`esto es un error: ${err.message}`)
		}
	}

	//recibe un id y devuelve el objeto con ese id o null si no está
	getById(id) {
		let idReturned

		if (this.nombreArchivo) {
			idReturned = this.nombreArchivo.find((prod) => prod.id === id)
			console.log(idReturned || null)
		}
	}

	//devuelve un array con los objetos presentes en el archivo
	getAll() {
		if (this.nombreArchivo) {
			const allProducts = [...this.nombreArchivo]
			console.log(allProducts)
		} else {
			console.log('aún hay productos en el archivo')
		}
	}

	//Elimina del archivo el objeto con el id buscado
	async deleteById(removeId) {
		try {
			const newData = this.nombreArchivo.findIndex((prod) =>
				prod.id === removeId ? true : false
			)

			const removed = this.nombreArchivo.splice(newData, 1)
			console.log(removed)

			await fs.promises.writeFile(
				'./productos.json',
				JSON.stringify(this.nombreArchivo, null, 2),
				'utf-8'
			)

			console.log(this.nombreArchivo)
		} catch (err) {
			throw new Error(`esto es un error: ${err.message}`)
		}
	}

	//Elimina todos los objetos presentes en el archivo
	async deleteAll() {
		try {
			await fs.promises.writeFile('./productos.json', '[]', 'utf-8')
		} catch (err) {
			throw new Error(`esto es un error: ${err.message}`)
		}
	}
}

const productos = new Contenedor(productsList)

// productos.save(product1)
// productos.save(product2)
// productos.save(product3)
// productos.getById(2)
// productos.getAll()
// productos.deleteById(1)
// productos.deleteAll()
