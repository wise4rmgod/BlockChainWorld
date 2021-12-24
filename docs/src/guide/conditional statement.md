# Conditional statement

Solidity supports conditional statements which perform actions based on conditions, If you need to execute a set of statements based on a condition, then you need to use control flow statements. 

## Solidity conditional statements:

a) if statement
b) nested if statement
c) if-else statement

### If statement syntax

```
if(condition){
  Statement(s);
}
```
The statements get executed only when the given condition is true; if the condition is false, then the statements inside if statement body is completely ignored.
Example of if statement

```
contract Helloworld{

 function ifstatement(uint x) public pure returns (string memory){
            

      if (x==2)  {

          return "num1 and num2 are equal";
      }

    
   }

}
```




### Nested if statement in Solidity
A nested if statement is when there is an if statement inside another if statement.

### Nested if statement syntax

```
if(condition_1) {
   Statement1(s);

   if(condition_2) {
      Statement2(s);
   }
}
```

Statement1 would execute if the condition_1 is true. Statement2 would only execute if both the conditions( condition_1 and condition_2) are true.

Example of Nested if statement

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
	    return "num1 is greater than or equal to num2";
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

}
```

### If else statement in Solidity
This is how an if-else statement looks:

```
if(condition) {
   Statement(s);
}
else {
   Statement(s);
}
```

The statements inside “if” would execute if the condition is true, and the statements inside “else” would execute if the condition is false.

Example of if-else statement

```
contract Helloworld{

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