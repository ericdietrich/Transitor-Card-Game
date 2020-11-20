import initValidationModal, { closeModal } from './validation-modal.js'


export default function handleSubmit() {

    const form = document.getElementById('submit-form');
    const close = document.getElementById('close');

    form.addEventListener('submit', e => {
        e.preventDefault();
        initValidationModal();
    });

    close.addEventListener('click', e => {
        e.preventDefault();
        closeModal();
    });

}