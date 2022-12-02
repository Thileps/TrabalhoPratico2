$(document).ready(function() {
    var urlGames = "https://api.rawg.io/api/games?page=1&page_size=8&key=a337047564ef4609a74a92d6d1e1fe8b";
    var urlDevelopers = "https://api.rawg.io/api/developers?page=1&page_size=3&key=a337047564ef4609a74a92d6d1e1fe8b";
    
    function geraGames(){
        $.ajax({
            url: urlGames,
            type: "GET",
            contentType: "application/json"
        }).done(function (response) {
            let str = "";
            let result = response.results;
            for (let i = 0; i < result.length; i++) {
                const game = result[i];
                str += `<div class="col-12 col-sm-3 col-md-4 col-lg-3">
                <div class="game border border-0">
                    <h5 class="game-title fw-bold text-truncate">${game.name}</h5>
                    <div class="ratio" style="--bs-aspect-ratio: 50%;">
                        <img src="${game.background_image}" class="img-fluid" alt="imagem game">
                    </div>
                    <h5 class="fs-6">Avaliação: <span class="float-end">${game.rating}</span></h5>
                    <h5 class="fs-6">Data de lançamento: <span class="float-end">${game.released}</span></h5>
                    <div class="game-body">
                        <a href="#"><button type="button" class="btn btn-secondary">Mais detalhes ...</button></a>
                    </div>
                </div>
                </div>`;
            }
            urlGames = response.next;
            $("#gamesContainer").append(str);
        });
    }

    function geraDevelopers(){
        $.ajax({
            url: urlDevelopers,
            type: "GET",
            contentType: "application/json"
        }).done(function (response) {
            let str = "";
            let result = response.results;
            for (let i = 0; i < result.length; i++) {
                const developer = result[i];
                str += ` <div class="col-12 col-sm-4 col-md-4">
                <div class="card border border-0">
                    <h5 class="card-title fw-bold">${developer.name}</h5>
                    <div class="developersBg" style="background-image: url('${developer.image_background}')">
                        
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            <b>Principais jogos</b>
                        <ul class="lista">`;
                        for (let i = 0; i < 3; i++) {
                          str += `<li>${developer.games[i].name}</li>`;
                        }
                str += `</ul>
                        </p>
                    </div>
                </div>
               </div>`;
              }
            urlDevelopers = response.next;
            $("#developersContainer").append(str);
        });
    }

    geraGames();
    geraDevelopers();

    $("#btnGames").click(geraGames);
    $("#btnDevelopers").click(geraDevelopers);
});