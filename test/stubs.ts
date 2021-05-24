import { Contract } from "@ethersproject/contracts";
import { Signer } from "@ethersproject/abstract-signer";
import { deployContract } from "ethereum-waffle";
import RnsArtifact from "../artifacts/contracts/RnsMarket.sol/RnsMarket.json";
export async function deployStubRnsMarket(deployer: Signer): Promise<Contract> {
  let rnsMarket = await deployContract(deployer, RnsArtifact);
  return rnsMarket;
}
