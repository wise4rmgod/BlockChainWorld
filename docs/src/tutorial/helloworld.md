# Hello World Smart Contract

This is a simple “Hello, world!” smart contract example that will introduce you to writing smart contracts.

Note: The first line is the License, while the second line is a pragma directive tells that the source code is written for Solidity version 0.8.7. This two lines of code is
 important in every contract you write.

So, in the example below you will write your first Hello world program using Solidity programming language.

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Helloworld{
   string public hello;
   
   function setGreeting(string _greet) public {
        hello = _greet;
   }
   
   function greet() public view returns(string){
      return hello;
   }
}

```
Try it on [Remix](https://remix.ethereum.org/)
