import { 
    Contract, 
    ContractFactory 
  } from "ethers"
import hre from "hardhat"
  
  const main = async(): Promise<any> => {
    const Coin: ContractFactory = await hre.ethers.getContractFactory("DeliveryOrder")
    const deploy: Contract = await Coin.deploy()
  
    await deploy.deployed()
    console.log(`Smart Contract deployed to: ${deploy.address}`)
  }
  
  main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })