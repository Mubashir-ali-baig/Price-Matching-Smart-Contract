import { Contract } from "@ethersproject/contracts";
import { expect } from "chai";

export async function shouldBehaveLikeAddOrders(rnsMarket: Contract): Promise<void> {
  it("should sucessfully add a sell order", async function () {
    expect(await rnsMarket.addOrders("sell", 10));
  });
  it("should sucessfully add a buy order", async function () {
    expect(await rnsMarket.addOrders("buy", 10));
  });
  it("should fail while adding an Invalid side order", async function () {
    await expect(rnsMarket.addOrders("bought", 10)).to.be.revertedWith("RnsMarket:: Invalid side option");
  });
  it("should fail while adding an Invalid price order", async function () {
    await expect(rnsMarket.addOrders("sell", 0)).to.be.revertedWith("RnsMarket:: Invalid price");
  });
}
