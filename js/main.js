'use strict';

{
    const open = document.querySelector('.modal-open');
    const close = document.querySelector('.modal-close');
    const modal = document.querySelector('.modal');
    const mask = document.querySelector('.mask');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    });

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });

    mask.addEventListener('click', () => {
        // modal.classList.add('hidden');
        // mask.classList.add('hidden');
        close.click();
    });
}