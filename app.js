document.querySelector('.menu-button').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.add('show');
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.remove('show');
});
