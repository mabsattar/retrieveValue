const ethers = require('ethers');

const contractAddress = "0xf84Df872D385997aBc28E3f07A2E3cd707c9698a";
const storageSlot = "0x0";

async function retrieveValue() {
    try {
        provider = new ethers.providers.JsonRpcProvider("https://json-rpc.testnet.swisstronik.com/");
        const result = await provider.getStorageAt(contractAddress, storageSlot);
        console.log('Storage Data:', result);
    }   catch(error) {
        console.error('Error:', error);
    }
}

retrieveValue();


