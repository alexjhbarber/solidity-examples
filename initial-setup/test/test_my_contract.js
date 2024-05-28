const MyContract = artifacts.require("MyContract");

contract("MyContract", (accounts) => {
  it("should return 'Hello, World!'", async () => {
    const instance = await MyContract.deployed();
    const result = await instance.myString();
    assert.equal(result, "Hello, World!");
  });
});