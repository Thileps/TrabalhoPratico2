$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    $.ajax({
        url: "https://api.rawg.io/api/games/" + id + "?key=a337047564ef4609a74a92d6d1e1fe8b",
        type: "GET",
        contentType: "application/json"
    }).done(function(response) {
        $("#imgGame").append(`<div class="ratio" style="--bs-aspect-ratio: 50%;"> <img src="${response.background_image}" class="img-fluid" alt="imagem game"> </div>`);
        $(".nomeGame").append(response.name);
        $(".descricaoGame").append(response.description);
        $(".siteGame").append(response.website);
        $(".dataLancamentoGame").append(response.released);
        $(".avaliacaoGame").append(response.rating);
    });
});