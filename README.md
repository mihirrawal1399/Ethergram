# :chains:Ethergram:large_blue_diamond:
## Image sharing website on Ethereum blockchain

Ethergram is a instagram like website where users can share image on a decentralized network i.e. **Ethereum blockchain**. 

The System is decentralized, so there is **no Content restrictions**. Users can **tip** any post, and the posts will be listed according to the number of tips earned, most tipped post to appear first. It works as an Upvote system which also lets users with good posts earn ETH. This way the **reach cannot be manipulated** with any other fundamentals.
##
### Methodology:
Since storing image files directly on Ethereum blockchain is very costly and impractical, so Ethergram uses [IPFS (InterPlanetary File System)](https://docs.ipfs.io/concepts/what-is-ipfs/) to store the image files. Then the hash values of the IPFS is stored in the Ethereum contracts.
##
### Technology:
- [Reactjs](https://reactjs.org/) for website frontend. React helps to create interactive UIs.

- [Ganache](https://www.trufflesuite.com/ganache) is a personal blockchain for rapid Ethereum and Corda distributed application development. You can use Ganache across the entire development cycle, enabling you to develop, deploy, and test your dApps in a safe and deterministic environment. Will be used to develop, test and store smart contracts of hash values and tips on Ethereum blockchain.

- [web3.js](https://web3js.readthedocs.io/) is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket. It is basically used to connect with the wallet and the blockchain. 

- So we also need a wallet to hold the Ethers. [Brave](https://brave.com/) Browser has own wallet or else we can also use [MetaMask extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en).

##
### ScreenShots:
![image](https://user-images.githubusercontent.com/54273763/123438270-25eaa700-d5ee-11eb-9a9a-520bc79b9dad.png)
![image](https://user-images.githubusercontent.com/54273763/123438351-39960d80-d5ee-11eb-897b-c5fadf609829.png)
![image](https://user-images.githubusercontent.com/54273763/123438371-3f8bee80-d5ee-11eb-82f6-f8940877bb05.png)
![image](https://user-images.githubusercontent.com/54273763/123438415-4adf1a00-d5ee-11eb-8fb0-d109facfd889.png)

##
### Future Enhancements:
- Adding and categorizing different file types to share than just image files.
- Possibly different sorting options for listing the posts than just the top tipped post showing first.
- Can be added image tags in the chain along with the ipfs hash.
- Modal option for posts so that the image can be previewed in a better resolution.
