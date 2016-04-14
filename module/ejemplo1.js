
/*
	Plantilla	
*/

var myNamespace = (function(){

	var myPrivateVar = 0;
	var myPrivateMethod = function(some){
		console.log(some);
	};

	return {
		myPublicVar : "hello",
		myPublicFunction = function(var){
			myPrivateVar++;
			myPrivateMethod(var);
		}
	};

})();