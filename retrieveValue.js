const Web3 = require('web3');
const web3 = new Web3("https://json-rpc.testnet.swisstronik.com/");

const contractAddress = "0xf84Df872D385997aBc28E3f07A2E3cd707c9698a";
const storageSlot = "0x0";
const block = "latest";

web3.eth.getStorageAt(contractAddress, storageSlot, block)
    .then(result => {
        console.log("Retrived value:", result);
    })
    .catch(error => {
        console.error("Error:", error);

    });
        