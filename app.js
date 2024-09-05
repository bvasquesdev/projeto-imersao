function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    
    let resultados = "";
    
    for (let dado of dados) {
        resultados += `
         <div class="item-resultado">
             <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.sinopse}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
         </div>  
    `
    }
    
    section.innerHTML = resultados   
};
//console.log(dados);