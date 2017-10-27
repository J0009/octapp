function RR() {
     window.localStorage['mkL'] = document.getElementById('mkL').value;
    document.getElementById('mkL').value=null;}

    function RV() {
        document.getElementById('mkL').value = window.localStorage['mkL'];
    }