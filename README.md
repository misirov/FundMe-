# FundMe-
Crowd funding Smart Contract


Note: Change the truffle congig.js in case you want to use a different compiler or deploy to a particular network.


#### Compile the contract
`truffle compile`

#### Create truffle's local blockchain
`truffle develop`

#### in the truffle console run:
`> migrate`


>To interact with the contract via truffle console, instantiate the contract, ex:
`var contract = Fundme.deployed()`
`contract.fund({value:"5000000000000000000"})` // 5 eth = 5 * 10  ** 18 in wei
