const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
//ENTORNO DE EJECUCIÓN
/**
 * Una de las cosas que hay que saber es que la ejecución de los tests se va a ejecutar en la red
 * que este configurada como default en hardhat.config.js
 */

// describe()
/**
 * Decribe es el bloque de ejecución de test que va a dispararse. Es como la funciín main() que suele
 * usarse para inicializar cualquier programa o script.
 * Recibe una breve descripción del contenido de qeu se esta testeando y la función que ejecuta el test.
 */
describe("SimpleStorage", () => {
	// beforeEach()
	/**
	 * beforeEach() es una función que recibe como parametro una función que se va a ejecutar por cada it()
	 * que haya dentro del bloque de testing.
	 * En este caso usamos el beforeEach() para poder desplegar un contrato y poder interactuar sobre este.
	 */

	// Variables de alcance global
	/**
	 * Como podemos ver, beforeEach() se ejecuta antes de correr los tests que se van a ejecutar en los it(),
	 * por lo que si usar una variable que se inicializa en el beforeEach() pero que pueda ser consumida por los
	 * it, tenemos que crearlas fuera de cualquier cuerpo de función de la siguiente manera: ->
	 */
	let simpleStorageFactory, simpleStorage; //Creamos los espacios en memoria para que puedan ser almacenados y los it() puedan consumirlos.
	beforeEach(async () => {
		simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
		simpleStorage = await simpleStorageFactory.deploy();
	});

	// it()
	/**
	 * it() es la función que se encarga de ejecutar el test que deseamos realizar. Recibe 2 argumentos:
	 *
	 * - Descripción del test: La descripción debe ser lo más asertiva posible de manera que pueda rápidamente
	 * describir que esta ejecutando ese código y cual debería ser el comportamiento esperado.
	 *
	 * - function cb: la función cb que se ejecuta y que contiene la lógica del test.
	 */
	it("Debe empezar con el valor de favorite number en 0", async () => {
		const currentValue = await simpleStorage.retrieves();
		const expectedValue = "0";

		// assert()
		/**
		 * assert() es una función que nos provee la libreria chai que es la que nos permite ejecutar ciertas caractertisticas
		 * a la hora de testear los smartcontracts, es una libreria para test de js pero nos sirve perfectamente para este tipo
		 * de tests, además de ser la recomendada por hardhat para realizar los tests.
		 *
		 * Recive 2 argumentos:
		 *
		 * - el valor a evaluar, el valor esperado.
		 *
		 * De ser true, pasa el test. De lo contrario, devuelve el error a la consola cuando ejecutemos el tests
		 */
		assert.equal(currentValue.toString(), expectedValue);
	});

	it("Debe actualizar el valor favoriteNumber a 7 con método store()", async () => {
		const expectedValue = "7";
		const storeReceipt = await simpleStorage.store(expectedValue);
		storeReceipt.wait(1);
		const currentValue = await simpleStorage.retrieves();

		// Comprobamos que currentValue === expectedValue;
		assert.equal(currentValue.toString(), expectedValue);
		// expect(currentValue.toString()).to.equal(expectedValue); //Misma ejecución que la linea superior.
	});

	// TEST PARA MOSTRAR COMANDO CON BANDERA "--grep [palabra clave]"
	it("Debe actualizar el valor favoriteNumber a 2 con método store()", async () => {
		const expectedValue = "2";
		const storeReceipt = await simpleStorage.store(expectedValue);
		storeReceipt.wait(1);
		const currentValue = await simpleStorage.retrieves();

		// Comprobamos que currentValue === expectedValue;
		assert.equal(currentValue.toString(), expectedValue);
	});

	// Ejecutando un unico test con it.only()
	/**
	 * Con el método it.only("Descripcion",func) podemos declarar directamente en el código que ese va a ser el único test
	 * que se va a ejecutar. Esto es para ejecutar un unico test de manera sencilla.
	 */
});

// comandos para ejecutar los tests de hardhat
/**
 * ``` yarn/npm hardhat test ```: Ejecuta todos los tests de forma secuencial.
 * ``` yarn/npm hardhat test --grep [palabra clave]```: La bandera --grep nos permite buscar una palabra clave por lo que todos los it()
 * que en el texto de la descripción contengan dicha palabra clave, será el test qeu será ejecutado omitiendo el resto.
 *
 */
