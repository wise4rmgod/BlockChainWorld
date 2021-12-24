# Comment

A comment is a software developer's readable explanation in the source code that makes the source code easier for humans to understand and ignored by compilers and interpreters.

### Two types of comment
* Straight line: Any text between a // and the end of a line is treated as a comment and is ignored by Solidity Compiler.
* Multiple lines: Any text between the characters /* and */ is treated as a comment. This may span multiple lines.

Example
```
function getResult() public view returns(uint){
   // This is a comment. It is similar to comments in C++
   /*
      * This is a multi-line comment in solidity
      * It is very similar to comments in C Programming
   */
   uint a = 1;
   uint b = 2;
   uint result = a + b;
   return result;
}
```
