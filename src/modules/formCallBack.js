export const formCallback = () => {
    const form = document.forms['form-callback']

    if (!form) {
        return
    }

    const nameInput = form.querySelector('[name="fio"]')
    const phoneInput = form.querySelector('[name="tel"]')
    const button = form.querySelector('.feedback')

    nameInput.addEventListener('input', () => {
        nameInput.value = nameInput.value.replace(/[^а-яА-ЯёЁ\s-]/g, '')
    })

    phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/[^\d+]/g, '')
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        button.value = 'Идёт отправка...'
        button.disabled = true

        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        console.log('Отправляем:', data)

        fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    button.value = 'Отправлено'
                    form.reset()
                } else {
                    button.value = 'Ошибка'
                }
            })
            .catch(() => {
                button.value = 'Ошибка'
            })
            .finally(() => {
                button.disabled = false
            })
    })
}

