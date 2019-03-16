var listDisplay = $('.listDisplay');
var input = $('input');

window.addEventListener('keydown', function() {
  input.focus();
})

input.addEventListener('keyup', function() {
  updateListDisplay(input.value);
})

updateListDisplay('');



function $(x) {return document.querySelector(x);}
function updateListDisplay(searchStr) {
  foundArray = searchAll(list, searchStr);
  listDisplayClear();
  for (var i=0; i<foundArray.length; i++) {
    if (foundArray[i]) {
      listDisplayAddStr(i+1, list[i]);
    }
  }
}

function listDisplayAddStr(idx, str) {
  var numberItem = document.createElement('span');
  numberItem.className = 'number';
  numberItem.innerText = idx;

  var strItem = document.createElement('div');
  strItem.className = 'str';
  strItem.innerText = str;


  var newItem = document.createElement('div');
  newItem.className = 'listItem';
  newItem.appendChild(numberItem);
  newItem.appendChild(strItem);

  listDisplay.appendChild(newItem);
}

function listDisplayClear() {
  while (listDisplay.firstChild) {
      listDisplay.removeChild(listDisplay.firstChild);
  }
}

function search(str, searchStr) {
  regex = new RegExp(searchStr, "gi");
  return str.match(regex) !== null;
}

function searchAll(list, searchStr) {
  len = list.length;
  foundArray = new Array(len);
  for (var i=0; i<len; i++) {
    foundArray[i] = search(list[i], searchStr);
  }
  return foundArray;
}