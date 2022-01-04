	//获取min，max之间的数
	function randomNum(Min, Max) {
	    var Range = Max - Min;
	    var Rand = Math.random();
	    var num = Min + Math.floor(Rand * Range);  //舍去
	    return num;
	}
	
	//从一个给定的数组arr中,随机返回num个不重复项
	function getArrayItems(arr, num) {
		//新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
		var temp_array = new Array();
		for (var index in arr) {
			temp_array.push(arr[index]);
		}
		//取出的数值项,保存在此数组
		var return_array = new Array();
		for (var i = 0; i<num; i++) {
			//判断如果数组还有可以取出的元素,以防下标越界
			if (temp_array.length>0) {
				//在数组中产生一个随机索引
				var arrIndex = Math.floor(Math.random()*temp_array.length);
				//将此随机索引的对应的数组元素值复制出来
				return_array[i] = temp_array[arrIndex];
				//然后删掉此索引的数组元素,这时候temp_array变为新的数组
				temp_array.splice(arrIndex, 1);
			} else {
				//数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
				break;
			}
		}
		return return_array;
	}

	var event_array={
		life_array1:[],
		life_array2:[],
		life_array3:[],
		life_array4:[],
		life_array5:[],
		life_array6:[],
		life_array7:[],
		death_array:[],
		node_array:[],
		inevits_array:[],
		inevitf_array:[],
		fixed_array:[]
	}

	//初始化各个节点的事件数据
	function initial(){

		initialLifeEvent();
		//同步请求
		$.ajax({
			type: "get",//请求方式
			url: "data/death.json",//地址，就是json文件的请求路径
			dataType: "json",//数据类型可以为 text xml json  script  jsonp
			async: false,
			success: function(data){//返回的参数就是 action里面所有的有get和set方法的参数
				var dataArrays = data;
		
				for(const id in dataArrays) {
					const event = dataArrays[id];

					if (event.hasOwnProperty("c_event") && event.hasOwnProperty("e_event")) {
						event_array["death_array"].push(event);
					}

					// event_array["death_array"].push(event);
					/*console.log(event.id);
					console.log(event.event);*/

				}
			}
		});

		$.ajax({
			type: "get",//请求方式
			url: "data/node.json",//地址，就是json文件的请求路径
			dataType: "json",//数据类型可以为 text xml json  script  jsonp
			async: false,
			success: function(data){//返回的参数就是 action里面所有的有get和set方法的参数
				var dataArrays = data;
		
				for(const id in dataArrays) {
					const event = dataArrays[id];

					if (event.hasOwnProperty("c_event") && event.hasOwnProperty("e_event")) {
						event_array["node_array"].push(event);
					}
					
					/*console.log(event.id);
					console.log(event.event);*/

				}
			}
		});

		$.ajax({
			type: "get",//请求方式
			url: "data/succInevitable.json",//地址，就是json文件的请求路径
			dataType: "json",//数据类型可以为 text xml json  script  jsonp
			async: false,
			success: function(data){//返回的参数就是 action里面所有的有get和set方法的参数
				var dataArrays = data;
		
				for(const id in dataArrays) {
					const event = dataArrays[id];

					if (event.hasOwnProperty("c_event") && event.hasOwnProperty("e_event")) {
						event_array["inevits_array"].push(event);
					}
					
					/*console.log(event.id);
					console.log(event.event);*/

				}
			}
		});

		$.ajax({
			type: "get",//请求方式
			url: "data/failInevitable.json",//地址，就是json文件的请求路径
			dataType: "json",//数据类型可以为 text xml json  script  jsonp
			async: false,
			success: function(data){//返回的参数就是 action里面所有的有get和set方法的参数
				var dataArrays = data;
		
				for(const id in dataArrays) {
					const event = dataArrays[id];

					if (event.hasOwnProperty("c_event") && event.hasOwnProperty("e_event")) {
						event_array["inevitf_array"].push(event);
					}
					
					/*inevits_array.push(event.event);*/
					/*console.log(event.id);
					console.log(event.event);*/
				}
			}
		});

		$.ajax({
			type: "get",//请求方式
			url: "data/fixed.json",//地址，就是json文件的请求路径
			dataType: "json",//数据类型可以为 text xml json  script  jsonp
			async: false,
			success: function(data){//返回的参数就是 action里面所有的有get和set方法的参数
				var dataArrays = data;
		
				for(const id in dataArrays) {
					const event = dataArrays[id];

					if (event.hasOwnProperty("c_event") && event.hasOwnProperty("e_event")) {
						event_array["fixed_array"].push(event);
					}
					
					/*console.log(event.id);
					console.log(event.event);*/
				}
			}
		});
	}

	//初始化各个节点的事件数据
	function initialLifeEvent(){

		for(i = 1; i < 8; i++){
			
			var url = "data/life"+i+".json";

			$.ajax({
				type: "get",//请求方式
				url: url,//地址，就是json文件的请求路径
				dataType: "json",//数据类型可以为 text xml json  script  jsonp
				async: false,
				success: function(data){//返回的参数就是 action里面所有的有get和set方法的参数
					var dataArrays = data;
					// debugger
					for(const id in dataArrays) {
						const event = dataArrays[id];
						if (event.hasOwnProperty("c_event") && event.hasOwnProperty("e_event")) {
							event_array["life_array"+i].push(event);
						}
						
						/*console.log(event.id);
						console.log(event.event);*/
	
					}
				}
			});
		}
	}

	//获取随机事件
	function getRandomEventsByStep(step) {
		var min,max;
		var my_array = new Array();
    	for(i = 0; i < step+1; i++){
			if(i == step && i != 7){
				//第一个节点单独处理
				if(0 == i){
					min = 1;
					var p = 2+15*i;
					max = 3+15*i;
					var num = randomNum(min,max);
					
					var number = Number(i)+1;
					if(num == p){
						my_array = my_array.concat(getArrayItems(event_array["life_array"+number],1));
						my_array = my_array.concat(event_array.node_array[i]);
						my_array = my_array.concat(event_array.inevitf_array[i]);
					}else{
						my_array = my_array.concat(getArrayItems(event_array.death_array,1));
					}
					
					if(100 == my_array.length){
						return my_array;
					}
					
				}else{
					n = i-1
					min = 4+15*n;
					
					max = 3+15*i;
					var p = 2+15*i;
					var num = randomNum(min,max);
					
					var number = Number(i)+1;
					if(num == p){
						my_array = my_array.concat(getArrayItems(event_array["life_array"+number],13));
						my_array = my_array.concat(event_array.node_array[i]);
						my_array = my_array.concat(event_array.inevitf_array[i]);
					}else{
						my_array = my_array.concat(getArrayItems(event_array["life_array"+number],num-min));
						my_array = my_array.concat(getArrayItems(event_array.death_array,1));
					}

					if(100 == my_array.length){
						return my_array;
					}
				}
				
				break;
			}else{
				
				if(7 == i){
					my_array = my_array.concat(event_array.fixed_array);

					if(100 == my_array.length){
						return my_array;
					}
				} else {
					var number = Number(i)+1;
					if(0 == i){
						my_array = my_array.concat(getArrayItems(event_array["life_array"+number],1));
					}else{
						my_array = my_array.concat(getArrayItems(event_array["life_array"+number],13));
					}
					my_array = my_array.concat(event_array.node_array[i]);
					my_array = my_array.concat(event_array.inevits_array[i]);

					if(100 == my_array.length){
						return my_array;
					}
				}
							
			}
		}

		return my_array;

	}

	function bigMut(big, common) { 
		big += ""; 
		common += ""; 
		if (big.length < common.length) { 
			big = [common, common = big][0]; 
		} 
		big = big.split("").reverse(); 
		var oneMutManyRes = []; 
		var i = 0, 
		len = big.length; 
		for (; i < len; i++) { 
			oneMutManyRes[oneMutManyRes.length] = oneMutMany(big[i], common) + getLenZero(i); 
		} 
		var result = oneMutManyRes[0]; 
		for (i = 1, len = oneMutManyRes.length; i < len; i++) { 
			result = bigNumAdd(result, oneMutManyRes[i]); 
		} 
		return result; 
	} 

	function getLenZero(len) { 
		len += 1; 
		var ary = []; 
		ary.length = len; 
		return ary.join("0"); 
	} 

	function oneMutMany(one, many) { 
		one += ""; 
		many += ""; 
		if (one.length != 1) { 
			one = [many, many = one][0]; 
		} 
		one = parseInt(one, 10); 
		var i = 0, 
		len = many.length, 
		resAry = [], 
		addTo = 0, 
		curItem, 
		curRes, 
		toSave; 
		many = many.split("").reverse(); 
		for (; i <= len; i++) { 
			curItem = parseInt(many[i] || 0, 10); 
			curRes = curItem * one + addTo; 
			toSave = curRes % 10; 
			addTo = (curRes - curRes % 10) / 10; 
			resAry.unshift(toSave); 
		} 
		if (resAry[0] == 0) { 
			resAry.splice(0, 1); 
		} 
		return resAry.join(""); 
	} 

	function bigNumAdd(big, common) { 
		big += ""; 
		common += ""; 
		var maxLen = Math.max(big.length, common.length), 
		bAry = big.split("").reverse(), 
		cAry = common.split("").reverse(), 
		i = 0, 
		addToNext = 0, 
		resAry = [], 
		fn, 
		sn, 
		sum; 
		for (; i <= maxLen; i++) { 
			fn = parseInt(bAry[i] || 0); 
			sn = parseInt(cAry[i] || 0); 
			sum = fn + sn + addToNext; 
			addToNext = (sum - sum % 10) / 10; 
			resAry.unshift(sum % 10); 
		} 
		if (resAry[0] == 0) { 
			resAry.splice(0, 1); 
		} 
		return resAry.join(""); 
	} 

	/**
	 * 比较两个大整数的大小，返回－1，0，1  a<b返回-1
	 * @param {String} a
	 * @param {String} b
	 * @returns {number}
	 */
	function bigNumCompare (a, b) {
		let back = 0
		let max = Math.ceil(Math.max(a.length, b.length) / 15)
		//分成多少段,从左边开始
		for (let i = max; i > 0; i--) {
			let num1 = getMidNum(a, a.length - i * 15, 15)
			let num2 = getMidNum(b, b.length - i * 15, 15)
			//15位数字相减
			let cur = num1 - num2
			if (cur < 0) {
				back = -1
				break
			} else if (cur > 0) {
				back = 1
				break
			}
		}
		return back
	}

	function getMidNum(str, start, len) {
		if (start + len > 0) {
			return +str.substr(start < 0 ? 0 : start, start < 0 ? start + len : len)
		} else {
			return 0
		}
	}

	function formatDecimal(num, decimal) {
		var nums = num.toString()
		let index = nums.indexOf('.')
		if (index !== -1) {
			nums = nums.substring(0, decimal + index + 1)
		} else {
			nums = nums.substring(0)
		}

		var cur = parseFloat(num) - parseFloat(nums);
		if(cur > 0){
			nums = parseFloat(nums) + 0.01;
		}
		return parseFloat(nums).toFixed(decimal)
	}

	
	/* 部分隐藏处理
	** str 需要处理的字符串
	** frontLen  保留的前几位
	** endLen  保留的后几位
	** cha  替换的字符串
	*/
	function plusXing(str, frontLen, endLen) {
		// var len = str.length - frontLen - endLen;
		var xing = '......';
		// for (var i = 0; i < len; i++) {
		// 	xing += cha;
		// }
		return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
	};

    


	
