const list = document.querySelectorAll('.list');

function linkActive() {
    list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    })
}
list.forEach((item) => item.addEventListener('click', linkActive)); 