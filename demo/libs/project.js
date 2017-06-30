$(document).ready( function() {



  setTimeout(function(){
   	//customcss ('.nav', 'background', '#a20000');
   	//$(".nav").css('background','#a20000');
   },1000)

  setTimeout(function(){
   		//customcss ('#colorplay', 'background', '#4bf442');
   		//$("#colorplay").css('background','#4bf442');
   },2000)

  setTimeout(function(){
      //customcss ('#global', 'background', '#000');
   },3000)

   var template='<h2>aaaaa</h2>'

   setTimeout(function(){
   //$("#colorplay").append('<h2>aaaaa</h2>');
   },3000)

 })


	function customcss (x, y, z) {
		$(x).css(y, z);
	};

	function adaugaTextInStorage (cheie, valoareaDeAdaugat) {
		window.localStorage.setItem(cheie, valoareaDeAdaugat);
	}


	function scoateTextDinStorageSiFaceApend (cheie) {
		var textDeAdaugat = window.localStorage.getItem(cheie);
		adaugaLaElementulSelectat ('#colorplay', textDeAdaugat);
	}


	function adaugaLaElementulSelectat (selecteazaUnElement, ceSaAdaugiLaElement) {
		$(selecteazaUnElement).append(ceSaAdaugiLaElement);
	}

	function schimbaImaginea (newsrc) {
		$('img.mountain').attr('src', newsrc);
	}




	var doublechange = (function(newsrc) {
	  var first = true;

	  return function(newsrc) {
	    first ? changeOne(newsrc) : changeTwo(newsrc);
	    first = !first;
	  }
	})();

	function changeOne(newsrc) {
		var oldSrc = $('img.mountain').attr('src');
		adaugaTextInStorage ('preserveSRC', oldSrc);
		return schimbaImaginea (newsrc);
	};

	function changeTwo(newsrc) {
	  	var scoateVechiulURL = window.localStorage.getItem('preserveSRC');
	  	return schimbaImaginea (scoateVechiulURL);
	};


function loadpost() {
	var root='http://jsonplaceholder.typicode.com'

	$.ajax({
    	url: root + '/posts',
    	method: 'GET'
  	}).then(function(data) {
   	$.map(data, function(post, index ) {
    var template = '<div>' +
					'<h2>' + post.title + '</h2>' +
                    '<p>' + post.body + '</p>' +
                    '</div>';
    $('#posts').append(template);

  		});
  	});
}
