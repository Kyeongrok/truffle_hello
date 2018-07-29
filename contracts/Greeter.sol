pragma solidity ^0.4.18;

contract Greeter {
    string message = "hello~";

    function sayHello() public view returns (string){
        return message;
    }

    function changeHello(string _message) public {
        message = _message;
    }
}
