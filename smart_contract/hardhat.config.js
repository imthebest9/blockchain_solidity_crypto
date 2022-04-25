// https://eth-ropsten.alchemyapi.io/v2/B_8Mis3BrHfYL16sDHFi1Ucg-CvJF665

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/B_8Mis3BrHfYL16sDHFi1Ucg-CvJF665',
      accounts: [ 'a67a6cf0c9ec2a1e7fe1119d1e1edf600eb2e76ba7b4ea1e4f53d2d62bf9cdd6' ]
    }
  }
}