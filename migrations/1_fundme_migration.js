const Fundme = artifacts.require("Fundme");

module.exports = function (deployer) {
  deployer.deploy(Fundme);
};
