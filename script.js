const inputbox = document.getElementById('inputbox');
const listContainer = document.getElementById('list-container');
const span = document.querySelector('span');

function additems(param) {
  if (inputbox.value === "") {
    alert('plese enter sumthing');
  } else {
    let li = document.createElement('li');
    li.textContent = inputbox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputbox.value = '';
  savData()
}

listContainer.addEventListener('click', function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle('checked');
  }

  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  savData();
}, false);

function savData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();