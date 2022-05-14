let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

document.querySelector('input').setAttribute('max', today);

document.querySelector('button').addEventListener('click', getPicture)

function getPicture(){
    let date = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=X9pVz645JEUov8cYHLp3tOJ6doOuZwTngbDGN0dQ&date=${date}`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('html').style.background = "url("+data.hdurl+") no-repeat center center fixed"
            document.querySelector('.title').innerText = data.title
            document.querySelector('.story').innerText = data.explanation
        })

        .catch(err => {
            console.log(`error ${err}`)
        });
};
