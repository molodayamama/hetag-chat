document.addEventListener('DOMContentLoaded', function () {
    const toggleViewBtn = document.getElementById('toggleViewBtn');
    const imageList = document.getElementById('imageList');
    // Set the default view to "list"
    imageList.classList.add('list-view');
    toggleViewBtn.addEventListener('click', function () {
        if (imageList.classList.contains('tile-view')) {
            imageList.classList.remove('tile-view');
            imageList.classList.add('list-view');
        } else {
            imageList.classList.remove('list-view');
            imageList.classList.add('tile-view');
        }
    });
    let upButton = document.querySelector('.up-button');
    window.onscroll = function () {
        if (window.scrollY > 200) {
            upButton.classList.add('shown');
        } else {
            upButton.classList.remove('shown');
        }
    };
    upButton.onclick = function () {
        window.scrollTo(0, 0);
    };
});