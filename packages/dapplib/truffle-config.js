require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift reflect saddle purse install opera equal giant'; 
let testAccounts = [
"0xd0bc8395dc3db383d9a2872fd4461eb852a3af4db0a5d060585d3b2b4cd2d579",
"0x9cbfbf6747c2674c9fc2086cda11e18bd6e85955f3c334dc6df4ac2dc1c41313",
"0x3291150070260a660f640903ddb237975a2b43dd0f67a5c06bd6df514c728138",
"0x65d5b665f02119913057eb1e8c9e17b6102e6f398ce5e863b4b53abfd6905fe8",
"0x76c4de32f27f387e7bc03dcfdaf0c5409ebdc9d782a047435d621caadfc071ab",
"0x9c546f118967162cdae6311b2310324659b443b1ee657f0b13203dd8520fd7fd",
"0x8d5238ccc3cf3e10656cc32453645ad9636012b21a2cf6bf718e1a5c1eadd281",
"0x093c7b389525277c82667bbc07d859c6ca8ae53fe6bac6bbb4d959d0c2cb71eb",
"0x17aefc14058096370a1eb11509e0f23e347130843d0822187a0e5d00e4a593e2",
"0x414b84dcec71b23d9dc07418bb14e9b9c09057f2a6804bb5f668a74677c06769"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


