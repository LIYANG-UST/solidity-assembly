// SPDX-License-Identifier: MIT

pragma solidity ^0.8.16;

contract ReadVariable {
    uint256 public number;

    event NumberSet(uint256 newNumber);

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

    function main() external {
        uint256 currentNum = readNumber();

        setNumber(currentNum + 1);

        emit NumberSet(currentNum + 1);
    }

    function mainAssembly() external {
        uint256 currentNum = readNumberAssembly();

        setNumber(currentNum + 1);

        emit NumberSet(currentNum + 1);
    }
}
