	var masterFactory;

    function establishConnection() {

        //1、利用以太坊provider创建web3
        var web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545/"));

        var address = "0x6208D133B780bC7A017aB12BAD3935759957F1Ad";
        
        //2、根据abi,地址获取合约
        masterFactory = new web3.eth.Contract(masterABI,address);

    } 


	//没隔10秒获取门票
	function nowTicket() {
        return masterFactory.methods.nowTicket().call();
    }

	//times 游戏时间，fees：门票*次数
	function coinlife(times,fees) {
        return masterFactory.methods.coinlife(times,fees).call();
    }

	//获取链上节点信息
	//返回：json 节点数据
	function poolInfo() {
        return masterFactory.methods.poolInfo().call();
    }
	
	//提取金额更新
    function claim() {
        masterFactory.methods.claim().call();
    }

	//获取玩家提取金额：address：小狐狸钱包地址
    function players(address) {
        masterFactory.methods.players(address).call();
    }
    

