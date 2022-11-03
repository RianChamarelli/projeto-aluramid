import tocaSom from "./modules/tocaSom.js";


    const teclas = document.querySelectorAll('.tecla');
    
    const reproduzSom = () => {
        teclas.forEach(element => {
            const instrumento = element.classList[1];
            const idAudio = (`#som_${instrumento}`);
        
            element.addEventListener('click', () => {
                tocaSom(idAudio);
            })
        })
    }   

