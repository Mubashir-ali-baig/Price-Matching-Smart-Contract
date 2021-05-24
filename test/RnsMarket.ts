import { Contract } from "ethers";
import { use } from "chai";
import { solidity } from "ethereum-waffle";
import hre from "hardhat";
import { deployStubRnsMarket } from "./stubs";
import { shouldBehaveLikeContractFunctions } from "./ContractFunctions/contractFunctions.behaviod";
use(solidity);

describe("Testing Contract functions", async () => {
  let rnsMarket: Contract;

  const [wallet0, wallet1] = await hre.ethers.getSigners();
  before("Initiating the unit tests", async () => {
    rnsMarket = await deployStubRnsMarket(wallet0);
  });
  describe("Contract Functions", async () => {
    it("Tests Contract Functions", async function () {
      await shouldBehaveLikeContractFunctions(rnsMarket);
    });
  });
});
