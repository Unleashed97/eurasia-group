export const handleAccordion = () => {
    const accordionBtnList = document.querySelectorAll('.btn--accordion')

    accordionBtnList.forEach((btn) =>
        btn.addEventListener('click', () => {
            btn.classList.toggle('active')
            let icon = btn.querySelector('.btn__icon-wrapper')
            if (btn.classList.contains('active')) {
                icon.innerHTML = `<svg class="btn__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                `
            } else {
                icon.innerHTML = `<svg class="btn__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15M1 8H15" stroke="#212536" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                `
            }
            let panel = btn.nextElementSibling

            panel.classList.toggle('active')
        }),
    )
}
