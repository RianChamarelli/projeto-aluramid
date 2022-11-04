import tocaSom from "./modules/tocaSom.js";
    
    const teclas = document.querySelectorAll('.tecla');
    
    const reproduzSom = teclas.forEach(element => {
        const instrumento = element.classList[1];
        const idAudio = (`#som_${instrumento}`);        
         
        element.addEventListener('click', () => {
            tocaSom(idAudio);
        })

        element.addEventListener('keydown', (event) => {
            if (event.code === 'Space' || event.code === 'Enter'){
                element.classList.add('ativa');
            }   
        }) 

        element.addEventListener('keyup', () => {
            element.classList.remove('ativa');
        })


    })   


/home