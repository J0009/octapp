function RR() {
    window.localStorage['MK3'] = document.getElementById('MK3').value;
    document.getElementById('MK3').value=null;}

    function RV() {
        document.getElementById('MK3').value = window.localStorage['MK3'];
    }