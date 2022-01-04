var masterABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "times",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256[10]",
				"name": "rounds",
				"type": "uint256[10]"
			}
		],
		"name": "CoinLife",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_dev",
				"type": "address"
			}
		],
		"name": "closedGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_times",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fees",
				"type": "uint256"
			}
		],
		"name": "coinlife",
		"outputs": [
			{
				"internalType": "uint256[10]",
				"name": "rounds",
				"type": "uint256[10]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "devClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "emergencySuspend",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "lock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "openGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "playerClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_factor",
				"type": "uint256"
			}
		],
		"name": "setRandomFactor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_dev",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "beginTicket",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dev",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "account",
				"type": "uint256"
			}
		],
		"name": "getValues",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "fLP",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fLSP",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fMP",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fAP",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fDP",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "geUnlockTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "interval",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isOpen",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nonce",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nowTicket",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "pending",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "profit",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "playerInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "playTimes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "successTimes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewardUsdt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "playerMask",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "poolInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "lastPlayer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "lastSuccessPlayer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "mostSuccessPlayer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "beginTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastPlayerBlock",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "accKeyPerShare",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "allPlayTimes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "allSuccessTimes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "allProfit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastPlayerProfit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastSuccessPlayerProfit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "mostPlayerProfit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "devProfit",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_length",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_factor",
				"type": "uint256"
			}
		],
		"name": "random",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "i",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "roundInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "times",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ticket",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdt",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
  