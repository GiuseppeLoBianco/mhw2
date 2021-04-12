function initialize() {
    for(var elemento of CONTENUTI){
        var container = document.createElement("div");
        container.classList.add("elemento");
        container.id = "articolo";

        const immagine = document.createElement("img");
        immagine.src = elemento.immagine;
        immagine.classList.add("copertina");

        const title = document.createElement("h2");
        title.textContent = elemento.titolo;
        
        const testo = document.createElement("span");
        testo.textContent = "Mostra la descrizione";
        
        var descrizione = document.createElement("li");
        descrizione.classList.add("hidden");
        descrizione.textContent = elemento.descrizione;

        const bottone = document.createElement("button");
        bottone.innerHTML = "Aggiungi ai preferiti";
       
        container.appendChild(title);
        container.appendChild(immagine);
        container.appendChild(testo);
        container.appendChild(descrizione);
        container.appendChild(bottone);
        const section = document.querySelector("section.griglia");
        section.appendChild(container);

        testo.addEventListener("click",mostradescrizione);
        bottone.addEventListener("click",aggiungipreferito);
    }

}


function mostradescrizione(event){
    const testo = event.currentTarget;
    testo.removeEventListener("click",mostradescrizione);
    const desc = event.currentTarget.parentNode.querySelector("li");
    desc.classList.remove("hidden");
    testo.textContent = "Nascondi descrizione";
    testo.addEventListener("click",nascondidescrizione);
}

function nascondidescrizione(event){
    const testo = event.currentTarget;
    testo.removeEventListener("click",nascondidescrizione);
    const desc = event.currentTarget.parentNode.querySelector("li");
    desc.classList.add("hidden");
    testo.textContent = "Mostra la descrizione";
    testo.addEventListener("click",mostradescrizione);
}

function aggiungipreferito(event){

    const ti = document.createElement("h2");
    ti.textContent = event.currentTarget.parentNode.querySelector("h2").textContent;

    const im = document.createElement("img");
    im.src = event.currentTarget.parentNode.querySelector("img").src;
    im.classList.add("copertina");

    const te = document.createElement("span");
    te.textContent = event.currentTarget.parentNode.querySelector("span").textContent;
    te.addEventListener("click",mostradescrizione);

    const de = document.createElement("li");
    de.textContent = event.currentTarget.parentNode.querySelector("li").textContent;
    de.classList.add("hidden");
    
    const bottone1 = event.currentTarget.parentNode.querySelector("button");
    bottone1.removeEventListener("click",aggiungipreferito);
    bottone1.innerHTML = "Tra i tuoi preferiti";
    bottone1.classList.add("cliccato");

    
    const bottone2 = document.createElement("button");
    bottone2.innerHTML = "Rimuovi dai preferiti";
    bottone2.addEventListener("click",rimuovipreferito);

    const preferito = document.createElement("div");
    preferito.classList.add("elemento");
    preferito.id = ("preferito");
    preferito.appendChild(ti);
    preferito.appendChild(im);
    preferito.appendChild(te);
    preferito.appendChild(de);
    preferito.appendChild(bottone2);

    const sectionelem =document.querySelector("#prefelem");
    sectionelem.appendChild(preferito);
    const section = document.querySelector("#preferiti");
    section.classList.remove("hidden");
    cont++;

}

function rimuovipreferito(event){
    const t1 = event.currentTarget.parentNode.querySelector("h2").textContent;
    
    const rim= event.currentTarget.parentNode;

    const cliccati = document.querySelectorAll(".cliccato");
    for(let bot of cliccati){
        const t2 = bot.parentNode.querySelector("h2").textContent;

        if( t2 == t1){
        bot.classList.remove("cliccato");
        bot.innerHTML ="Aggiungi ai preferiti";
        bot.addEventListener("click",aggiungipreferito);
        }
    }
    
    rim.remove();
    cont--;
    if(cont ===0){
        preferiti.classList.add("hidden");
    }
}

function CercaSerie(){
    let input=document.getElementById('barra').value;
    const elementi =document.querySelectorAll("#articolo");
    for(let elemento of elementi){
        if(elemento.querySelector("h2").textContent.toLowerCase().indexOf(input.toLowerCase())==-1){
            elemento.classList.add("hidden");
        }
        else{
            elemento.classList.remove("hidden");
        }
    }
}


initialize();
let cont = 0;

