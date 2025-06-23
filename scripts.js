let valor_total = 0;
let valor = 1; 
const span = document.getElementById("click_count");

function add() {
    valor_total += valor;
    span.innerText = valor_total;
    if(valor_total >= 500){
        alert("Parabéns, você ganhou!");
    }
}

function sub(desc){
    if(valor_total >= valor){
        valor_total -= desc;
        span.innerText = valor_total;

        if(desc === 10){
            alert("Você adquiriu bônus de 2 pontos!");
            valor += 2;
        }else if(desc === 50){
            alert("Você adquiriu bônus de 8 pontos!");
            valor += 8;
        }else if(desc === 100){
            alert("Você adquiriu bônus de 32 pontos!");
            valor += 32;
        }

    }else{
        alert("Você não tem pontos suficientes para essa ação!");
        }
}
