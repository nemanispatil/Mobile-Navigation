const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', () => {
    hideAll();
    listItems[i].classList.add('active');
    contents[i].classList.add('show');
  });
}

function hideAll() {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove('active');
    contents[i].classList.remove('show');
  }
}
