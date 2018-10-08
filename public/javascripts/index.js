

function search()
{
    var query = document.getElementById('query')
    var shows = document.getElementById('shows')
    shows.innerHTML = ''
    axios.get(`/anime?query=${query.value}`)
    .then(function (response){
        //handle succes
        console.log(response.data)
        var anime = response.data

        var counter = 500
        for (var i = 0; i < anime.length; i++)
        {
            let attributes = anime[i].attributes
            if(!attributes.titles.en){
                attributes.titles.en = attributes.titles.en_jp;
            }
            counter += 125
            window.setTimeout(() => {shows.innerHTML += `
            <h1> ${attributes.titles.en} </h1>
            `
        }, counter);
        }
    })
    .catch(function (error){
        console.log(error)
    })
}
