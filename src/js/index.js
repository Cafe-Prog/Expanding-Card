// Get Elements Needs //

const boxes = document.querySelectorAll('.image-boxes');

// Add Active Class To Slides //

function addActiveClass() {
    boxes.forEach((item) => {
        item.addEventListener('click', () => {
            remvoeActiveClass();
            item.classList.add('active');
        })
    });
};
addActiveClass();

// Remove Active Class From Slides //

function remvoeActiveClass() {
    boxes.forEach((item) => {
        item.classList.remove('active');
    });
};