// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RnsMarket {
    uint256 public orderId = 0;

    struct Orders {
        uint256 price;
        string side;
    }

    mapping(uint256 => Orders) public orderList;

    event OrderAdded(uint256 orderId, string side, uint256 price);

    event OrderBought(uint256 orderId, uint256 price);

    event OrderSold(uint256 orderId, uint256 price);

    function addOrders(string memory side, uint256 price) external {
        require(
            keccak256(abi.encodePacked(side)) == keccak256(abi.encodePacked("buy")) ||
                keccak256(abi.encodePacked(side)) == keccak256(abi.encodePacked("sell")),
            "RnsMarket:: Invalid side option"
        );
        require(price != 0, "RnsMarket:: Invalid price");
        orderList[orderId] = (Orders(price, side));
        emit OrderAdded(orderId, side, price);
        orderId += 1;
    }

    function buy(uint256 id, uint256 price) external {
        string memory side = "buy";
        require(orderList[id].price != 0, "RnsMarket:: Order does not exists");
        require(price != 0, "RnsMarket:: Invalid Price");
        Orders storage order = orderList[id];
        require(
            matchPrice(price, order.price, side, order.side),
            "RnsMarket:: Either price doesn't match or the side isn't compatible"
        );
        emit OrderBought(id, price);
        delete orderList[id];
    }

    function sell(uint256 id, uint256 price) external {
        string memory side = "sell";
        require(orderList[id].price != 0, "RnsMarket:: Order does not exists");
        require(price != 0, "RnsMarket:: Invalid Price");
        Orders storage order = orderList[id];
        require(
            matchPrice(price, order.price, side, order.side),
            "RnsMarket:: Either price doesn't match or the side isn't compatible"
        );
        emit OrderSold(id, price);
        delete orderList[id];
    }

    function getOrders(uint256 id) public view returns (string memory, uint256) {
        require(orderList[id].price != 0, "RnsMarket:: Order does not exists");
        Orders storage order = orderList[id];
        return (order.side, order.price);
    }

    function matchPrice(
        uint256 price,
        uint256 orderPrice,
        string memory side,
        string memory orderSide
    ) internal view returns (bool) {
        if (orderPrice == price && keccak256(abi.encodePacked(orderSide)) != keccak256(abi.encodePacked(side))) {
            return true;
        }
        return false;
    }
}
