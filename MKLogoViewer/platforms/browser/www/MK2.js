 function RR() {
	window.localStorage['MK2'] = document.getElementById('MK2').value;
    document.getElementById('MK2').value=null;}

    function RV() {
        document.getElementById('MK2').value = window.localStorage['MK2'];
    }
