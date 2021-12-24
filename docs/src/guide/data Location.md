# Data Location

Variables are stored in some location which makes it possible for you to recieve values stored when needed.
In the Ethereum Virtual Machine (EVM) there are three areas to store values.

## Storage
When a variable is written on the blockchain everything that is on the chain stays there. Every contract has its storage.
Therefore, you can access storage variables at all times. You can modify their value but their location is permanent. Every change is registered on the blockchain.
Note:  it is quite expensive to use.
```
function g(uint[] storage gArray) internal {}
```

## Memory
The variable stored in a memory is declared inside a function. They are temporary and their 'lifetime' is dependent on the runtime of a function. You can only access it inside that function you created it. 
The EVM discards their location after the function execution. Therefore, you cannot access these variables anywhere else except inside the 
function.
Note: It is cheaper to use compared to storing values in Blockchain(storage).
```
function h(uint[] memory harray) internal {}
```

## Calldata
The Calldata is also a temporary data location in Solidity like the *memory*. The variables stored in calldata are only available inside the declared function, which means calldata variables are not adjustable( you cannot change their value). 
Note: Calldata is a read-only memory


