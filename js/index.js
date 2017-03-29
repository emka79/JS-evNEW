function checkOnclickEvent(param) {
  console.log(param);
}
var list = document.getElementById('list');
 	add = document.getElementById('addElem');
	
add.addEventListener('click', function() {
    var next = list.getElementsByTagName('li').length;
    list.innerHTML += '<li>item '+ next + '</li>';
});