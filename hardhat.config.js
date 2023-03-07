/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'localhost',
    network: {
      hardhat: {},
      localhost: {
        url: 'http://localhost:9650/ext/bc/C/rpc/',
        account: [0x8a82807eb9f971a834c588eaaa7babd5023ba88b747db3a0134e3f6007e0c365]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};