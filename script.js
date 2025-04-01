const inputElement = [...document.querySelectorAll('input.code-input')];
const form = document.querySelector('form');

inputElement.forEach((elem, index) => {
    elem.addEventListener('keydown', (e) => {
        if (e.keyCode === 8 && e.target.value === '') { 
            inputElement[Math.max(0, index - 1)].focus();
        }
    });

    elem.addEventListener('input', (e) => {
        const [first, ...rest] = e.target.value;
        e.target.value = first ?? '';
        const lastInputBox = index === inputElement.length - 1; 
        const insertedContent = first !== undefined;

        if (insertedContent && !lastInputBox) { 
            inputElement[index + 1].focus();
            inputElement[index + 1].value = rest.join('');
            inputElement[index + 1].dispatchEvent(new Event('input'));
        }
    });
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputElement.forEach(input => {
        input.value = ''; 
    });
});