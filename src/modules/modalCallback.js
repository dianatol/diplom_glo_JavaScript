export const modalCallback = () => {
    const callbackBtns = document.querySelectorAll('.callback-btn')
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalCloseBtn = document.querySelector('.modal-close')

    const closeModal = () => {
        modalCallback.style.display = ''
        modalOverlay.style.display = ''
    }

    callbackBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault()

            modalCallback.style.display = 'block'
            modalOverlay.style.display = 'block'
        })

    })

    modalCloseBtn.addEventListener('click', (event) => {
        event.preventDefault()

        closeModal()

    })

    modalOverlay.addEventListener('click', (event) => {
        event.preventDefault()

        closeModal()

    })



}