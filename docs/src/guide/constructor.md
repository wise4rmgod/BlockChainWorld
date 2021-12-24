# Constructor

A constructor is an optional function in Solidity that is executed upon contract creation and used to initialize state variables of a contract.

# Features of a constructor

* Only one constructor can be present in a contract. 
* A constructor will be executed once when a contract is created; it is also used to initialize the contract state.
After a constructor code is executed, the final code is deployed to the blockchain. This code includes public functions and code reachable through public functions. Constructor code or any internal method used only by the constructor are not included in the final code.
* A constructor can only be public or internal.
* An internal constructor marks the contract as abstract.
* When no constructor is defined in the contract, a default constructor will be executed.

```
contract constructorExample{
string public name;
constructor(string memory _name) {
       name = _name;
 }
}
```