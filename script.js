document.addEventListener('DOMContentLoaded', () => {
    const shape = document.querySelector('.shape');

    // Adding a little hover effect for fun
    shape.addEventListener('mouseover', () => {
        shape.style.backgroundColor = '#6bffb9';
        shape.style.transition = 'background-color 0.5s ease';
    });

    shape.addEventListener('mouseout', () => {
        shape.style.backgroundColor = '#ff6b6b';
    });
});
