const crypto = require("@iota/crypto.js");

const mnemonic = 'fiction sight clump lawsuit this echo twist void salon mushroom deputy baby caught stuff supply siren estate hockey harsh autumn test pilot lava umbrella';

//const mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';

const seed = crypto.Bip39.mnemonicToSeed(mnemonic);

console.log('seed', Buffer.from( seed) );

//const master = crypto.Slip0010.getMasterKeyFromSeed(seed);

//console.log('master',Buffer.from(master.privateKey))

const privKey = crypto.Slip0010.derivePath(seed, new crypto.Bip32Path( "m/44'/4218'/0'/0/0" ) );

console.log('privKey',Buffer.from(privKey.privateKey)); // esta bien

const keyPair = crypto.Ed25519.keyPairFromSeed(privKey.privateKey);

console.log('keyPair',keyPair)

console.log('privKey', Buffer.from(keyPair.privateKey) );

//const pubKey = crypto.Slip0010.getPublicKey(privKey.privateKey);

//const pubKeyTest = Buffer.from('6f1581709bb7b1ef030d210db18e3b0ba1c776fba65d8cdaad05415142d189f8', 'hex');
//console.log('pubKeyTest',pubKeyTest)

//console.log('pubKey',Buffer.from(keyPair.pubKeyTest))

const hash = crypto.Blake2b.sum256(keyPair.publicKey);

console.log('hash', hash);

const version = new Uint8Array([00]);

const address = new Uint8Array([...version, ...hash]);

console.log('address',address);

console.log(
    crypto.Bech32.encode("iota", address)
)


/*
links utiles:
https://github.com/Wollac/iota-crypto-demo/tree/master/examples/kdf
https://github.com/Wollac/iota-crypto-demo/tree/master/examples/bech32

*/