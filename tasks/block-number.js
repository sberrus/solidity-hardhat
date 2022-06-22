const { task } = require("hardhat/config");

// CRENADO TASK PERSONALIZADA
/**
 * Importamos la función tasks() que recibe 2 párametros strings:
 *
 * - El primero es el nombre del task, es el nombre que aparece en la consola cuando ves la lista de tasks en la consola.
 * - El segundo es la description, siendo la descripción que también aparece en la consola.
 *
 * .setAction(): recive como parámetro una función callback que será la que se va a ejecutar al momento de llamar a dicha task.
 * El callback recibe 2 argumentos taskArgs, hre:
 *
 * - tasksArgs: Son los argumentos que le enviamos al momento de ejecutar este task,
 * - hre: HardhatRuntimeEnvoirment es un objeto que nos permite acceder a la libreria hardhat y al entorno de ejecución de la
 * blockchain. Esta es la que nos proveerá la información del bloque.
 *
 */
task("block-number", "Muestra el número del bloque actual de la red.").setAction(async (taskArgs, hre) => {
	const blockNumber = await hre.ethers.provider.getBlockNumber();
	console.log(`BlockNumber actual es: ${blockNumber}`);
});

module.exports = {};

// AL FINALIZAR CON LA CONFIGURACIÓN DE LA TAREA, HAY QUE IMPORTARLA EN EL ARCHIVO hardhat.config.js
