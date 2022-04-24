document.querySelector('button').addEventListener('click', getPicture)

function getPicture(){
    let date = document.querySelector('input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=X9pVz645JEUov8cYHLp3tOJ6doOuZwTngbDGN0dQ`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

    .catch(err => {
        console.log(`error ${err}`)
    });
};







// document.querySelector('button').addEventListener('click', getPicture)
// let date = document.querySelector('input').value

// async function getPicture(){    
// await fetch(`https://api.nasa.gov/planetary/apod?api_key=X9pVz645JEUov8cYHLp3tOJ6doOuZwTngbDGN0dQ`).then(res => res.json()).catch(err => {
//         console.log(`error ${err}`)
//     });
//     nasaObject = data.map(info => {
//         let rObj = {
//             date: info.date,
//             image: info.hdurl,
//             description: info.explanation,
//         }
//         return rObj;
//     });
//     document.getElementById('').innerText = nasaObject.date
//     document.getElementById('').src = nasaObject.image
//     document.getElementById('').innerText = nasaObject.description
// };