// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract Add {
    function add(uint256 _a) external view returns (uint256 b) {
        assembly {
            let c := add(_a, 16)

            mstore(0x80, c)

            {
                let d := add(sload(c), 12)

                b := d
            }

            b := add(b, c)
        }
    }
}
