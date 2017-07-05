
let getMovie = function() {
    let movieSearch = document.getElementById('place').value;
    let link = `https://api.themoviedb.org/3/search/movie?api_key=YOURKEYb&query=${movieSearch}&page=`;

// https://api.themoviedb.org/3/search/movie?api_key=ba6bf8e6d4f3f8abf52f228f3ed1b32b&query=batman&page=2

    let movies = new XMLHttpRequest();
    movies.open('GET', link , true);

    movies.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        let movz = (JSON.parse(movies.responseText));
        let results = (movz.total_results);
        let paginas = (movz.total_pages);
        let name =  (movz.results);
        document.getElementById('resultados').innerHTML = "Total results: " + results;  
        // let pgns = "";
        // for(var i = 0; i < paginas; i++) {
        //     pgns += "<li>" + "<a href='" + what + "&page=" + (i + 1) + "'>" + (i + 1) + "</a>" + "</li>";
            
        //     document.getElementById('numeros').innerHTML =  pgns; 
        // }
         
        var filmes = "";
        
        for(var i = 0; i <= name.length; i++){
            // var filmes = name[i];
            if(name[i].poster_path === null) {
                filmes += "<div class='col-md-12 eachmovie'>" + "<div class='row'>" + "<div class-col-md-9'>" + "<div class='titulo no-image'>" + name[i].title + "</div>" + "<div class='nota no-txt'>" + "Vote average: " + name[i].vote_average + "</div>" + "<div class='lanca no-txt'>" + "release : " + name[i].release_date + "</div>" + "<div class='descricao no-ttt'>" + name[i].overview + "</div>" + "</div>" + "</div>" + "</div>";
            } else {
                filmes += "<div class='col-md-12 eachmovie'>" + "<div class='row'>" + "<div class='col-md-3'>" + "<img class='img-responsive' src='" + "http://image.tmdb.org/t/p/w185/" + name[i].poster_path + "' width='200'>" +  "</div>" + "<div class-col-md-9'>" + "<div class='titulo'>" + name[i].title + "</div>" + "<div class='nota'>" + "Vote average: " + name[i].vote_average + "</div>" + "<div class='lanca'>" + "release : " + name[i].release_date + "</div>" + "<div class='descricao'>" + name[i].overview + "</div>" + "</div>" + "</div>" + "</div>";
            }

            document.getElementById('nome').innerHTML = filmes;
        }
      

    }
    console.log(link)

    }
    movies.send();
}












