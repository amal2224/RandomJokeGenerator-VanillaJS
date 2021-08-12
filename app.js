const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded',getJoke);
button.addEventListener('click',getJoke);

// Methode-1
// async function getJoke(){
//     const jokeData = await fetch('https://icanhazdadjoke.com/',{
//         headers : {
//             'accept' : 'application/json'
//         }
//     });
//     const jokeObj = await jokeData.json();
//     jokeText.innerHTML = jokeObj.joke;
// }


//Methode-2
function getJoke(){
    fetch('https://icanhazdadjoke.com/' , {
        headers:{
            'Accept': 'application/json'
        }
    }).then(data => data.json())
        .then(obj => jokeText.innerHTML = obj.joke)
}