/*function getElement(){
	element = document.querySelector('#shopB');
	console.log('選ばれたのは' + element.textContent + 'でした');
}
function getElement(){
	elements = document.querySelectorAll('.shop li');
	let len= elements.length;
	for (let i = 0; i < len; i++){
		console.log(elements.item(i).textContent);
	}
}*/
let lists = document.getElementsByClassName("pull-down-list");
console.log(lists);