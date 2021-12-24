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
In the below example, the contract Test consists of a structure Food, and functions are defined to set and get values of the elements of the structure.
```s
struct Food_Item {
string name;
string description;
uint price;
address  owner;
string category;
}
```