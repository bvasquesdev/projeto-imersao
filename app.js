function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhuma série ou filme encontrado. Você precisa digitar algo válido.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        sinopse = dado.sinopse.toLowerCase();
        tags = dado.tags.toLocaleLowerCase();
        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                   <p class="descricao-meta">${dado.sinopse}</p>
                   <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>  
       `
        };
    };
    
    if (!resultados) {
        resultados = "<p>Nenhuma série ou filme encontrado.</p>"
    }

    section.innerHTML = resultados;
};
//console.log(dados);