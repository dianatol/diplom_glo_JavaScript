
export const topSlider = () => {
    const slides = document.querySelectorAll('.top-slider .item')

    let currentSlide = 0

    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none'
    })

    setInterval(() => {
        slides[currentSlide].style.display = 'none'

        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        slides[currentSlide].style.display = 'block'

    }, 3000)
}