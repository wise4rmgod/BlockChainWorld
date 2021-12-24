# Gas

In Solidity Gas is a fee required to conduct a transaction on the Ethereum blockchain. Gas price is measured in gwei. 
Gwei is the smallest unit of the cryptocurrency Ether. So instead of saying that your gas costs 0.000000001 Ether, you can tell your gas costs one gwei. 

Gas allocates the Ethereum virtual machine (EVM) resources so that wallet transactions and smart contract transactions can self-execute.

Supply and demand on the blockchain determine the price of gas in Solidity. If your gas price is too low, your transaction will not execute and if your gas price is too high, then you are overpaying.

Put gas is a unit of computation. It is used to limit computations from running forever and spamming the network. The purpose of gas = to limit the number of transactions the system will perform.

Note: Transactions with higher gas prices have higher priority to be included in a block, and Unspent gas will be refunded

### Two Components to gas in Solidity

 #### Gas price = The amount you pay for one gas.
 You can see the gas price as the amount you pay for 1 gallon or liter of fuel at the filling station.
* Lower = slow wait time to process in block
* Higher = fast time to process in block

#### Gas Limit = The maximum gas you pay for a particular transaction. 
You can see gas limit as the maximum amount of fuel your car's fuel tank can hold and you can use for one car trip (with no stops).
* Lower limitless computations your transaction can process
* Higher limit-the more computations your transaction can process

### Conversion
Solidity allows implicit as well as explicit conversion. Solidity compiler allows implicit conversion between two data types provided no implicit conversion is possible and there is no loss of information. For example, uint8 is convertible to uint16 but int8 is convertible to uint256 as int8 can contain negative value not allowed in uint256.
```
int8 y = -3;
uint x = uint(y);
uint32 a = 0x12345678;
uint16 b = uint16(a); // b = 0x5678
```