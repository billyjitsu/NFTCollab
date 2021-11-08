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
    "ipfs://QmWXza1Wx4WAiuyuWKh4LjT3oGLveLxdAtaDnWbhyMDYzY/", 
    "ipfs://QmWFbcEmC9PFaWWjDvincjacEm32pak8vT272Zwy98pMkV/1.json"],
    log: true,
  });

  
  deployments.execute('HiveCollabNFT', {
    from: deployer,
    log: true
  },
  'setOnlyWhitelisted', false
  )



  
};
export default func;
func.tags = ['HiveCollabNFT'];
