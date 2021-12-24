# Interfaces

Interface define functions in a contract and is also created using the keyword *interface*. 

### Interface characteristics
* An interface can not have any function with implementation.
* Functions of an interface can only be of type external.
* An interface can not have a constructor.
* An interface can not have state variables.
* An interface can have enum, structs which can be accessed using interface name dot notation.

```
pragma solidity ^0.8.4;

interface Calculator {
   function getResult() external view returns(uint);
}
contract Test is Calculator {
   constructor() public {}
   function getResult() external view returns(uint){
      uint a = 1; 
      uint b = 2;
      uint result = a + b;
      return result;
   }
}
```