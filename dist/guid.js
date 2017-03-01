function guid32(){
	function s4() {
        return Math.floor((Math.random() + 1) * 10000).toString(16);
    };
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}