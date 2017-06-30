$(document).ready( function() {

  loadpost();

  setTimeout(function() {

    childrens = $('#posts div').children();

    // cerinta 12
    var elemH1 = document.getElementsByTagName('h1')[0];
    var elemParent = $(elemH1).parent();
    customcss(elemParent,'position','relative');
    customcss(elemH1,'position','absolute');
    customcss(elemH1,'width','60px');
    moveH1(elemH1);

    $('.first-posts-wrapper').animate({
      color: "#fff",
      width: 500
    }, 1000 );

    var secondTemplate = $('.second-posts-wrapper');
    customcss(secondTemplate,'width','600px');
    customcss(secondTemplate,'border','1px solid #000');
    customcss(secondTemplate,'transition','border 200ms ease-in-out');
    customcss(secondTemplate,'margin-left','180px');
    customcss(secondTemplate,'transition','margin-left 200ms ease-in-out');

  }, 1000)

})

// cerinte 2, 4, 9
/*  start */
function showInConsole() {

  // cerinta 2
  console.log('cerinta 2: ');
  console.log(childrens);

  // cerinta 4
  var firstElement = $('#posts div').first();
  console.log('cerinta 4, first element: ');
  console.log(firstElement);

  var lastElement = $('#posts div').last();
  console.log('cerinta 4, last element: ');
  console.log(lastElement);

  // cerinta 9
  console.log('cerinta 9, copii lui #posts: ');
  console.log(childrens);

  var siblings = $('#posts').siblings();
  console.log('cerinta 9, siblings pentru #posts: ');
  console.log(siblings);

  var parent = $('#posts').parent();
  console.log('cerinta 9, parintele lui #posts: ');
  console.log(parent);

}
/*  end */

// cerinta 5
/*  start */
function textAppend () {

  childrens.append('Text appended');

}
/*  end */

// cerinta 6
/*  start */
var doublechange = (function(elem) {

  var first = true;

  return function(elem) {
    first ? hideElem(elem) : showElem(elem);
    first = !first;
  }

})();

function hideElem(elem) {

  console.log('s-a ascuns elementul: ' + elem);
  return $('#posts div').eq(elem).hide();

};

function showElem(elem) {

    console.log('se afiseaza elementul: ' + elem);
    return $('#posts div').eq(elem).show();

};
/*  end */

// cerinta 7 si 8
/*  start */
function doBlue () {
  var selectChildren = $('#posts div').eq(1);

  $(selectChildren).children().css('color', 'blue');
  $(selectChildren).children().eq(2).css('color', 'black');

  console.log('cerinta 7');

  // cerinta 8
  $(selectChildren).children().eq(0).html('text schimbat');
  console.log('cerinta 8');

}
/*  end */

// cerinta 10
/*  start */
function doRed () {

  $('#posts div.second-posts-wrapper').css('background', '#a20000');
  console.log('cerinta 10');

}
/*  end */


function loadpost() {
	var root='http://jsonplaceholder.typicode.com'

	$.ajax({
  	url: root + '/users',
  	method: 'GET'
  }).then(function(data) {
   	$.map(data, function(post, index ) {
      //debugger;
      var template1 =
        '<div class="first-posts-wrapper">' +
    			'<h2 class="headline">' + post.name + ' (<strong>' + post.id + '</strong>) </h2>' +
          '<p>Username: <strong>' + post.username + '</strong></p>' +
          '<p>Email: <strong>' + post.email + '</strong></p>' +
          '<p>Address: <strong>' + post.address.street + ', ' + post.address.suite + ', ' + post.address.city + ', ' + post.address.zipcode + '</strong></p>' +
          '<p>Phone: <strong>' + post.phone + '</strong></p>' +
          '<p>Website: <strong>' + post.website + '</strong></p>' +
          '<p>Company: <strong>' + post.company.name + '</strong></p>' +
          '<p>Company\'s tagline: <strong>' + post.company.catchPhrase + '</strong></p>' +
          '<p>Company\'s business: <em>' + post.company.bs + '</em></p>' +
        '</div>';

      var template2 =
        '<div class="second-posts-wrapper">' +
          '<h2 class="headline">' + post.name + ' (<strong>' + post.id + '</strong>) </h2>' +
          '<p>Username: <strong>' + post.username + '</strong></p>' +
          '<p>Email: <strong>' + post.email + '</strong></p>' +
          '<p>Address: <strong>' + post.address.street + ', ' + post.address.suite + ', ' + post.address.city + ', ' + post.address.zipcode + '</strong></p>' +
          '<p>Phone: <strong>' + post.phone + '</strong></p>' +
          '<p>Website: <strong>' + post.website + '</strong></p>' +
          '<p>Company: <strong>' + post.company.name + '</strong></p>' +
          '<p>Company\'s tagline: <strong>' + post.company.catchPhrase + '</strong></p>' +
          '<p>Company\'s business: <em>' + post.company.bs + '</em></p>' +
        '</div>';

      if (index % 2 == 0) {
        $('#posts').append(template1);
      } else {
        $('#posts').append(template2);
      }

      // cerinta 3
      $('#posts div').eq(2).css('background','red');
      $('#posts div').eq(7).css('background','red');

		});
	});
}

// cerinta 11
function changeLocation() {

  return window.location.href = 'https://google.com';

}

// cerinta 12
  function customcss (x, y, z) {

    $(x).css(y, z);

};

// cerinta 12
function moveH1(elem) {

  var pos = 0;
  var id = setInterval(frame, 10);

  function frame() {

    if (pos == 350) {
        clearInterval(id);
    } else {
        pos++;
        elem.style.left = pos + 'px';
    }
  }
}