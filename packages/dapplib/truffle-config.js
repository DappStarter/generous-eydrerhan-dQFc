require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain quality good nasty frame spike'; 
let testAccounts = [
"0x6456d6630e67bf55a9427f32d60d850e0f238f472030cdc23f7a1781de295ebf",
"0xdf875540a03fbd20a4bfd10e66ae31b41e5c56e80988e8839351d7993894d06d",
"0xefa9ca250676d48502517444bb34b3b089f0a67a968260066bab94ca67fdcc44",
"0x35e22df66e24fb45329ae5ea56787246a56ff51ac7ed62ec6843193acc6b1167",
"0x278d37af7610ef554805e9d6bdd1ca7333bc45ec69de71ec36dd8eea0e926b3c",
"0xa40a354f6e10db6408ea30cf30831a874d3056386dec5dfb105e8af2b0252e70",
"0xf405eb1a3a83734c36efa645c22b5c7457889406c0db23de17354d7a14581955",
"0xdaaa7506f7ce6ca60e2444428e3f60d087d0fe785abb4c74d2882a3f2d5cf826",
"0x33b9a1f480c73f11e7bf27eb1bcecdb2054a99c4618fcd77b5e895ec9fad6707",
"0xf51c9ba2dbca2e75bdae80475ba02bc87c3b75bf91622b0f8471e4cc0d481efd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

