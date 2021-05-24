import { Contract } from "@ethersproject/contracts";
import { expect } from "chai";

export async function shouldBehaveLikeBuy(rnsMarket: Contract): Promise<void> {
  it("should fail while buying with wrong orderId", async function () {
    await expect(rnsMarket.buy(10, 10)).to.be.revertedWith("RnsMarket:: Order does not exists");
  });

  it("should fail with invalid price", async function () {
    await expect(rnsMarket.buy(0, 0)).to.be.revertedWith("RnsMarket:: Invalid Price");
  });

  it("should fail while buying a buy entry mapping", async function () {
    await expect(rnsMarket.buy(1, 10)).to.be.revertedWith(
      "RnsMarket:: Either price doesn't match or the side isn't compatible",
    );
  });

  it("should fail while buying a correct id but wrong price", async function () {
    await expect(rnsMarket.buy(0, 20)).to.be.revertedWith(
      "RnsMarket:: Either price doesn't match or the side isn't compatible",
    );
  });

  it("should successfully buy", async function () {
    expect(await rnsMarket.buy(0, 10));
  });

  it("should fail buying an already deleted sell mapping", async function () {
    await expect(rnsMarket.buy(0, 10)).to.be.revertedWith("RnsMarket:: Order does not exists");
  });
}
