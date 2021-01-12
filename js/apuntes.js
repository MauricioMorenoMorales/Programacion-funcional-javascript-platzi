//Para copiar un objeto separado de su cvopia haz esto

/*
const copyobject = JSON.parse(JSON.stringtify(original object))
const copyobject = Object.assign(originalobject)
*/

// Intento #1
const a = {
	value: 2,
}

const addOne = () => (a.value += 1)
const timesTwo = () => (a.value *= 2)

addOne()
timesTwo()

console.log(a.value) // 6

// Sin embargo, si ejecutamos las mismas funciones en orden invertido
// obtenemos resultados diferentes

timesTwo()
addOne()

console.log(a.value) // 5 !??

const b = {
	value: 2,
}

const addOne = x => Object.assign({}, x, { value: x.value + 1 })
const timesTwo = x => Object.assign({}, x, { value: x.value * 2 })

addOne(b)
timesTwo(b)

// El resultado siempre es el mismo a pesar de
// ejecutar las funciones en orden diferente

timesTwo(b)
addOne(b)

console.log(b.value)

//Creando un closure

function buildSum(a) {
	return function (b) {
		return a + b
	}
}
//? Para ingresar parametros a esta funcion se hace de esta forma

const addFive = buildSum(5)
console.log(addFive(5))

const buildSumArrow = a => b => a + b

console.log(buildSumArrow(5)(5))

// Otro ejemplo de clojures

function sumThreeNumber(a, b, c) {
	return a + b + c
}

console.log(sumThreeNumber(1, 2, 3))

function sumThreeNumberClojure(a) {
	return function (b) {
		return function (c) {
			return a + b + c
		}
	}
}

console.log(sumThreeNumber(1)(2)(3))

//Puede servir para modularizar los saludos de una mejor forma

const saludo = mensaje => nombre => mensaje + nombre

const saludarFeliz = saludo('Hola estimado ')
console.log(saludarFeliz('Mauricio'))

const saludarEnojado = saludo('No me hables ')
console.log(saludarEnojado('Mauricio'))
