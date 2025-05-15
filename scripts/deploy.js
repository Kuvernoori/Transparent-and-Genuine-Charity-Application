const hre = require("hardhat");

async function main() {
  const CharityFund = await hre.ethers.getContractFactory("CharityFund");
  const charityFund = await CharityFund.deploy();

  await charityFund.waitForDeployment(); 

  const address = await charityFund.getAddress(); 
  console.log("✅ Contract deployed at:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
