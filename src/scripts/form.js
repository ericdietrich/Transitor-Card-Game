import initValidationModal, { closeModal } from './validation-modal.js'


export default function handleSubmit() {

    const form = document.getElementById('submit-form');
    const close = document.getElementById('close');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    form.addEventListener('submit', e => {
        e.preventDefault();
        initValidationModal();
        name.value = ('');
        email.value = ('');
        message.value = ('');
    });

    close.addEventListener('click', e => {
        e.preventDefault();
        closeModal();
    });

}