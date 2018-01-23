var thisHost = "write_your_address";
var api = "http://" + thisHost + ":32348";
var blockTargetInterval = 240;
var coinUnits = 1000000000000;
var symbol = 'TRTL';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "trtl": [
		["eu.turtlepool.space", "http://eu.turtlepool.space:8117"],
        	["us.turtlepool.space", "http://us.turtlepool.space:8117"],
        	["hk.turtlepool.space", "http://hk.turtlepool.space:8117"],
        	["slowandsteady.fun", "http://slowandsteady.fun:8119"],
        	["trtl.mine2gether.com", "https://trtl.mine2gether.com/api/"],
        	["pool.turtleco.in", "https://pool.turtleco.in/api/"],
        	["xk.is", "https://xk.is/api/"],
        	["auspool.turtleco.in", "https://auspool.turtleco.in/api/"],
        	["turtle.atpool.party", "http://turtle-eu.atpool.party:8117"]
  
		
    ]
};

var networkStat2 = {
    "trtl": [
		["pool.turtleco.in", "https://pool.turtleco.in/api/"]
};
