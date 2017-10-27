function RR() {
	window.localStorage['MK'] = document.getElementById('MK').value;
	document.getElementById('MK').value=null;}

    function RV() {
    	document.getElementById('MK').value = window.localStorage['MK'];
    }

// function RR(){
// 	var a=[0];
// 		for(var i=0; i<10; i++){
// 			a[i]=i;
// 		}
// 		if(window.localStorage[a[i]]=null){
// 			i=0;
// 			a=a[i];
// 			window.localStorage.setItem(a,document.getElementById('MK').value);
// 		}
// 		else{
// 			i++;
// 			}
// 			window.localStorage.setItem(a,document.getElementById('MK').value);
// 		}

// function RV(){
// 	var a= ["key"];
// 	a=document.getElementById('MK').value;
// 	for(var i=0; i<100;i++){
// 		document.getElementById('MK').value=window.localStorage.getItem(a[i]);
// 	}}