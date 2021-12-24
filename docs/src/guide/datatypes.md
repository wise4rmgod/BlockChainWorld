# Data Types

The data type defines the values that a variable can take; for example, if a variable has an int data type, it can only take integer values. In solidity we have two categories of data types: 1) Primitive data types 2) Non-primitive data types-Arrays and Strings are non-primitive data types.

### Boolean
A Boolean data type can have only two values, true or false
```
bool public boo = true;
```

### Integer (int, uint,)
An integer is a whole number, that is, ( a number with no fractional or decimal portion).

Note: **Unsigned:** It consists of only non-negative values, i.e., 0 to 255.

**Signed:** It consists of both negative and positive values but in different formats like

0 to +127
-1 to -128
```
uint public num = 5;
int public num2 = -5;
```

### Address
Address holds a 20-byte value which represents the size of an Ethereum address. An address can be used to get a balance or to transfer a balance by balance and transfer method, respectively.
```
address addressname = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
```

### Strings:
A string is used to store text rather than numbers. Also, anything that is inside double quotes (" ") is considered a string value in solidity/ programming.
Note: string can contain space and numbers
```
 string public hello= "hellow";
 ```
