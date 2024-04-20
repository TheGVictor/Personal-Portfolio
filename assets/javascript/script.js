window.sr = ScrollReveal({reset: true})
const buttonIdiom = document.querySelector('.translate')

buttonIdiom.addEventListener('click', ()=>{

    if(buttonIdiom.classList.contains('portuguese')){
        buttonIdiom.classList.remove('portuguese')
        buttonIdiom.classList.add('english')
    }
    else{
        buttonIdiom.classList.add('portuguese')
        buttonIdiom.classList.remove('english')
    }
})

sr.reveal('.profileDesk')
sr.reveal('.carreerDesk')
sr.reveal('.projectsDesk')

sr.reveal('.textTitle', { 
    scale: 0.85,
    delay: 500
})

sr.reveal('.colored', {
    rotate: {x: 0, y: 80, z:0},
    delay: 250
})


projectsJson.map((item)=>{
    const project = document.querySelector('.modal .project').cloneNode(true)
    document.querySelector('.projectsBoard').append( project )

})