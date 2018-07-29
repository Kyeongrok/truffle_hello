const Greeter = artifacts.require("./Greeter.sol");

contract('Greeter', (accounts) => {
    it("greeter", () => {
      return Greeter.deployed().then(instance => {
        instance.changeHello("bye");
        instance.sayHello().then(result => console.log(result));

    });
  });

});
