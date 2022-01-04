    function startApp(account) {
        //获取合约连接
        establishConnection();
        queryConnection();
        console.log(account);

        //获取门票
        nowTicket().then(function(tesult) {
            var ticket = $.parseJSON(tesult);
            console.log("门票1: " + ticket);
            ticket = ticket / 1000000000000000000;
            ticket = formatDecimal(ticket,2);
            $('#ticket').html(ticket);
        });

        // 获取数据
        poolInfo().then(function(presult) {
            var poolInfo = JSON.parse(JSON.stringify(presult));
            // var lastPlayerProfit = poolInfo.lastPlayerProfit / 1000000000000000000;
            // lastPlayerProfit = formatDecimal(lastPlayerProfit,2);
            // $('#lastPlayerProfit').html(lastPlayerProfit);
            var lastPlayer = poolInfo.lastPlayer;
            $('#lastPlayer').html(plusXing(lastPlayer,5,4));
            var lastPlayerProfit = poolInfo.lastPlayerProfit / 1000000000000000000;
            lastPlayerProfit = formatDecimal(lastPlayerProfit,2);
            $('#lastPlayerProfit').html(lastPlayerProfit);

            var lastSuccessPlayer = poolInfo.lastSuccessPlayer;
            $('#lastSuccessPlayer').html(plusXing(lastSuccessPlayer,5,4));
            var lastSuccessPlayerProfit = poolInfo.lastSuccessPlayerProfit / 1000000000000000000;
            lastSuccessPlayerProfit = formatDecimal(lastSuccessPlayerProfit,2);
            $('#lastSuccessPlayerProfit').html(lastSuccessPlayerProfit);
            
            var mostSuccessPlayer = poolInfo.mostSuccessPlayer;
            $('#mostSuccessPlayer').html(plusXing(mostSuccessPlayer,5,4));
            var mostPlayerProfit = poolInfo.mostPlayerProfit / 1000000000000000000
            mostPlayerProfit = formatDecimal(mostPlayerProfit,2);
            $('#mostPlayerProfit').html(mostPlayerProfit);

            var allPlayTimes = poolInfo.allPlayTimes;
            $('#allPlayTimes').html(allPlayTimes);
            $('#succProbability').html('0.78125%');
            var allSuccessTimes = poolInfo.allSuccessTimes;
            $('#allSuccessTimes').html(allSuccessTimes);

            //所有分红+最后玩家获得+最后成功+玩家通关+项目方
            var allProfit = parseFloat(poolInfo.allProfit / 1000000000000000000 ) + parseFloat(poolInfo.lastPlayerProfit / 1000000000000000000) + 
            parseFloat(poolInfo.lastSuccessPlayerProfit / 1000000000000000000 )+parseFloat(poolInfo.mostPlayerProfit / 1000000000000000000 )+parseFloat(poolInfo.devProfit / 1000000000000000000 ) ;
            allProfit = formatDecimal(allProfit,2);
            $('#allProfit').html(allProfit);


            //结束时间
            var endTime = poolInfo.endTime;
            var date = new Date(parseInt(endTime) * 1000);
            var date1 = jutils.formatDate(date,"YYYY/MM/DD HH:ii:ss")
            console.log("结束时间: " + date1);

            // var date = new Date("2021/11/2 24:00:00");

            var nowtime = new Date();  //获取当前时间
            var lefttime = date.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
                leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
                lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
                leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
                lefts = Math.floor(lefttime/1000%60);  //计算秒数

            var div = document.getElementById("time");
            div.innerHTML = lefth + ":" + leftm + ":" + lefts;
        });


        //获取玩家信息
        playerInfo(account).then(function(iresult) {
            var playerInfo = JSON.parse(JSON.stringify(iresult));

            var playTimes = playerInfo.playTimes;
            $('#playTimes').html(playTimes);
            var successTimes = playerInfo.successTimes;
            $('#successTimes').html(successTimes);
            var rewardUsdt = playerInfo.rewardUsdt;
            var drewardUsdt = parseFloat(rewardUsdt / 1000000000000000000);
            drewardUsdt = formatDecimal(drewardUsdt,2);
            $('#rewardUsdt').html(drewardUsdt);
            
            pending(account).then(function(result) {
                var pending =  $.parseJSON(result);
        
                // //未提取金额
                var notExtractedUsdt = parseFloat(pending / 1000000000000000000);
                notExtractedUsdt = formatDecimal(notExtractedUsdt,2);
                $('#notExtractedUsdt').html(notExtractedUsdt);

            }); 
        });

    }

    function initApp() {
        //获取合约连接
        queryConnection();
        //获取门票
        qnowTicket().then(function(tesult) {
            var ticket = $.parseJSON(tesult);
            console.log("门票1: " + ticket);
            ticket = ticket / 1000000000000000000;
            ticket = formatDecimal(ticket,2);
            $('#ticket').html(ticket);
        });

        // 获取数据
        qpoolInfo().then(function(presult) {
            var poolInfo = JSON.parse(JSON.stringify(presult));
            // var lastPlayerProfit = poolInfo.lastPlayerProfit / 1000000000000000000;
            // lastPlayerProfit = formatDecimal(lastPlayerProfit,2);
            // $('#lastPlayerProfit').html(lastPlayerProfit);
            var lastPlayer = poolInfo.lastPlayer;
            $('#lastPlayer').html(plusXing(lastPlayer,5,4));
            var lastPlayerProfit = poolInfo.lastPlayerProfit / 1000000000000000000;
            lastPlayerProfit = formatDecimal(lastPlayerProfit,2);
            $('#lastPlayerProfit').html(lastPlayerProfit);

            var lastSuccessPlayer = poolInfo.lastSuccessPlayer;
            $('#lastSuccessPlayer').html(plusXing(lastSuccessPlayer,5,4));
            var lastSuccessPlayerProfit = poolInfo.lastSuccessPlayerProfit / 1000000000000000000;
            lastSuccessPlayerProfit = formatDecimal(lastSuccessPlayerProfit,2);
            $('#lastSuccessPlayerProfit').html(lastSuccessPlayerProfit);

            var mostSuccessPlayer = poolInfo.mostSuccessPlayer;
            $('#mostSuccessPlayer').html(plusXing(mostSuccessPlayer,5,4));
            var mostPlayerProfit = poolInfo.mostPlayerProfit / 1000000000000000000
            mostPlayerProfit = formatDecimal(mostPlayerProfit,2);
            $('#mostPlayerProfit').html(mostPlayerProfit);

            var allPlayTimes = poolInfo.allPlayTimes;
            $('#allPlayTimes').html(allPlayTimes);
            $('#succProbability').html('0.78125%');
            var allSuccessTimes = poolInfo.allSuccessTimes;
            $('#allSuccessTimes').html(allSuccessTimes);

            //所有分红+最后玩家获得+最后成功+玩家通关+项目方
            var allProfit = parseFloat(poolInfo.allProfit / 1000000000000000000 ) + parseFloat(poolInfo.lastPlayerProfit / 1000000000000000000) + 
            parseFloat(poolInfo.lastSuccessPlayerProfit / 1000000000000000000 )+parseFloat(poolInfo.mostPlayerProfit / 1000000000000000000 )+parseFloat(poolInfo.devProfit / 1000000000000000000 ) ;
            allProfit = formatDecimal(allProfit,2);
            $('#allProfit').html(allProfit);


            //结束时间
            var endTime = poolInfo.endTime;
            var date = new Date(parseInt(endTime) * 1000);
            var date1 = jutils.formatDate(date,"YYYY/MM/DD HH:ii:ss")
            console.log("结束时间: " + date1);

            // var date = new Date("2021/11/2 24:00:00");

            var nowtime = new Date();  //获取当前时间
            var lefttime = date.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
                leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
                lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
                leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
                lefts = Math.floor(lefttime/1000%60);  //计算秒数

            var div = document.getElementById("time");
            div.innerHTML = lefth + ":" + leftm + ":" + lefts;
        });

        $('#loading').hide();
    }

    // Start here
    window.addEventListener('load', function() {
         //初始化页面
         initApp();

        //初始化事件信息
        initial();

        // // 检查用户浏览器有没有安装Metamask插件
        // if (typeof web3 === 'undefined') {
        //     alert('看起来您需要一个 Dapp 浏览器才能开始使用,请安装 MetaMask！');

        //     //初始化页面
        //     initApp();

        //     //初始化事件信息
        //     initial();

        // } else{
        //     //初始化事件信息
        //     initial();

        //     web3js = new Web3(web3.currentProvider);

        //     if (web3js.currentProvider.isMetaMask == true) {
        //         // 请求狐狸钱包，访问账户，获取当前地址
        //         ethereum.request({ method: 'eth_requestAccounts' }).catch(function (reason) {
        //             alert('哦！请您先连接 MetaMask！');
        //         }).then(function (accounts) {
        //             //获取当前连接小狐狸钱包的第一个账户 
        //             var account = accounts[0];
        //             //初始信息填充
        //             startApp(account);
        //         })
        //     }
        // }
    });

    window.onload = function(){
            
        var connectWallet = document.getElementById("connectWallet");
        var modal = document.getElementsByClassName("modal")[0];
        var closes = document.getElementsByClassName("close");
        var metaMask = document.getElementsByClassName("MetaMask")[0];

        var tokenPocket = document.getElementsByClassName("TokenPocket")[0];
        var imToken1 = document.getElementsByClassName("imToken")[0];
        var trustWallet = document.getElementsByClassName("trustWallet")[0];
        var mathWalelt = document.getElementsByClassName("mathWalelt")[0];
       
        connectWallet.onclick = show;
        closes[0].onclick = close;
        // closes[1].onclick = close;
        metaMask.onclick = metaMasks;
        tokenPocket.onclick = tokenPockets;
        imToken1.onclick = imTokens;
        trustWallet.onclick = trustWallets;
        mathWalelt.onclick = mathWalelts;

        function show(){
            modal.style.display = "block";
        }

        function close(){
            modal.style.display = "none";
        }

        function metaMasks(){

            const context = (typeof window === 'object') ? window : global;

            if(typeof(context.web3) === 'undefined'){
                alert('看起来您需要一个 Dapp 浏览器才能开始使用,请安装 MetaMask,请连接币安智能链！');
                return;
            } else{

                this.web3  = new Web3(context.web3.currentProvider);
       
                //MetaMask 或mathwallet钱包
                if(this.web3.currentProvider.isMetaMask == true){
                    // alert("当前是有效环境");

                    this.web3.eth.getAccounts((err, accounts) => {
                        if (err) {
                            alert(err)
                        }
                        $('#playerAddress').html(plusXing(accounts[0],5,4));
                    })

                   modal.style.display = "none";
                   
                }
            }
        }

        function tokenPockets(){

            const context = (typeof window === 'object') ? window : global;

            if(typeof(context.web3) === 'undefined'){
                alert('看起来您需要一个 Dapp 浏览器才能开始使用,请安装 MetaMask,请连接币安智能链！');
                return;
            } else{

                //tp钱包
                if(tp.isConnected()){
                    // alert("当前是 tp 有效环境");
                    tp.getCurrentWallet().then(function (res) {
                        $('#playerAddress').html(plusXing(res.data.address,5,4));
                    });

                    modal.style.display = "none";
                    return;
                }

                this.web3  = new Web3(context.web3.currentProvider);
       
                //MetaMask 或mathwallet钱包
                if(this.web3.currentProvider.isMetaMask == true){
                    // alert("当前是有效环境");

                    this.web3.eth.getAccounts((err, accounts) => {
                        if (err) {
                            alert(err)
                        }
                        $('#playerAddress').html(plusXing(accounts[0],5,4));
                    })

                   modal.style.display = "none";

                   return;
                   
                }
            }
        }

        function imTokens(){

            const context = (typeof window === 'object') ? window : global;

            if(typeof(context.web3) === 'undefined'){
                alert('看起来您需要一个 Dapp 浏览器才能开始使用,请安装 MetaMask,请连接币安智能链！');
                return;
            } else{

                //imToken钱包
                if (window.imToken === true || window.ethereum.isImToken === true) {

                    // alert("当前是 imToken 有效环境");
                    imToken.callAPI('user.getCurrentAccount', function(err, address) {
                        if(err) {
                            alert(err)
                        } else {
                            // alert("address11:"+address)
                            $('#playerAddress').html(plusXing(address,5,4));
                        }
                    })
                    
                    // this.web3  = new Web3(context.web3.currentProvider);
                    // this.web3.eth.getAccounts((err, accounts) => {
                    //     if (err) {
                    //         alert(err)
                    //     }
                    //     $('#playerAddress').html(plusXing(accounts[0],5,4));
                    // })

                   modal.style.display = "none";

                    return;
                }

                
       
                //MetaMask 或mathwallet钱包
                if(this.web3.currentProvider.isMetaMask == true){
                    // alert("当前是有效环境");

                    this.web3.eth.getAccounts((err, accounts) => {
                        if (err) {
                            alert(err)
                        }
                        $('#playerAddress').html(plusXing(accounts[0],5,4));
                    })

                   modal.style.display = "none";

                   return;
                   
                }
            }
        }

        function trustWallets(){

            const context = (typeof window === 'object') ? window : global;

            if(typeof(context.web3) === 'undefined'){
                alert('看起来您需要一个 Dapp 浏览器才能开始使用,请安装 MetaMask,请连接币安智能链！');
                return;
            } else{


                this.web3  = new Web3(context.web3.currentProvider);
                //trustwallet 钱包
                if(this.web3.currentProvider.isTrust){
                    // alert("当前是 trustwallet 有效环境");
                    this.web3.eth.getAccounts((err, accounts) => {
                        if (err) {
                            alert(err)
                        }
                        $('#playerAddress').html(plusXing(accounts[0],5,4));
                    })

                    modal.style.display = "none";

                    return;
                }
       
                //MetaMask 或mathwallet钱包
                if(this.web3.currentProvider.isMetaMask == true){
                    // alert("当前是有效环境");

                    this.web3.eth.getAccounts((err, accounts) => {
                        if (err) {
                            alert(err)
                        }
                        $('#playerAddress').html(plusXing(accounts[0],5,4));
                    })

                   modal.style.display = "none";

                   return;
                   
                }
            }
        }

        function mathWalelts(){

            const context = (typeof window === 'object') ? window : global;

            if(typeof(context.web3) === 'undefined'){
                alert('看起来您需要一个 Dapp 浏览器才能开始使用,请安装 MetaMask,请连接币安智能链！');
                return;
            } else{

                this.web3  = new Web3(context.web3.currentProvider);
       
                //MetaMask 或mathwallet钱包
                if(window.mathwallet.isMathWallet() || this.web3.currentProvider.isMetaMask == true){
                    // alert("当前是有效环境");

                    this.web3.eth.getAccounts((err, accounts) => {
                        if (err) {
                            alert(err)
                        }
                        $('#playerAddress').html(plusXing(accounts[0],5,4));
                    })

                   modal.style.display = "none";

                   return;
                   
                }
            }
        }
        
    }

    function loopPoolInfo() {
        queryConnection();
        //获取门票
        qnowTicket().then(function(tesult) {
            var ticket = $.parseJSON(tesult);
            
            ticket = ticket / 1000000000000000000;
            ticket = formatDecimal(ticket,2);
            // console.log("门票: " + ticket);
            $('#ticket').html(ticket);
        });

        // 获取数据
        qpoolInfo().then(function(presult) {
            var poolInfo = JSON.parse(JSON.stringify(presult));
            // var lastPlayerProfit = poolInfo.lastPlayerProfit / 1000000000000000000;
            // lastPlayerProfit = formatDecimal(lastPlayerProfit,2);
            // $('#lastPlayerProfit').html(lastPlayerProfit);
            var lastPlayer = poolInfo.lastPlayer;
            $('#lastPlayer').html(plusXing(lastPlayer,5,4));
            var lastPlayerProfit = poolInfo.lastPlayerProfit / 1000000000000000000;
            lastPlayerProfit = formatDecimal(lastPlayerProfit,2);
            $('#lastPlayerProfit').html(lastPlayerProfit);

            var lastSuccessPlayer = poolInfo.lastSuccessPlayer;
            $('#lastSuccessPlayer').html(plusXing(lastSuccessPlayer,5,4));
            var lastSuccessPlayerProfit = poolInfo.lastSuccessPlayerProfit / 1000000000000000000;
            lastSuccessPlayerProfit = formatDecimal(lastSuccessPlayerProfit,2);
            $('#lastSuccessPlayerProfit').html(lastSuccessPlayerProfit);

            var mostSuccessPlayer = poolInfo.mostSuccessPlayer;
            $('#mostSuccessPlayer').html(plusXing(mostSuccessPlayer,5,4));
            var mostPlayerProfit = poolInfo.mostPlayerProfit / 1000000000000000000
            mostPlayerProfit = formatDecimal(mostPlayerProfit,2);
            $('#mostPlayerProfit').html(mostPlayerProfit);

            var allPlayTimes = poolInfo.allPlayTimes;
            $('#allPlayTimes').html(allPlayTimes);
            $('#succProbability').html('0.78125%');
            var allSuccessTimes = poolInfo.allSuccessTimes;
            $('#allSuccessTimes').html(allSuccessTimes);

            //所有分红+最后玩家获得+最后成功+玩家通关+项目方
            var allProfit = parseFloat(poolInfo.allProfit / 1000000000000000000 ) + parseFloat(poolInfo.lastPlayerProfit / 1000000000000000000) + 
            parseFloat(poolInfo.lastSuccessPlayerProfit / 1000000000000000000 )+parseFloat(poolInfo.mostPlayerProfit / 1000000000000000000 )+parseFloat(poolInfo.devProfit / 1000000000000000000 ) ;
            allProfit = formatDecimal(allProfit,2);
            $('#allProfit').html(allProfit);


            //结束时间
            var endTime = poolInfo.endTime;
            var date = new Date(parseInt(endTime) * 1000);
            var date1 = jutils.formatDate(date,"YYYY/MM/DD HH:ii:ss")
            // console.log("结束时间: " + date1);

            // var date = new Date("2021/11/2 24:00:00");

            var nowtime = new Date();  //获取当前时间
            var lefttime = date.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
                leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
                lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
                leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
                lefts = Math.floor(lefttime/1000%60);  //计算秒数

            var div = document.getElementById("time");
            div.innerHTML = lefth + ":" + leftm + ":" + lefts;
        });

        // 检查用户浏览器有没有安装Metamask插件
        if (typeof web3 === 'undefined') {
            return;
        } else{
            web3js = new Web3(web3.currentProvider);

            if (web3js.currentProvider.isMetaMask == true) {
                // 请求狐狸钱包，访问账户，获取当前地址
                ethereum.request({ method: 'eth_requestAccounts' }).catch(function (reason) {
                    //
                }).then(function (accounts) {
                    //获取当前连接小狐狸钱包的第一个账户 
                    var account = accounts[0];
                    //获取合约连接
                    establishConnection();

                    //获取玩家信息
                    playerInfo(account).then(function(iresult) {
                        var playerInfo = JSON.parse(JSON.stringify(iresult));

                        var playTimes = playerInfo.playTimes;
                        $('#playTimes').html(playTimes);
                        var successTimes = playerInfo.successTimes;
                        $('#successTimes').html(successTimes);
                        var rewardUsdt = playerInfo.rewardUsdt;
                        var drewardUsdt = parseFloat(rewardUsdt / 1000000000000000000);
                        drewardUsdt = formatDecimal(drewardUsdt,2);

                        $('#rewardUsdt').html(drewardUsdt);
                        
                        pending(account).then(function(result) {
                            var pending =  $.parseJSON(result);
                    
                            // //未提取金额
                            var notExtractedUsdt = parseFloat(pending / 1000000000000000000);
                            notExtractedUsdt = formatDecimal(notExtractedUsdt,2);
                            $('#notExtractedUsdt').html(notExtractedUsdt);
                        }); 
                    });
                })
            }
        }
    }

    function loopCountdown() {

        // 获取数据
        qpoolInfo().then(function(presult) {
            var poolInfo = JSON.parse(JSON.stringify(presult));
            //结束时间
            var endTime = poolInfo.endTime;
            // var date = new Date(parseInt(endTime));
            //结束时间
            var endTime = poolInfo.endTime;
            var date = new Date(parseInt(endTime) * 1000);
            var date1 = jutils.formatDate(date,"YYYY/MM/DD HH:ii:ss")
            // console.log("结束时间: " + date1);

            // var date = new Date("2021/11/2 24:00:00");

            var nowtime = new Date();  //获取当前时间
            var lefttime = date.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
                leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
                lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
                leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
                lefts = Math.floor(lefttime/1000%60);  //计算秒数

            var div = document.getElementById("time");
            div.innerHTML = lefth + ":" + leftm + ":" + lefts;
        });
    }
    
    //d定时更新数据
    window.setInterval('loopPoolInfo()',5000);

    //倒计时
    window.setInterval('loopCountdown()',1000);

    // function toTop(){
    //     // mySwiper.autoplay.stop()
    //     // $(".swiper-wrapper").css("transform","translate3d(0px, 0px, 0px)")
    //     $(".swiper-wrapper").scrollTop(0)
    // }
    // function toBottom(){
    //     // mySwiper.autoplay.stop()
    //     // var val = "-"+($(".swiper-slide").length*20.55-370)
    //     // $(".swiper-wrapper").css("transform","translate3d(0px, "+val+"px, 0px)")
    //     var highestTimeoutId = setTimeout(";");
    //     for (var i = 0 ; i < highestTimeoutId ; i++) {
    //         clearTimeout(i); 
    //     }
    //     var str = zh_arr.join("");
    //     $("#events").html(str);
    //     $(".swiper-wrapper").scrollTop(99999);

    //     //d定时更新数据
    //     window.setInterval('loopPoolInfo()',5000);

    //     //倒计时
    //     window.setInterval('loopCountdown()',1000);
    // }


var zh_arr = []
var eventTimeout = []
function start_game(times) {
    $(".disabled").attr("disabled",true);
    $("#events").html('<div class="swiper-slide">欢迎来到重生的世界....</div>');
    // 检查用户浏览器有没有安装Metamask插件
    if (typeof web3 === 'undefined') {
        alert('看起来您需要一个 Dapp 浏览器才能开始使用,请安装 MetaMask,请连接币安智能链！');
        $(".disabled").attr("disabled",false)
        return;

    } else{
        web3js = new Web3(web3.currentProvider);

        if (web3js.currentProvider.isMetaMask == true) {
            // 请求狐狸钱包，访问账户，获取当前地址
            ethereum.request({ method: 'eth_requestAccounts' }).catch(function (reason) {
                alert('哦！请您先连接 MetaMask,请连接币安智能链！');
                $(".disabled").attr("disabled",false)
                return;
            }).then(function (accounts) {
                //返回小狐狸钱包的第一个账户地址 
                console.log("accounts: " + accounts[0]);
                var account = accounts[0];

                establishConnection();

                $('#loading').show();
                //获取票价信息
                nowTicket().then(function(result) {

                    var free = JSON.parse(JSON.stringify(result));

                    if(10 == times){
                        free = free+ '0';
                    }
                   
                    console.log("本次门票: " + free);

                    //获取有没有授权
                    allowance(account).then(function(uresult) {
                        var allowance = $.parseJSON(uresult);

                        var bigAllowance = BigNumber(allowance).toString(10);
                        var temp = bigNumCompare(bigAllowance,free);

                        if(temp == 1){
                            
                            let message = {
                                from: account,
                            }
                    
                            masterFactory.methods.coinlife(times,free).send(message).
		                    on('receipt', function(receipt){

                                var rounds = new Array();
                                var event = JSON.parse(JSON.stringify(receipt));
                                var rounds = event.events.CoinLife.returnValues.rounds;
                                // var rounds = [0,0,0,0,0,1,1,7,1,0];
                                console.log("rounds: " + rounds);

                                var res_array = new Array();
                                if(1 == times){
                                    for(j = 0; j < rounds.length; j++){
                                        if (0 == j){
                                            var step = rounds[j];
                                            res_array.push(getRandomEventsByStep(step));
                                        }else if ( 0 != rounds[j]){
                                            var step = rounds[j];
                                            res_array.push(getRandomEventsByStep(step));
                                        }
                                    }
                                }else if(10 == times){
                                    for(j = 0; j < rounds.length; j++){
                                        
                                        var step = rounds[j];
                                        res_array.push(getRandomEventsByStep(step));
                                        
                                    }
                                }
                                // if(rounds.includes('7') || rounds.includes(7) || rounds.includes("7") ){
                                //     $(".swiper-wrapper").css("color","#BCA880")
                                // }
                                $('#loading').hide();

                                zh_arr = new Array();
                                // debugger
                                for(var i in res_array){
                                    
                                    zh_arr.push(`<div class="swiper-slide round">第${(Number(i)+1)}轮</div>`)
                                    for(var j in res_array[i]){
                                        if(100 == res_array[i].length){
                                            zh_arr.push(`<div class="swiper-slide" style="color:#BCA880" >${Number(j)+1}.${res_array[i][j].c_event}</div>`)
                                        }else{
                                            zh_arr.push(`<div class="swiper-slide" style="color:#939292" >${Number(j)+1}.${res_array[i][j].c_event}</div>`)
                                        }
                                    }
                                }
                                for(let i in zh_arr){
                                    
                                    eventTimeout[i]=setTimeout(()=>{
                                        $("#events").append(zh_arr[i])
                                        var scrollHeight = $(".swiper-wrapper").scrollTop()
                                        var doms = $(".swiper-slide")
                                        var dom = doms[doms.length-1]
                                        $(".swiper-wrapper").scrollTop(scrollHeight+dom.offsetHeight)
                                        if (i == zh_arr.length - 1) {
                                            $(".disabled").attr("disabled",false)
                                        }
                                    },Number(i+"000"))
                                }
                    
                            }).on('error', function(error){
                                $('#loading').hide();
                                $(".disabled").attr("disabled",false)

                                console.log("error: " + error);
                                var error = JSON.parse(JSON.stringify(error));
                                var message = error.message;
                                alert(message);
                    
                            });

                        }else{
                            //调用 usdt授权
                            var usdt = '0xffffffffffffffffffffffffffffffffffff';
                            var usdts = eval(usdt).toString(16);
                            let message = {
                                from: account
                            }

                            usdtFactory.methods.approve(address,usdts).send(message).
		                        on('receipt', function(receipt){

                                var approve = JSON.parse(JSON.stringify(receipt));

                                if(approve.status){

                                    let message = {
                                        from: account,
                                    }
                                    masterFactory.methods.coinlife(times,free).send(message).
		                            on('receipt', function(receipt){

                                        var rounds = new Array();
                                        var event = JSON.parse(JSON.stringify(receipt));
                                        var rounds = event.events.CoinLife.returnValues.rounds;
                                        console.log("rounds: " + rounds);
                
                                        var res_array = new Array();
                                        if(1 == times){
                                            for(j = 0; j < rounds.length; j++){
                                                if (0 == j){
                                                    var step = rounds[j];
                                                    res_array.push(getRandomEventsByStep(step));
                                                }else if ( 0 != rounds[j]){
                                                    var step = rounds[j];
                                                    res_array.push(getRandomEventsByStep(step));
                                                }
                                            }
                                        }else if(10 == times){
                                            for(j = 0; j < rounds.length; j++){
                                                
                                                var step = rounds[j];
                                                res_array.push(getRandomEventsByStep(step));
                                                
                                            }
                                        }
                                        // if(rounds.includes('7') || rounds.includes(7) || rounds.includes("7") ){
                                        //     $(".swiper-wrapper").css("color","#BCA880")
                                        // }

                                        $('#loading').hide();

                                        zh_arr = new Array();
                                        // debugger
                                        for(var i in res_array){
                                            
                                            zh_arr.push(`<div class="swiper-slide round">第${(Number(i)+1)}轮</div>`)
                                            for(var j in res_array[i]){
                                                if(100 == res_array[i].length){
                                                    zh_arr.push(`<div class="swiper-slide" style="color:#BCA880" >${Number(j)+1}.${res_array[i][j].c_event}</div>`)
                                                }else{
                                                    zh_arr.push(`<div class="swiper-slide" style="color:#939292" >${Number(j)+1}.${res_array[i][j].c_event}</div>`)
                                                }
                                            }
                                        }
                                        for(let i in zh_arr){
                                            eventTimeout[i]=setTimeout(()=>{
                                                $("#events").append(zh_arr[i])
                                                var scrollHeight = $(".swiper-wrapper").scrollTop()
                                                var doms = $(".swiper-slide")
                                                var dom = doms[doms.length-1]
                                                $(".swiper-wrapper").scrollTop(scrollHeight+dom.offsetHeight)
                                                if (i == zh_arr.length - 1) {
                                                    $(".disabled").attr("disabled",false)
                                                }
                                            },Number(i+"000"))


                                        }
                                    }).on('error', function(error){
                                        $('#loading').hide();
                                        $(".disabled").attr("disabled",false)
        
                                        console.log("error: " + error);
                                        var error = JSON.parse(JSON.stringify(error));
                                        var message = error.message;
                                        alert(message);
                            
                                    });
                                }   
                            }).on('error', function(error){
                                $('#loading').hide();
                                $(".disabled").attr("disabled",false)

                                console.log("error: " + error);
                                var error = JSON.parse(JSON.stringify(error));
                                var message = error.message;
                                alert(message);
                    
                            });
                        }
                    });
                });
            })
        }      
    }
}


//更新金额
function clickClaim(){

    //mathwallet
    // var mathwallet = window.mathwallet;

    // alert("isMathWallet:"+mathwallet.isMathWallet());
    // if(mathwallet.isMathWallet()){
    //     mathwallet.getCurrentWallet().then(alert(console.log));
    //     mathwallet.getCurrentWallet().then(function (ress) {
    //         alert("res:"+ress);
    //         // console.log(res.address);
    //         // alert("address1:"+res.address);
    //         // console.log(res.data.address);
    //         // alert("address2:"+res.data.address);
    //     });

    //     getAccount2();
    // }

    //trustwallet
    const context = (typeof window === 'object') ? window : global;

    if(context.web3 === 'undefined'){
        alert('看起来您需要一个 Dapp 浏览器才能开始使用,请安装 MetaMask,请连接币安智能链！');
        return;
    } else{

        //tp钱包
        if(tp.isConnected()){
            alert("当前是 tp 有效环境");
            tp.getCurrentWallet().then(function (res) {
                alert("address:"+res.data.address);
            });

            return;
        }

        //imToken钱包
        if (window.imToken === true || window.ethereum.isImToken === true) {
            alert("当前是 imToken 有效环境");
            imToken.callAPI('user.getCurrentAccount', function(err, address) {
                if(err) {
                    alert(err)
                } else {
                    alert("address11:"+address)
                   
                }
            })
            return;
        }

        this.web3  = new Web3(context.web3.currentProvider);
       
        //MetaMask 或mathwallet钱包
        // alert("mathwallet:"+window.mathwallet.toString);
        // alert("isMathWallet:"+window.mathwallet.isMathWallet());
        if(window.mathwallet.isMathWallet() || this.web3.currentProvider.isMetaMask == true){
            alert("当前是有效环境");

            this.web3.eth.getAccounts((err, accounts) => {
                if (err) {
                    return reject(err)
                }
                alert('address:'+accounts[0]);
            })
            return;
            // getAccount2();
        }

        //trustwallet 钱包
        if(this.web3.currentProvider.isTrust){
            alert("当前是 trustwallet 有效环境");
            this.web3.eth.getAccounts((err, accounts) => {
                if (err) {
                    return reject(err)
                }
                alert('address:'+accounts[0]);
            })
        }
        
        
    }

    // Web3浏览器检测,imToken
    // if (typeof window.ethereum !== 'undefined') {
    //     console.log('MetaMask is installed!');
    // }

    // // 实例化web3
    // window.web3 = new Web3(ethereum);
    // var web3 = window.web3;

    // if (!!imToken) {
    //     //有效...
    //     alert("当前是 imToken 有效环境")
    //     imToken.callAPI('user.getCurrentAccount', function(err, address) {
    //         if(err) {
    //             alert(err)
    //         } else {
    //             alert("address:"+address)
    //         }
    //     })
    // }else{
    //     //无效 ....
    //     alert("当前是 imToken 无效环境")
    // }

    // if(window.imToken === true || window.ethereum.isImToken === true){
    //     alert("当前是 imToken 环境");
    //     getAccount1();
    // }

    //var tp = require("tp-eosjs");
    // if (typeof window !== 'undefined' && typeof window.tp === 'undefined') {
    //     window.tp = tp;
    // }

    //tp钱包
    //console.log("tp:"+tp.isConnected());
    //alert("tp:"+tp.isConnected());

    // tp.getCurrentWallet().then(function (res) {
    //     alert("当前是 tp 环境");
    //     console.log("res");
        
    //     console.log(res.result);
    //     console.log(res.data.name);
    //     console.log(res.data.address);
    //     alert("address:"+res.data.address);
    //     console.log(res.data.blockchain_id);
    //     console.log(res.data.permissions);

    //     claim(res.data.address);

    //     playerInfo(res.data.address).then(function(iresult) {
    //         var playerInfo = JSON.parse(JSON.stringify(iresult));

    //         // var playTimes = playerInfo.playTimes;
    //         // $('#playTimes').html(playTimes);
    //         // var successTimes = playerInfo.successTimes;
    //         // $('#successTimes').html(successTimes);
    //         var rewardUsdt = playerInfo.rewardUsdt;
    //         var drewardUsdt = parseFloat(rewardUsdt / 1000000000000000000);
    //         drewardUsdt = formatDecimal(drewardUsdt,2);
    //         $('#rewardUsdt').html(drewardUsdt);
            
    //         pending(account).then(function(result) {
    //             var pending = JSON.parse(JSON.stringify(result));
        
    //             // //未提取金额
    //             var notExtractedUsdt = parseFloat(pending / 1000000000000000000);
    //             notExtractedUsdt = formatDecimal(notExtractedUsdt,2);
    //             $('#notExtractedUsdt').html(notExtractedUsdt);
    //         });
            
    //     });

    //     return;
    // });

    // 检查用户浏览器有没有安装Metamask插件
    // if(typeof web3 === 'undefined'){
    //     alert('看起来您需要一个 Dapp 浏览器才能开始使用,请安装 MetaMask,请连接币安智能链！');
    //     return;
    // } else{

    //     web3js = new Web3(web3.currentProvider);
    //     if (web3js.currentProvider.isMetaMask == true) {
    //         // 请求狐狸钱包，访问账户，获取当前地址
    //         ethereum.request({ method: 'eth_requestAccounts' }).catch(function (reason) {
    //             alert('哦！请您先连接 MetaMask,请连接币安智能链！');
    //         }).then(function (accounts) {
    //             // 现在你可以启动你的应用并自由访问 Web3.js:  
    //             const account = accounts[0];
    //             console.log('账户：'+account);

    //             establishConnection();

    //             claim(account);

    //             playerInfo(account).then(function(iresult) {
    //                 var playerInfo = JSON.parse(JSON.stringify(iresult));

    //                 // var playTimes = playerInfo.playTimes;
    //                 // $('#playTimes').html(playTimes);
    //                 // var successTimes = playerInfo.successTimes;
    //                 // $('#successTimes').html(successTimes);
    //                 var rewardUsdt = playerInfo.rewardUsdt;
    //                 var drewardUsdt = parseFloat(rewardUsdt / 1000000000000000000);
    //                 drewardUsdt = formatDecimal(drewardUsdt,2);
    //                 $('#rewardUsdt').html(drewardUsdt);
                    
    //                 pending(account).then(function(result) {
    //                     var pending = JSON.parse(JSON.stringify(result));
                
    //                     // //未提取金额
    //                     var notExtractedUsdt = parseFloat(pending / 1000000000000000000);
    //                     notExtractedUsdt = formatDecimal(notExtractedUsdt,2);
    //                     $('#notExtractedUsdt').html(notExtractedUsdt);
    //                 });
                    
    //             });
    //         })
    //     }
    // }
}

async function getAccount1() {
	if (!!window.imToken) {
	// 授权获取账户
	var accounts = await web3.eth.getAccounts();
	// web3.eth.getAccounts().then((e)=>{console.log(e)})
	// 取第一个账户
	var myAccount = accounts[0];
	console.log(myAccount, typeof myAccount, 1);
    alert("myAccount:"+myAccount)
	// 返回指定地址账户的余额
	var balance = await web3.eth.getBalance(myAccount);
	let eth =  web3.utils.fromWei(balance, 'ether');
	console.log(balance,eth, typeof balance, 2)
	
	}else{
		console.log('非 imToken 环境');
	}
}

async function getAccount2() {
	// 授权获取账户
	this.web3.eth.getAccounts((err, accounts) => {
        if (err) {
            return reject(err)
        }
        alert('accounts:'+accounts[0]);

        var account = accounts[0];

        console.log('账户：'+account);

        establishConnection();

        claim(account);

        playerInfo(account).then(function(iresult) {
            var playerInfo = JSON.parse(JSON.stringify(iresult));

            // var playTimes = playerInfo.playTimes;
            // $('#playTimes').html(playTimes);
            // var successTimes = playerInfo.successTimes;
            // $('#successTimes').html(successTimes);
            var rewardUsdt = playerInfo.rewardUsdt;
            var drewardUsdt = parseFloat(rewardUsdt / 1000000000000000000);
            drewardUsdt = formatDecimal(drewardUsdt,2);
            $('#rewardUsdt').html(drewardUsdt);
            
            pending(account).then(function(result) {
                var pending = JSON.parse(JSON.stringify(result));
        
                // //未提取金额
                var notExtractedUsdt = parseFloat(pending / 1000000000000000000);
                notExtractedUsdt = formatDecimal(notExtractedUsdt,2);
                $('#notExtractedUsdt').html(notExtractedUsdt);
            });
            
        });
    })
	
	
}
