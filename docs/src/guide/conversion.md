# Conversion

Solidity allows conversion between two data types.
Example:
uint8 is convertible to uint16 while int8 is not convertible to uint256 as int8 can contain negative value not allowed in uint256.
```
int8 y = -3;
uint x = uint(y);
uint32 a = 0x12345678;
uint16 b = uint16(a); // b = 0x5678
```