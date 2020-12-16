
// Invoked on click of hamburger
window.menuShow = function() {
    var menu = document.getElementsByClassName('menu')[0];

    if (menu.classList.contains('d-none')) {
        menu.classList.remove('d-none');
    }
    else {
        menu.classList.add('d-none');
    }
};

// Invoked on click of cross
window.menuHide = function() {
    var menu = document.getElementsByClassName('menu')[0];

    if (menu.classList.contains('d-none')) {
        menu.classList.remove('d-none');
    }
    else {
        menu.classList.add('d-none');
    }
};