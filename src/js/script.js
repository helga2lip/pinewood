
const modalOpenButtons = document.querySelectorAll("[data-modal]");

modalOpenButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute("data-modal");
        const modal = document.querySelector(modalId);
        modal.classList.toggle('modal--closed');
    })
});

const modalCloseButtons = document.querySelectorAll(".modal__button-close");

modalCloseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest(".modal");
        modal.classList.add('modal--closed');
    })
})

