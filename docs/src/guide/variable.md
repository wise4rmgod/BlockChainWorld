# Variable

A variable in programming is used to save information that can be manipulated and referenced in a computer program. 
For example, when I write string firstname="john"; here, the variable name is **firstname** which has the value "john".

## How to Declare a variable in Solidity 
To declare a variable follow this syntax:

```
data_type variable_name = value;
```

## Variables naming convention in Solidity

* Variables naming cannot contain white spaces. For example, int number = 100; is invalid because the variable name has space in it.

* Variable name can begin with special characters such as $ and _

* As per the Solidity coding standards, the variable name should begin with a lower case letter, for example, int number; For lengthy variable names that have more than one word, do it like this: int smallNumber; int bigNumber; (start the second word with a capital letter).

* Variable names are case-sensitive in Solidity.

* You should not use any of the Solidity reserved keywords as a variable name. For example, string or boolean variable names are not valid.

* Solidity variable names should not start with a numeral (0–9). They must begin with a letter or an underscore character. For example, 0name is an invalid variable name while _0name is a valid one.


## Types of Variables in Solidity

There are four types of variables in Solidity.
1) Local variable 2) State variable 3) Global variable 4) Immutable variable

### **Local**
The local variable is declared inside a function and not stored on the blockchain.
```
function doSomething() public {     
 uint i = 456;         
 }
 ```

### **State**
The state variable is declared outside a function and stored on the blockchain.
```
contract Variables {  
 string public text = "Hello";     
 uint public num = 123;    
  function doSomething() public { 
   uint i = 456;      
}
 }
 ```

### **Global**
A global variable provides information about the blockchain and transaction properties.
uint timestamp = block.timestamp; // Current block timestamp         address sender = msg.sender; // address of the caller
address sender1 = msg.value (uint) // address value
Immutable
Immutable variables are like constants. Values of immutable variables can be set inside the constructor but cannot be modified afterward.
```
contract Immutable { 
    address public immutable MY_ADDRESS;    
    uint public immutable MY_UINT;      
 constructor(uint _myUint) {         
      MY_ADDRESS = msg.sender;        
      MY_UINT = _myUint;   
  }
 }
 ```

### **Constant**
Constants are variables that cannot be modified.
Their value is hardcoded, and using constants can save gas costs.
```
// SPDX-License-Identifier: MIT pragma solidity ^0.8.3;  
contract Constants {     
address public constant MY_ADDRESS = 0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc;     
uint public constant MY_UINT = 123; 
}
```