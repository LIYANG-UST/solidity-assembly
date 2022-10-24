import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  Add,
  Add__factory,
  ReadVariable,
  ReadVariable__factory,
} from "../typechain-types";

describe("Lock", function () {
  let owner: SignerWithAddress;

  let add: Add;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();

    add = await new Add__factory(owner).deploy();
  });

  it("should be able to add a number", async function () {
    const number: Number = 10;

    expect(await add.add(ethers.BigNumber.from(number))).to.equal(38);
  });
});
