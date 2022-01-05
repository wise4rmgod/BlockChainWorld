# Struct

A struct in solidity is the collection of a group of elements with a different data type. 

#### Syntax:
```
struct <structure_name> {  
   <data type> variable_1;  
   <data type> variable_2; 
}
```


To be able to access any element of struct, the dot operator is used, which separates the struct variable and the element we wish to access. To define the variable of structure data type structure name is used.

#### Example:
In the below example, the contract Structex consists of a structure Food item, and functions are defined to set and get values of the elements of the structure.
```s
contract Structex{

   struct Item { 
      uint item_id;
      string name;
      string description;
   }

   Item item;

   function setName() public {
      item = Item(1, 'Garri', 'this is an example');
   }
   function getName() public view returns (string memory) {
      return item.name;
   }

}
```