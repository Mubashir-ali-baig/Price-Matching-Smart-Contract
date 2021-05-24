import { Contract } from "@ethersproject/contracts";
import { expect } from "chai";

export async function shouldBehaveLikeGetOrders(rnsMarket: Contract): Promise<void> {
  it("should successfully get the orders", async function () {
    let order = expect(await rnsMarket.getOrders(0));
    console.log("RETURNED ORDER", order);
  });
}
