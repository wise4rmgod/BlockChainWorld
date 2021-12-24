# Enums

Enum restricts a variable to have one of only a few predefined values in solidity. The values in the enumerated list are called enums.
Enums reduce the number of bugs in your code.

Example:
If you want to build an application for a selling shirt, The users will be restricted to shirt sizes in small, medium, and large. This would make sure that it would not allow anyone to order any size other than small, medium, or large.

#### Syntax
```
enum <enumerator_name> { 
            element 1, elemenent 2,....,element n
}
```

#### Example
```
contract test {
   enum ShirtSize{ SMALL, MEDIUM, LARGE }
   ShirtSize choice;
   ShirtSize constant defaultChoice = ShirtSize.MEDIUM;

   function setLarge() public {
      choice = ShirtSize.LARGE;
   }
   function getChoice() public view returns (ShirtSize) {
      return choice;
   }
   function getDefaultChoice() public pure returns (uint) {
      return uint(defaultChoice);
   }
}
```