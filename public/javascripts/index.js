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
            <h5><a href="/anime/${attributes.titles.en}"> ${attributes.titles.en} </a></h5>
            `
        }, counter);
        }
    })
    .catch(function (error){
        console.log(error)
    })
}

function comment()
{
    var comment = document.getElementById('comment')
    var showId = document.getElementById('showId')
    axios.post('/comments', {comment: comment.value, showId: showId.value })
    .then(response => {
        comment.value = ''
        console.log(response)
        var comments = document.getElementById('displayComments');
        comments.innerHTML = `<div>${response.data.comment}</div>  ${comments.innerHTML}`

    })
}
