var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';



// getting the form where submit button is there
var form = document.getElementById('addForm');

// to create a var which contains the id of the list of the items
var itemList = document.getElementById('items');

// giving event listener to it to respond when when submit is clicked
form.addEventListener('submit',addElement);

// to delete the list which is clicked
itemList.addEventListener('click',removeElement);

// defining the function addElements

function addElement(e)
{
  // preventing the brower from shutting the response quick
  e.preventDefault();

  // to select the text written on the text area
  var textItem = document.getElementById('item').value;

  // to create a new li
  var li = document.createElement('li');

  // to add the list in the list group item
  li.className = 'list-group-item';

  // to add what is written in the text item into the li
   li.appendChild(document.createTextNode(textItem));

  //  creating the delete button which will be displayed at the end of the box
  var delButton = document.createElement('button');

  // adding class to delete button
  delButton.className = 'btn btn-danger btn-sm float-end delete';

  // adding text to the delete button
  delButton.appendChild(document.createTextNode('X'));

  // adding delete button to li
  li.appendChild(delButton);

  // adding the li to the item-list
  itemList.appendChild(li); 

}

function removeElement(e)
{
  if(e.target.classList.contains('delete'))
    {
      if(confirm('are you sure?'))
        {
          var li = e.target.parentElement;
          itemList.removeChild(li);
        }

    }
}

// adding filter to it

 var filter = document.getElementById('filter');

//  filter event
filter.addEventListener('keyup',filterItems);


  // Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}



