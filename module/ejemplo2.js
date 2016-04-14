
var basketModule = (function(){

	var basket = [];
	function metodoPrivado1(){

	}

	function metodoPrivado2(){

	}

	return {
		addItem: function(values){
			basket.push(values);
		},
		getItemCount : function(){
			return basket.length;
		},
		hacerAlgo : metodoPrivado1(),
		getTotal: function(){
			var q = this.getItemCount(),
			p=0;
			while(q--){
				p += basket[q].price;
			}
			return p;
		}

	}

})();

//test
basketModule.addItem({
	item: 'pan',
	price: 0.5
});

basketModule.addItem({
	item: 'cafe',
	price: 0.3
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());


console.log(basketModule.basket);// undefined
console.log(basket);// error