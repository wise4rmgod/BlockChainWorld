# Import

The import statement is used to import local and external files in Solidity.

### Internal 
use of a relative path (./). like the example below
```
// import Hello.sol from current directory import "./Hello.sol";
```

### External
You also can import from GitHub by copying the URL below


```
import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";
```

Import a Library
```
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
```