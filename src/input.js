let inputs = document.querySelectorAll('.input');

let textArea = document.querySelector('.text-area');

textArea.addEventListener('mouseover', () => {
    textArea.style.borderColor = '#038F11';
});

textArea.addEventListener('mouseout', () => {
    textArea.style.borderColor = '#000';
});

inputs.forEach(input => {

    input.addEventListener('mouseover', () => {
        input.style.borderColor = '#038F11';
    });
    
    input.addEventListener('mouseout', () => {
        input.style.borderColor = '#000';
    });

});

