import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ReadVariable, ReadVariable__factory } from "../typechain-types";

describe("Lock", function () {
  let owner: SignerWithAddress;

  let readVariable: ReadVariable;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();

    readVariable = await new ReadVariable__factory(owner).deploy();
  });

  it("should be able to read variable via inline assembly", async function () {
    const number: Number = 12;

    await readVariable.setNumber(ethers.BigNumber.from(number));

    expect(await readVariable.readNumberAssembly()).to.equal(number);
  });

  it("should be able to set new number", async function () {
    await readVariable.main();

    expect(await readVariable.number()).to.equal(1);
  });

  it("should be able to set new number via assembly", async function () {
    await readVariable.mainAssembly();

    expect(await readVariable.number()).to.equal(1);
  });
});
