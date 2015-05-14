Array.prototype.and = function() {
	var ret = [];
	var arrays = Array.prototype.slice.call(arguments,0);
	arrays.unshift(this);
	var length = Math.max.apply(null,arrays.map(function(a){return a.length}));
	for (var i=0; i<length; i++) {
		for (var j=0; j<arrays.length;j++) {
			ret.push(arrays[j][i]);
		}
	}
	return ret;
}
