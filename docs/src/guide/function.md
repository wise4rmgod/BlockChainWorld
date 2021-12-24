# Function

A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again. It helps programmers in writing modular codes. Functions allow a programmer to divide a big program into a number of small and manageable functions.
Like any other advanced programming language, Solidity also supports all the features necessary to write modular code using functions. This section explains how to write your own functions in Solidity.
Function Definition
Before we use a function, we need to define it. The most common way to define a function in Solidity is by using the function keyword, followed by a unique function name, a list of parameters (that might be empty), and a statement block surrounded by curly braces.
Syntax
The basic syntax is shown here.
```
function function-name(parameter-list) scope returns() {
   //statements
}
```

### Example

Try the following example. It defines a function called getResult that takes no parameters −
```
pragma solidity ^0.5.0;
contract Test {
   function getResult() public view returns(uint){
      uint a = 1; // local variable
      uint b = 2;
      uint result = a + b;
      return result;
   }
}
```

## Types of Functions

View, Fallback, Pure, Cryptographic

### Cryptographic

Solidity provides inbuilt cryptographic functions as well. Following are important methods −

* keccak256(bytes memory) returns (bytes32) − computes the Keccak-256 hash of the input.

* sha256(bytes memory) returns (bytes32) − computes the SHA-256 hash of the input.

* ripemd160(bytes memory) returns (bytes20) − compute RIPEMD-160 hash of the input.

* sha256(bytes memory) returns (bytes32) − computes the SHA-256 hash of the input.

* ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address) − recover the address associated with the public key from elliptic curve signature or return zero on error. 
The function parameters correspond to ECDSA values of the signature: r first 32 bytes of signature; s: second 32 bytes of signature; v: final 1 byte of signature. This method returns an address.

The following example shows the usage of cryptographic function in Solidity.

#### Example
```
pragma solidity ^0.5.0;
contract Test {   
   function callKeccak256() public pure returns(bytes32 result){
      return keccak256("ABC");
   }  
}
```

### Fallback

Fallback function is a special function available to a contract. It has following features −
* It is called when a non-existent function is called on the contract.

* It is required to be marked external.

* It has no name.

* It has no arguments

* It can not return any thing.

* It can be defined one per contract.

* If not marked payable, it will throw exception if contract receives plain ether without data.

Following example shows the concept of a fallback function per contract.

#### Example

```
pragma solidity ^0.5.0;
contract Test {
   uint public x ;
   function() external { x = 1; }    
}
contract Sink {
   function() external payable { }
}
contract Caller {
   function callTest(Test test) public returns (bool) {
      (bool success,) = address(test).call(abi.encodeWithSignature("nonExistingFunction()"));
      require(success);
      // test.x is now 1
      address payable testPayable = address(uint160(address(test)));
      // Sending ether to Test contract,
      // the transfer will fail, i.e. this returns false here.
      return (testPayable.send(2 ether));
   }
   function callSink(Sink sink) public returns (bool) {
      address payable sinkPayable = address(sink);
      return (sinkPayable.send(2 ether));
   }
}
```

### View

View functions ensure that they will not modify the state. A function can be declared as view. The following statements if present in the function are considered modifying the state and compiler will throw warning in such cases.

* Modifying state variables.

* Emitting events.

* Creating other contracts.

* Using selfdestruct.

* Sending Ether via calls.

* Calling any function which is not marked view or pure.

* Using low-level calls.

* Using inline assembly containing certain opcodes.

Getter method are by default view functions.
See the example below using a view function.

#### Example

```
pragma solidity ^0.5.0;
contract Test {
   function getResult() public view returns(uint product, uint sum){
      uint a = 1; // local variable
      uint b = 2;
      product = a * b;
      sum = a + b; 
   }
}
```

### Pure

Pure functions ensure that they not read or modify the state. A function can be declared as pure. The following statements if present in the function are considered reading the state and compiler will throw warning in such cases.
Reading state variables.

* Accessing address(this).balance or "address".balance.

* Accessing any of the special variable of block, tx, msg (msg.sig and msg.data can be read).

* Calling any function not marked pure.

* Using inline assembly that contains certain opcodes.

Pure functions can use the revert() and require() functions to revert potential state changes if an error occurs.
See the example below using a view function.

#### Example
```
pragma solidity ^0.5.0;
contract Test {
   function getResult() public pure returns(uint product, uint sum){
      uint a = 1; 
      uint b = 2;
      product = a * b;
      sum = a + b; 
   }
}
```