let valor_total = 0;

function add(valor) {
    const span = document.getElementById("click_count");
    valor_total += valor;
    span.innerText = valor_total;
    if(valor_total == 500){
        alert("Parabéns, você ganhou!");
    }
}

function sub(desc){
    const span = document.getElementById("click_count");
    valor_total -= desc;
    if(valor_total < valor){
        alert("Você não tem pontos suficientes");
    }else{
        span.innerText = valor_total;
        }

    if(desc == 10){
    alert("Você adquiriu bônus de 2 pontos!");
    valor += 2;
    }
    }
