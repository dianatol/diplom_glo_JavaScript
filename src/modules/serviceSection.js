export const serviceSection = () => {

    const carousel = document.querySelector('.services-carousel')
    const elements = document.querySelectorAll('.services-carousel > div')

    const arrowLeft = document.querySelector('.arrow-left')
    const arrowRight = document.querySelector('.arrow-right')

    let currentSlide = 0

    const moveCarousel = () => {
        const elementWidth = elements[0].offsetWidth

        carousel.style.transform =
            `translateX(-${currentSlide * elementWidth}px)`
    }

    arrowRight.addEventListener('click', () => {
        if (currentSlide < elements.length - 3) {
            currentSlide++
            moveCarousel()
        }
    })

    arrowLeft.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--
            moveCarousel()
        }
    })


    const applicationButtons = document.querySelectorAll('.services-carousel .fancyboxModal, .button-services')

    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalClose = document.querySelector('.modal-close')

    const closeModal = () => {
        modalCallback.style.display = ''
        modalOverlay.style.display = ''
    }

    applicationButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault()

            modalCallback.style.display = 'block'
            modalOverlay.style.display = 'block'
        })
    })

    modalClose.addEventListener('click', closeModal)

    modalOverlay.addEventListener('click', closeModal)
}