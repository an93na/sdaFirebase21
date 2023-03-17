export const bodySelector = 'body';

export function createButton() {
    const button = document.createElement('button');
    document.body.appendChild(button);
    button.innerText = "Klik";
}

