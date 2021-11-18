const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
let points = 0;

function handleKeyUp(event){
    if(event.keyCode === 32){
        jump();
    }
}

function jump(){
    isJumping = true;
    
    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);
        //descendo
            let downInterval = setInterval(() =>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }
                else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }
        //subindo
        else{
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randonTime = Math.random() * 6000; //random: cria decimais entre 0 a 1

    console.log

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition <= -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
            points += 10;
            console.log(points);
        }
        else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            // GAME OVER
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">FIM DE JOGO</h1>';
            alert("Pressione F5 para retornar ao Jogo!!");
        }
        else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randonTime); // cria cactus em intervalo aleatório
}

createCactus();
document.addEventListener('keyup', handleKeyUp);
