export const accordeon = () => {

    const accordeon = document.querySelector('.accordeon')
    const elements = accordeon.querySelectorAll('.element')

    elements.forEach(element => {

        const content = element.querySelector('.element-content')

        if (element.classList.contains('active')) {
            content.style.display = 'block'
        } else {
            content.style.display = 'none'
        }

        element.addEventListener('click', () => {

            if (element.classList.contains('active')) {
                element.classList.remove('active')
                content.style.display = 'none'
                return
            }
            elements.forEach(item => {
                item.classList.remove('active')

                const itemContent = item.querySelector('.element-content')
                itemContent.style.display = 'none'
            })

            element.classList.add('active')
            content.style.display = 'block'
        })
    })
}