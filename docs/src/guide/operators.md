# Operators

Operators allow users to perform different mathematical operations on operands(an object that is being manipulated). 
Example:
"2+3", the "2" and "3" are the operands, while the "+" symbol is the operator.

## Solidity supported operators:

Arithmetic Operators
Assignment operators
Relational Operators
Logical Operators
Bitwise Operators

### Arithmetic Operators

+ for addition.

– for subtraction.

* for multiplication.

/ for division.

% for modulo.

#### Example of Arithmetic Operators


### Assignment Operators
Assignments operators in solidity are: =, +=, -=, *=, /=, %=

name = name1 would assign the value of variable num1 to the variable.

name2+=name1 is equal to num2 = name2+name1

name2-=name1 is equal to name2 = name2-name1

name2*=name1 is equal to name2 = name2*name1

name2/=name1 is equal to name2 = name2/name1

name2%=name1 is equal to name2 = name2%name1

#### Example of Assignment Operators


### Auto-increment and Auto-decrement Operators
++ and —
num++ is equivalent to num=num+1;

num–- is equivalent to num=num-1;

Example of Auto-increment and Auto-decrement Operators
```
contract contact{
 int num1=100;

 function inc() public returns(int){
        return  num1 +=1;
      }

 function incre() public returns(int){
        return  num1 -=1;
      }

}

```

### Logical Operators

Logical operators in solidity are: &&, ||, !

Example of Logical Operators
```

contract contact{

      bool b1 = true;
      bool b2 = false;

      function ifstatement() public view returns (string memory){
            

          if (b1&&b2 == true)  {

          return "No";  // will return true if both b1 and b2 are true; else, it would return false.
      }

  if (!b1&&b2 == true)  {

          return "!";  // would return the opposite of b1, which means it would be true if b1 is false, and it would return false if b1 is true.
      }
      
 if (b1||b2 == true)  {

          return "Yes one has true"; // will return false if both b1 and b2 are false; else, it would return true.
      }

}
}
```

### Comparison(Relational) operators
We have six relational operators in Solidity: ==, !=, >, <, >=, <=

== This will return true if both the left side and right side are equal

!=  This will return true if the left side is not equal to the right side of the operator.

> This will return true if the left side is greater than the right.

< This will return true if the left side is less than the right side.

>= This will return true if the left side is greater than or equal to the right side.

<= This will return true if the left side is less than or equal to the right side.

#### Example of Relational operators
Note: This example is using the if-else statement.

```
contract Helloworld{


      function ifstatement(uint x) public pure returns (string memory){
          if (x==2)  {

          return "num1 and num2 are equal";
      }

      if(x < 2){
         return "num1 is less than num2";
      }

      if( x >= 2 ){
	    return "num1 is greater than or equal to num2");
      }

       if(x > 2){
         return "num1 is greaterthan than num2";
      }

       if( x <= 2){
	     return "num1 is less than or equal to num2";
      }

      if( x != 2 ){
	 return "num1 and num2 are not equal";
      }
   }

     function ifelsestatement(uint x) public pure returns (string memory){
          if (x==2)  {

          return "num1 and num2 are equal";
      }

      else {
         return "num1 and num2 are not equal";
      }
   }
       
}
```
