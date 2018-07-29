const HelloToken = artifacts.require("./HelloToken.sol");
const Greeter = artifacts.require("./Greeter.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloToken);
  deployer.deploy(Greeter);
}
