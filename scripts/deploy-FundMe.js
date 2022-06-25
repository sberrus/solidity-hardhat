// imports
// hardhat nos provee de una versión optimizada de ethers para este framework.
const { ethers } = require("hardhat");

// async main
const main = async () => {
	// CONFIGURANDO SCRIPT PARA REALIZAR DEPLOY DE CONTRATO
	const FundMeFactory = await ethers.getContractFactory("FundMe");
	console.log("Desplegando contrato... ⏳");

	const fundMe = await FundMeFactory.deploy();
	await fundMe.deployed();

	console.log(`Contrato desplegado ✅\n\n address: ${fundMe.address}\n`);
};

main()
	.then(() => {
		process.exit(0);
	})
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});
