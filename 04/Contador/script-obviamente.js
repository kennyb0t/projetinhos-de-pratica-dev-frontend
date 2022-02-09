// Para a contagem inicial...
let contagem = 0;

// Para selecionar os valores e butões
const valor = document.querySelector("#valor");
const btns = document.querySelectorAll(".btn");


btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("diminuir")) {
            contagem--;
        } else if (styles.contains("aumentar")) {
            contagem++;
        } else if (styles.contains("resetar")) {
            contagem = 0;
        }
        valor.textContent = contagem;
    });
});




/* Minha primeira versão desse código inteiro;
btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("diminuir")) {
            contagem--;
        }
        valor.textContent = contagem;
    });

    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("aumentar")) {
            contagem++;
        }
        valor.textContent = contagem;
    });

    tn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("resetar")) {
            contagem = 0;
        }
        valor.textContent = contagem;
    });
	*/