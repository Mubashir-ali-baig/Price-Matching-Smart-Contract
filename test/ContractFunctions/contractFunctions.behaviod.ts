import { Contract } from "@ethersproject/contracts";

import { shouldBehaveLikeAddOrders } from "../AddOrders/addOrder.behavior";
import { shouldBehaveLikeBuy } from "../Buy/buy.behavior";
import { shouldBehaveLikeGetOrders } from "../GetOrders/getOrders.behavior";
import { shouldBehaveLikeSell } from "../Sell/sell.behavior";
export async function shouldBehaveLikeContractFunctions(rnsMarket: Contract): Promise<void> {
  describe("TESTING ADD ORDER FUNCTION", async () => {
    await shouldBehaveLikeAddOrders(rnsMarket);
  });

  describe("TESTING GET ORDERS FUNCTION", async () => {
    await shouldBehaveLikeGetOrders(rnsMarket);
  });

  describe("TESTING BUY FUNCTION", async () => {
    await shouldBehaveLikeBuy(rnsMarket);
  });

  describe("TESTING SELL FUNCTION", async () => {
    await shouldBehaveLikeSell(rnsMarket);
  });
}
