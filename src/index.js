var albums = [
    { album: "Taylor Swift", color: "#BCD5B8" },
    { album: "Fearless", color: "azul" },
    { album: "Speak Now", color: "verde" },
    { album: "Red", color: "amarillo" },
    { album: "1989", color: "rosa" },
    { album: "Reputation", color: "morado" },
    { album: "Lover", color: "celeste" },
    { album: "Folklore", color: "verde oscuro" },
    { album: "Evermore", color: "gris" }
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
    //agregando estilo de card
    const random = Math.floor(Math.random() * 10);
    const urlAlbum=`${url}${albums[random].album}`;
    const info=document.createElement("div");
    const colorEra= albums[random].color
    window
    .fetch(urlAlbum)
    .then(respuesta=> respuesta.json())
    .then((data)=>{
        //body.style.backgroundColor=colorEra //cambiar el color de fondo dependiendo de la era
        cardNode.classList.add('wrapper', 'block');
        quote.textContent=`"${data.quote}"`;
        nameSong.textContent=`- ${data.song}`;
        nameAlbum.textContent=`💿 ${data.album}`;
        

        info.append(quote, nameSong, nameAlbum);
        cardNode.appendChild(info);

    });
    
});

funButton.addEventListener('click', ()=>{alert('this game is not mine, the creator: @thesephist');});

   