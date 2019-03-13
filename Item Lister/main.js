var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event

form.addEventListener('submit',addItem);

//Delete Event

itemList.addEventListener('click',removeItem);

//For Filter
filter.addEventListener('keyup',filterItems);


//AddItem

function addItem(e) {
    e.preventDefault();
    //console.log(1);

    //Get value
    var newItem = document.getElementById('item').value;

    //Create New li element
    var li = document.createElement('li');
    li.className = "list-group-item";
    //console.log(li);

    //add textNode with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element

    var deletebutton = document.createElement('button');
    deletebutton.className = "btn btn-danger btn-sm float-right delete";

    deletebutton.appendChild(document.createTextNode('X'));

    li.appendChild(deletebutton);

    itemList.appendChild(li);
    
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        //console.log(1);
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();

    //get items
    var items = itemList.getElementsByTagName('li');
    //convert into array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }

    });

}