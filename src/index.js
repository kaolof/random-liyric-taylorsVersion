var albums = [
    { album: "Taylor Swift", color: "#bdd6b9" },
    { album: "Fearless", color: "#f8cd93" },
    { album: "Speak Now", color: "#ceb3d2" },
    { album: "Red", color: "#8a3a4b" },
    { album: "1989", color: "#bee9fc" },
    { album: "Reputation", color: "#857e80" },
    { album: "Lover", color: "#f8b6d2" },
    { album: "Folklore", color: "#d1d0cb" },
    { album: "Evermore", color: "#c9b59c" }
];
const url="https://taylorswiftapi.onrender.com/get?album=";
const cardNode=document.querySelector('.card');
const clickMe=document.querySelector('.clickme');
const funButton=document.querySelector('.fun');
const body=document.querySelector('body');

//creando componentes 
const quote=document.createElement('h3');
const nameSong=document.createElement('p');
const nameAlbum=document.createElement('p');

clickMe.addEventListener('click',()=>{
    console.log("click")
    //agregando estilo de card
    const random = Math.floor(Math.random() * 10);
    const urlAlbum=`${url}${albums[random].album}`;
    console.log(urlAlbum);
    const info=document.createElement("div");
    const colorEra= albums[random].color;
    window
    .fetch(urlAlbum)
    .then(respuesta=> respuesta.json())
    .then((data)=>{
        body.style.backgroundColor=colorEra //cambiar el color de fondo dependiendo de la era
        cardNode.classList.add('wrapper', 'block');
        quote.textContent=`"${data.quote}"`;
        nameSong.textContent=`- ${data.song}`;
        nameAlbum.textContent=`💿 ${data.album}`;
        

        info.append(quote, nameSong, nameAlbum);
        cardNode.appendChild(info);

    });
    
});

funButton.addEventListener('click', ()=>{alert('this game is not mine, the creator: @thesephist');});

   