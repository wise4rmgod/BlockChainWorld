# Array

Array is a data structure that store the fixed collection of elements of the same data types where every element has a specific location (index). 
Note:  an array can be of fixed size or dynamic size.

#### Syntax:

data type arrayname[size] = initialization

## Fixed-size Arrays
The array size is predefined. However, the total number of elements should not exceed the size of the array. 

### Example: 

``` 
pragma solidity ^0.5.0;  
  
// Creating a contract 
contract Types {  
  
    // Declaring state variables
    // of type array
    uint[6] data1;    
      
    // Defining function to add 
    // values to an array 
    function array_example() public returns (
    int[5] memory, uint[6] memory){  
            
        int[5] memory data 
        = [int(50), -63, 77, -28, 90];  
        data1 
        = [uint(10), 20, 30, 40, 50, 60];
            
        return (data, data1);  
  }  
}
```

## Dynamic Array: 
The array size is not predefined when it is declared.

### Example: 

```
pragma solidity ^0.5.0;  
  
// Creating a contract  
contract Types {  
    
    // Declaring state variable 
    // of type array. One is fixed-size
    // and the other is dynamic array
    uint[] data 
      = [10, 20, 30, 40, 50]; 
    int[] data1;  
    
    // Defining function to 
    // assign values to dynamic array
    function dynamic_array() public returns(
      uint[] memory, int[] memory){  
    
        data1 
          = [int(-60), 70, -80, 90, -100, -120, 140]; 
        return (data, data1);  
    }  
}
```



## Array Operations
The operations that happen in an Array.

### Example: 
The contract Types first initialize an array[data] and then retrieves the value at specific index 2.

```
pragma solidity ^0.5.0;  
   
// Creating a contract 
contract Types {  
  
    // Declaring an array
    uint[6] data;    
       
    // Defining function to 
    // assign values to array
    function array_example(
    ) public payable returns (uint[6] memory){  
            
        data 
          = [uint(10), 20, 30, 40, 50, 60];
        return data;  
  } 
    
  // Defining function to access
  // values from the array
  // from a specific index  
  function array_element(
  ) public payable returns (uint){  
        uint x = data[2];
        return x;  
  }  
}
```
Output : 

Accessing Array Elements

## Length of Array: 
The array's length returns the number of elements present in an array.

### Example:
The contract Types first initialize an array[data] and returns the array's length.

```
pragma solidity ^0.5.0;  
  
// Creating a contract
contract Types {  
  
    // Declaring an array
    uint[6] data;    
        
    // Defining a function to 
    // assign values to an array
    function array_example(
    ) public payable returns (uint[6] memory){  
        data = [uint(10), 20, 30, 40, 50, 60];
        return data;  
  }  
  
  // Defining a function to 
  // find the length of the array
  function array_length(
  ) public returns(uint) {  
        uint x = data.length;
        return x; 
    } 
  }
```




## Push: 
The push method adds a new element to a dynamic array at the last position of the array.

### Example:
 The contract Types first initialize an array[data], and then more values are pushed into the array.

```
pragma solidity ^0.5.0;  
   
// Creating a contract 
contract Types {  
  
    // Defining the array
    uint[] data = [10, 20, 30, 40, 50]; 
    
    // Defining the function to push 
    // values to the array
    function array_push(
    ) public returns(uint[] memory){  
    
        data.push(60);  
        data.push(70);  
        data.push(80);
    
        return data;  
    }  
}
```


## Pop: 
The Pop method removes the last element of the array in a dynamic array.

### Example: 
The contract Types first initialize an array[data], and then values are removed from the array using the pop function.

```
pragma solidity ^0.5.0;  
    
// Creating a contract
contract Types {  
  
    // Defining an array
    uint[] data 
      = [10, 20, 30, 40, 50];
    
    // Defining a function to 
    // pop values from the array
    function array_pop(
    ) public returns(uint[] memory){  
        data.pop(); 
        return data;  
    }  
}
```