var ochered=2;
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup1").hide();
    }
    
    function ball(){
	if (localStorage.getItem('ochered')==2) {
		
		localStorage.setItem('ochered', '1');
		
		if(typeof(Storage) !== "undefined") {
			if (localStorage.EXP2team) {
    		localStorage.EXP2team = Number(localStorage.EXP2team) + exp;
			} else {
    		localStorage.EXP2team = exp;
			}}

	  	document.location.href='../index.html';
	}			

	else {
		if(typeof(Storage) !== "undefined") {
			if (localStorage.EXP1team) {
    		localStorage.EXP1team = Number(localStorage.EXP1team) + exp;
			}else{
    		localStorage.EXP1team = exp;}}
	localStorage.setItem('ochered', '2');
	document.location.href='../index.html';
	console.log(ochered);

		}
	}	


	function cler(){
		localStorage.clear();
		location.reload();
	}



	function miss () {
		if (localStorage.getItem('ochered')==2) {
		
		localStorage.setItem('ochered', '1');
		
		
	  document.location.href='../index.html';}
	else {
		localStorage.setItem('ochered', '2');
	document.location.href='../index.html';
	console.log(ochered);}

	}