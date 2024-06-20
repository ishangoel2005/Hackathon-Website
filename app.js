document.querySelector('.menu-button').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.add('show');
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.remove('show');
});
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('contactModal');
    const btn = document.querySelector('.get_in_touch_bar');
    const span = document.querySelector('.close-button');

    btn.onclick = function () {
        modal.style.display = 'flex';
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
