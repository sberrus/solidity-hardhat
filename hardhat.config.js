require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("./tasks/block-number");
require("hardhat-gas-reporter");
require("solidity-coverage");

// ETHERSCAN
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

// RINKEBY ENVOIRMENT VARIABLES
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

// GANACHE ENVOIRMENT VARIABLES
// const GANACHE_RPC_URL = process.env.GANACHE_RPC_URL;
// const GANACHE_PRIVATE_KEY = process.env.GANACHE_PRIVATE_KEY;

// LOCALHOST ENVOIRMENT VARIABLES
const LOCALHOST_RPC_URL = process.env.LOCALHOST_RPC_URL;

// COINMARKETCAP_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
	defaultNetwork: "hardhat", // esta es la red local de hardhat. Esta configurada por defecto, pero se recomienda dejarla explicitada
	networks: {
		rinkeby: {
			// Estos 3 campos son requeridos para la configuración de redes secundarias u otras testnets
			url: RINKEBY_RPC_URL,
			accounts: [RINKEBY_PRIVATE_KEY],
			chainId: 4,
		},
		// EN EL CASO DE GANACHE LA FORMA DE CONFIGURARLA ES LA SIGUIENTE.
		// ganache: {
		// 	url: GANACHE_RPC_URL,
		// 	accounts: [GANACHE_PRIVATE_KEY],
		// 	chainId: 1337,
		// },
		// PODEMOS USAR TANTO GANACHE COMO LA NODE DE HARDHAT EN LA CONSOLA, LA UNICA DIFERENCIA ES QUE EN LABORES DE DESARROLLO, ES MEJOR USAR
		// LA RED LOCAL DE HARDHAT DEBIDO A QUE MANTIENE LA PRIVATE KEY Y NO TENEMOS QUE ANDAR ACTUALIZANDOLA CADA VEZ QUE REINICIEMOS EL NODO.
		localhost: {
			url: LOCALHOST_RPC_URL,
			// en el caso de hardhat no hay que declarar ninguna propiedad accounts ya que hardhat nos provee de esta información automáticamente.
			chainId: 31337,
		},
	},
	solidity: "0.8.4",
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
	// Gas reporter es una extensión que usamos para obtener un dashboard informativo con el precio en gas y un aproximado de cuanto nos puede constar
	// mandar un contrato a producción. Requiere que configuremos la siguiente propiedad en la config.
	gasReporter: {
		enabled: false, //toogle this to activate this tool
		currency: "USD",
		// coinmarketcap: COINMARKETCAP_API_KEY, //**problemas para obtener la API_KEY de coinmarketcap
	},
};
