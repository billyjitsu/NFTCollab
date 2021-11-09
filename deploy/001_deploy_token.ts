import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer, tokenOwner} = await getNamedAccounts();

  await deploy('HiveCollabNFT', {
    from: deployer,
    args: ["Mystery Agave Mint",
    "MYSA", 
    "ipfs://Qmb2vyKLB7eRgnjhs4PVhD1jRNpmLmdBCNcikfeJwT188g/", 
    "ipfs://QmWFbcEmC9PFaWWjDvincjacEm32pak8vT272Zwy98pMkV/1.json"],
    log: true,
  });

  
  await deployments.execute('HiveCollabNFT', {
    from: deployer,
    log: true
  },
  'setOnlyWhitelisted', false
  )



  
};
export default func;
func.tags = ['HiveCollabNFT'];
