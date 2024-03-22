const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)


const { Web3 } = require("web3");
const web3 = new Web3(
  "https://optimism-sepolia.infura.io/v3/9b7be415fa304a86acaad068dee45744"
);

const abi =
  require("/home/kauanluacio/Servidor/build/contracts/newNFT.json").abi;
const contractAddress = "0xb5aad160cad5ee45d1af0ea4db02974caf8c0c35"; 

