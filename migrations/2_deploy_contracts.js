var TestCoin = artifacts.require("./TestCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(TestCoin);
};
