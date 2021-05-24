import { Contract } from "@ethersproject/contracts";
import { expect } from "chai";

export async function shouldBehaveLikeSell(rnsMarket: Contract): Promise<void> {
  it("should fail while Selling with wrong orderId", async function () {
    await expect(rnsMarket.sell(10, 10)).to.be.revertedWith("RnsMarket:: Order does not exists");
  });

  it("should fail with invalid price", async function () {
    await expect(rnsMarket.sell(1, 0)).to.be.revertedWith("RnsMarket:: Invalid Price");
  });

  it("should fail while selling a correct id but wrong price", async function () {
    await expect(rnsMarket.sell(1, 20)).to.be.revertedWith(
      "RnsMarket:: Either price doesn't match or the side isn't compatible",
    );
  });
  it("should successfully buy", async function () {
    expect(await rnsMarket.sell(1, 10));
  });

  it("should fail selling an already deleted buying mapping", async function () {
    await expect(rnsMarket.sell(1, 10)).to.be.revertedWith("RnsMarket:: Order does not exists");
  });
}
