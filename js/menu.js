const allMenuBtns = document.querySelectorAll('.js-open-menu');

allMenuBtns.forEach(btn => {
    btn.addEventListener('click', onMenuBtnClick)
})

function onMenuBtnClick() {
    document.body.classList.toggle('menu-opened')
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
const header = document.querySelector('.js-sticky')

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}