// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

contract ReadVariable {
    uint256 public number;

    function setNumber(uint256 _number) public {
        number = _number;
    }

    function readNumber() public view returns (uint256) {
        return number;
    }

    function readNumberAssembly() public view returns (uint256 res) {
        assembly {
            mstore(0, sload(number.slot))
            res := mload(0)
        }
    }
}
