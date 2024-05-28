// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string public myString = "Hello, World!";

    function SayHello() public view returns (string memory) {
        return myString;
    }
}