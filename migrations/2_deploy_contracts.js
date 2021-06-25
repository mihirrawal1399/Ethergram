const Ethergram = artifacts.require("Ethergram");

module.exports = function(deployer) {
  deployer.deploy(Ethergram);
};