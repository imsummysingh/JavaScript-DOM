/////////////////////////////////////////////Examine the Document Object\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//console.dir(document);  //give information about all property attached to document

//console.log(document.all);

//console.log(document.domain);
//console.log(document.URL);

//console.log(document.title);

//console.log(document.title="123");--change the title name

// console.log(document.all[10]);
// document.all[10].textContent = "Hello Items";       //It will change the heading from ITEM LISTER to HELLO ITEMS

//console.log(document.forms);

////////////////////////////////////////////////////GETELEMENTBYID\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// console.log(document.getElementById('header-title'));

// var header = document.getElementById('header-title');
// console.log(header);

// header.textContent = "Hello";
// header.innerText = "Hei";
// console.log(header);
// console.log(header.textContent);
// console.log(header.innerText);  //it pay attention to styling

// header.innerHTML = "<h2>Hi</h2>";

// header.style.fontFamily = "italian"; 
// header.style.fontWeight = "bold";


////////////////////////////////////////////////GETELEMENTBYCLASSNAME\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// var item = document.getElementsByClassName('list-group-item');
// console.log(item);
// item[1].textContent = "Hello 2?";
// item[1].style.fontWeight = "bold";
// item[1].style.backgroundColor = "yellow";
// console.log(item[1]);



// for(var i=0;i<item.length;i++){
//     item[i].style.backgroundColor = "red";
// }


////////////////////////////////////////////////GETELEMENTBYTagNAME\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// var item = document.getElementsByTagName('li');
// console.log(item);


////////////////////////////////////////////////QUERY SELECTOR\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
////document.querySelector==$

// var header = document.querySelector('#header-title');
// header.style.fontFamily = "italian";

// var input = document.querySelector('input');
// input.value="Summy";

// var submit = document.querySelector('input[type="submit"]');
// submit.value="send";

// var item = document.querySelector('.list-group-item');
// item.style.color = "red";

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "yellow";

////////////////////////////////////////////////QUERY SELECTOR ALL\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// var title = document.querySelectorAll('.title');
// console.log(title);

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor = "red";
//     even[j].style.backgroundColor = "blue";
// }

// for(var j=0;j<even.length;j++){
//     even[j].style.backgroundColor = "blue";
// }


////////////////////Traversing the DOM\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var ItemList = document.querySelector('#items');
//parent Node Property
// console.log(ItemList.parentNode);
// ItemList.parentNode.style.backgroundColor = "red";
// console.log(ItemList.parentNode.parentNode);
// console.log(ItemList.parentNode.parentNode.parentNode);

//Parent Element
// console.log(ItemList.parentElement);
// ItemList.parentElement.style.backgroundColor = "red";
// console.log(ItemList.parentElement.parentElement);
// console.log(ItemList.parentElement.parentElement.parentElement);


//Child Node
// console.log(ItemList.childNodes);   //nodelist


// console.log(ItemList.children);     //Collections
// console.log(ItemList.children[1]);
// ItemList.children[1].style.backgroundColor = "red";

//FirstChild
// console.log(ItemList.firstChild);

//firstElement child
// console.log(ItemList.firstElementChild);
// ItemList.firstElementChild.textContent="Hello from First Element Child"


//last child
// console.log(ItemList.lastChild);

//lastElementChild
// console.log(ItemList.lastElementChild);
// ItemList.lastElementChild.textContent = "last child Element";

//next Sibling

// console.log(ItemList.nextSibling);

//next element sibling
// console.log(ItemList.nextElementSibling);

//previous sibling
// console.log(ItemList.previousSibling);

//previous element siblings
// console.log(ItemList.previousElementSibling);
// ItemList.previousElementSibling.style.color = 'red';


//CreateElement

//Create a Div

// var newDiv = document.createElement('div');
// newDiv.className = "Hello"; 
// newDiv.id = "Hello1";
// newDiv.setAttribute('title','Hello Div');

// var newDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')

// console.log(newDiv);

// container.insertBefore(newDiv,h1);

// newDiv.style.fontSize = "30px";


/////////////////////////////////EVENT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// var  button = document.getElementById('button').addEventListener('click',btnClick);

// function btnClick(e) {
    //console.log('Clicked');
    // document.getElementById('header-title').textContent="Hey";
    // document.querySelector('#main').style.backgroundColor = 'red';
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);

    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';

    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);

// }

// var  button = document.getElementById('button');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);


// function runEvent(e){
//     console.log('EVENT TYPE: '+e.type);
// }

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e){
//   e.preventDefault();
//   console.log('EVENT TYPE: '+e.type);

  //console.log(e.target.value);
  // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

  // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

  // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
//}




