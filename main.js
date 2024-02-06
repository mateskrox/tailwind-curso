const darkModeInput = document.querySelector('#darkmode-interruptor');

darkModeInput.addEventListener('click', ()=> {
    document.documentElement.classList.toggle('dark')
})
