Summary
 - [missing-zero-check](#missing-zero-check) (1 results) (Low)
 - [solc-version](#solc-version) (4 results) (Informational)
 - [too-many-digits](#too-many-digits) (1 results) (Informational)
 - [unused-state](#unused-state) (2 results) (Informational)
 - [external-function](#external-function) (4 results) (Optimization)
## missing-zero-check
Impact: Low
Confidence: Medium
 - [ ] ID-0
[AuthUpgradeable.transferOwnership(address).newOwner](contracts/access-upgradeable/AuthUpgradeable.sol#L63) lacks a zero-check on :
		- [owner = newOwner](contracts/access-upgradeable/AuthUpgradeable.sol#L65)

contracts/access-upgradeable/AuthUpgradeable.sol#L63


## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-1
Pragma version[>=0.8.0](contracts/token-upgradeable/TokenUpgradeableV2.sol#L2) allows old versions

contracts/token-upgradeable/TokenUpgradeableV2.sol#L2


 - [ ] ID-2
Pragma version[>=0.8.0](contracts/token-upgradeable/TokenUpgradeable.sol#L2) allows old versions

contracts/token-upgradeable/TokenUpgradeable.sol#L2


 - [ ] ID-3
Pragma version[>=0.8.0](contracts/access-upgradeable/AuthUpgradeable.sol#L2) allows old versions

contracts/access-upgradeable/AuthUpgradeable.sol#L2


 - [ ] ID-4
solc-0.8.2 is not recommended for deployment

## too-many-digits
Impact: Informational
Confidence: Medium
 - [ ] ID-5
[TokenUpgradeable.initialize()](contracts/token-upgradeable/TokenUpgradeable.sol#L18-L23) uses literals with too many digits:
	- [_mint(_msgSender(),1000000000)](contracts/token-upgradeable/TokenUpgradeable.sol#L22)

contracts/token-upgradeable/TokenUpgradeable.sol#L18-L23


## unused-state
Impact: Informational
Confidence: High
 - [ ] ID-6
[AuthUpgradeable.__gap](contracts/access-upgradeable/AuthUpgradeable.sol#L82) is never used in [TokenUpgradeableV2](contracts/token-upgradeable/TokenUpgradeableV2.sol#L16-L29)

contracts/access-upgradeable/AuthUpgradeable.sol#L82


 - [ ] ID-7
[AuthUpgradeable.__gap](contracts/access-upgradeable/AuthUpgradeable.sol#L82) is never used in [TokenUpgradeable](contracts/token-upgradeable/TokenUpgradeable.sol#L17-L31)

contracts/access-upgradeable/AuthUpgradeable.sol#L82


## external-function
Impact: Optimization
Confidence: High
 - [ ] ID-8
transferOwnership(address) should be declared external:
	- [AuthUpgradeable.transferOwnership(address)](contracts/access-upgradeable/AuthUpgradeable.sol#L63-L70)

contracts/access-upgradeable/AuthUpgradeable.sol#L63-L70


 - [ ] ID-9
authorise(address) should be declared external:
	- [AuthUpgradeable.authorise(address)](contracts/access-upgradeable/AuthUpgradeable.sol#L45-L48)

contracts/access-upgradeable/AuthUpgradeable.sol#L45-L48


 - [ ] ID-10
initialize() should be declared external:
	- [TokenUpgradeableV2.initialize()](contracts/token-upgradeable/TokenUpgradeableV2.sol#L17-L21)

contracts/token-upgradeable/TokenUpgradeableV2.sol#L17-L21


 - [ ] ID-11
unauthorise(address) should be declared external:
	- [AuthUpgradeable.unauthorise(address)](contracts/access-upgradeable/AuthUpgradeable.sol#L50-L53)

contracts/access-upgradeable/AuthUpgradeable.sol#L50-L53


