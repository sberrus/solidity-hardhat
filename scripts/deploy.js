// imports
// hardhat nos provee de una versión optimizada de ethers para este framework.
const { ethers, run, network } = require("hardhat");

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

	console.log("Desplegando contrato... ⏳");
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
	console.log(`Contrato desplegado ✅\n address: ${simpleStorage.address}`);

	// VERIFICANDO CONTRATO EN ETHERSCAN
	// Verificamos la red en la que estamos haciendo el deploy mediante su chainId
	// De esta forma verificamos que si estamos en una red diferente a la de rinkeby, no se verifique el contrato.
	if ((network.config.chainId === 4, process.env.ETHERSCAN_API_KEY)) {
		console.log("Esperando validacion por bloques... ⏳");
		// Esperamos la verificación por bloques
		await simpleStorage.deployTransaction.wait(6);
		console.log("Verificando contrato... ⏳");
		// Usamos la función que hemos preparado para verificar el contrato
		await verify(simpleStorage.address, []);
		console.log("Contrato verificado ✅");
	}
};

/**
 * Verificador de contratos. Con esta función podemos verificar nuestros smart contracts para que pueda verse el código fuente en la etherscan
 * sin tener que realizar ese proceso manualmente.
 * ESTE PROCESO SOLO FUNCIONA PARA ETHERSCAN. Hay otros scaners disponibles que cuentan con su propia API para poder verificar facilmente
 * los smart contracts.
 * @param {*} contractAddress smart contract's address
 * @param {*} args smart contract's args
 *
 * https://docs.etherscan.io/tutorials/verifying-contracts-programmatically
 */
const verify = async (contractAddress, args) => {
	/**
	 * Antes de utilizar esta función hay que instalar el pluggin de "@nomiclabs/hardhat-etherscan" e instalar la dependencia en el archivo
	 * hardhat.config.js. Para que pueda funcionar todo correctamente.
	 * Si ejecutas el comando "yarn hardhat" en la consola se verá una opcion en los "tasks" llamada verify. Si se ve, la instalación
	 * se ha realizado correctamente
	 */
	console.log("Verificando contrato en etherscan");
	/**
	 * La función run() que nos provee hardhat nos permite ejecutar "tasks" programaticamente. El cual es una ayuda para crear los scripts
	 * y automatizar ciertas tareas.
	 */
	try {
		await run("verify:verify", {
			address: contractAddress,
			constructorArguments: args,
		});
	} catch (error) {
		if (error.message.toLowercase().includes("already verified")) {
			console.log("already verified");
		} else {
			console.log(error);
		}
	}
};

main()
	.then(() => {
		process.exit(0);
	})
	.catch((err) => {
		console.log(error);
		process.exit(1);
	});
