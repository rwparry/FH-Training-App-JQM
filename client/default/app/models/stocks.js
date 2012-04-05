var stocks={
  
	getStockInfo:function(name, callback){
		if (name &&name!=""){
			$fh.act({
				act : 'getStockInfo',
				secure : false,
				req : {
					name:name
				}
			}, function(res) {
        if (typeof callback !== 'undefined') {
          callback(res);
        }
			},
				function(code,errorprops,params) {
					loading(false);
					alert("Error. Please try again.");
			});
		}
	}
  
}