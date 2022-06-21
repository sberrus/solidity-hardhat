// imports
// hardhat nos provee de una versión optimizada de ethers para este framework.
const { ethers } = require("hardhat");

// async main
const main = async () => {
	/**
	 * De esta forma podemos llamar al contrato para poder desplegarlo. Simplemente hay que indicar en
	 * el parametro el nombre del contrato que queremos desplegar. Nos devuelve una instancia del contrato
	 * y con el mismo método .deploy() lo enviamos a la red.
	 *
	 * La ventaja de este framework es que nos ayuda a ahorrarnos escribir mucho código. Solo debemos
	 * respetar la estructura de las carpetas y todo funciona como debe ser.
	 */

	const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

	console.log("Deploying Contract...");
	const simpleStorage = await SimpleStorageFactory.deploy();
	await simpleStorage.deployed();

	/**
	 * hardhat nos provee de un entorno de pruebas el cual nos permite realizar deploys en una red local de manera
	 * sencilla sin tener que configurar ninguna red externa para realizar las pruebas y el desarrollo y testeo
	 * de los smart contracts antes de enviarlos a la mainnet.
	 *
	 * Aunque hardhat nos provee de esta herramienta también podemos configurar otras redes cambiando al configuración en
	 * hardhat.config.js
	 */
	console.log(`Deploying contract to: ${simpleStorage.address}`);
};
// main

main()
	.then(() => {
		process.exit(0);
	})
	.catch((err) => {
		console.log(error);
		process.exit(1);
	});
