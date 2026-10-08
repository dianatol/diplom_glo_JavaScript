export const up = () => {

    const upButton = document.querySelector('.up')
    const services = document.querySelector('.services-section')

    window.addEventListener('scroll', () => {

        const servicesPosition = services.getBoundingClientRect().top

        if (servicesPosition <= 0) {
            upButton.style.display = 'block'
        } else {
            upButton.style.display = 'none'
        }
    })

    upButton.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    })
}