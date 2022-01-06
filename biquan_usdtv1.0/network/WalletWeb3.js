import getWeb3  from "../utils/walletProvider.js";
import getAddress  from "../utils/walletProvider.js";

export class WalletWeb3 {

    constructor() {
        this.web3 = getWeb3()
    }

    getMetaMaskAddress = () => {
        if(this.web3.currentProvider.isMetaMask == true){
            // alert("当前是isImToken有效环境");
            return new Promise((resolve, reject) => {
                this.web3.eth.getAccounts((err, accounts) => {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(accounts[0])
                })
            })
        }
    }

    getImTokenAddress = () => {
        if(window.imToken === true || window.ethereum.isImToken === true || this.web3.currentProvider.isMetaMask == true){
            // alert("当前是isImToken有效环境");
            return new Promise((resolve, reject) => {
                this.web3.eth.getAccounts((err, accounts) => {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(accounts[0])
                })
            })
        }
    }

    getTrustAddress = () => {
        if(this.web3.currentProvider.isTrust || this.web3.currentProvider.isMetaMask == true){
            // alert("当前是有效环境");
            return new Promise((resolve, reject) => {
                this.web3.eth.getAccounts((err, accounts) => {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(accounts[0])
                })
            })
        }
    }

    getMathWalletAddress = () => {
        if(window.mathwallet.isMathWallet() || this.web3.currentProvider.isMetaMask == true){
            // alert("当前是isMathWallet有效环境");
            return new Promise((resolve, reject) => {
                this.web3.eth.getAccounts((err, accounts) => {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(accounts[0])
                })
            })
        }
    }

    getTokenPocketAddress = () => {
        if(this.web3.currentProvider.isTokenPocket || this.web3.currentProvider.isMetaMask == true){
            // alert("当前是有效环境");
            return new Promise((resolve, reject) => {
                this.web3.eth.getAccounts((err, accounts) => {
                    if (err) {
                        return reject(err)
                    }
                    return resolve(accounts[0])
                })
            })
        }
    }
}

