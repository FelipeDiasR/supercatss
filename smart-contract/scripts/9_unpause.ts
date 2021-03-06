import NftContractProvider from '../lib/NftContractProvider';

async function main() {
  // Attach to deployed contract
  const contract = await NftContractProvider.getContract();
  
  // Pause the contract (if needed)
  if (await contract.paused()) {
    console.log('starting the contract...');

    await (await contract.setPaused(false)).wait();
  }
  else{console.log("contract is already running!")

  }
  console.log('contract is now runing!');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
