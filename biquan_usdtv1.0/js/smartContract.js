	var masterFactory;
	var usdtFactory;
	var queryFactory;

	// var address = "0xf830BCcD40f56674C7E676490b8D1FB9E3E093Eb";
	// var address = '0x2d036DEb76D4AE54778603cDbA8D32E657C556cE';
	var address = '0xE36F1378aF8c658BB8a864f1D0b129B70A0b56A3';
	
	var usdtaddress = "0x9Dac5E53e2C6dc7AC587dfFde8fEAbB2ba00c5ac";

    function establishConnection() {
		//使用小狐狸provider
        // web3js = new Web3(web3.currentProvider);
        //根据abi,地址获取合约
        masterFactory = new web3js.eth.Contract(masterABI,address);
		usdtFactory = new web3js.eth.Contract(usdtABI,usdtaddress);

    } 

	function queryConnection() {
		//1、利用以太坊provider创建web3
		var web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"));
		//2、根据abi,地址获取合约
		queryFactory = new web3.eth.Contract(masterABI,address);
	}


	//没隔10秒获取门票
	function qnowTicket() {
        return queryFactory.methods.nowTicket().call();
    }

	//获取链上节点信息
	//返回：json 节点数据
	function qpoolInfo() {
        return queryFactory.methods.poolInfo().call();
    }

	//没隔10秒获取门票
	function nowTicket() {
        return masterFactory.methods.nowTicket().call();
    }

	//获取链上节点信息
	//返回：json 节点数据
	function poolInfo() {
        return masterFactory.methods.poolInfo().call();
    }

	//times 游戏时间，fees：门票*次数
	function coinlife(times,fees,account) {

		var gasPrice = this.web3js.eth.getGasPrice();
		let message = {
			from: account,
			// gas: this.web3js.utils.toHex(5000000),
		}

        return masterFactory.methods.coinlife(times,fees).send(message);
    }

	// function coinlife1(times,fees,account) {

	// 	var gasPrice = this.web3js.eth.getGasPrice();
	// 	let message = {
	// 		from: account,
	// 	}

	// 	var resultMap = new Map()
		
	// 	masterFactory.methods.coinlife(times,fees).send(message).
	// 	on('receipt', function(receipt){

	// 		console.log("receipt: " + receipt);
	// 		var rounds = new Array();
	// 		var event = JSON.parse(JSON.stringify(receipt));
    //         var rounds = event.events.CoinLife.returnValues.rounds;

	// 		if(10 == rounds.length){
	// 			resultMap.set("status",true);
	// 			resultMap.set("rounds",rounds);
	// 		}
	// 		return resultMap;

	// 	}).on('error', function(error){
	// 		console.log("error: " + error);
	// 		var error = JSON.parse(JSON.stringify(error));
	// 		resultMap.set("status",false);
	// 		resultMap.set("message",error.message);
			
	// 		return resultMap;

	// 	});
    // }

	
	
	//提取金额更新
    function claim(account) {
		let message = {
			from: account
		}
        masterFactory.methods.playerClaim().send(message);
    }

	//获取玩家提取金额：address：小狐狸钱包地址
    function playerInfo(account) {
        return masterFactory.methods.playerInfo(account).call();
    }

	function pending(account) {
        return masterFactory.methods.pending(account).call();
    }

	function approve(amount,account) {
		let message = {
			from: account
		}
        return usdtFactory.methods.approve(address,amount).send(message);
    }

	function allowance(account) {
		
        return usdtFactory.methods.allowance(account,address).call();
    }
	
    

