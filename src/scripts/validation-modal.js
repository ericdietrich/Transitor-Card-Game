const modal = document.querySelector('.validation-modal');

export default function initValidationModal() {
    modal.classList.add('active');
}

export function closeModal() {
    modal.classList.remove('active');
}