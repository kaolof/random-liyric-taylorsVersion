albums=["Taylor Swift","Fearless","Speak Now","Red","1989","Speak Now","Reputation","Lover","Folklore","Evermore"];
const url="https://taylorswiftapi.herokuapp.com/get?album=";
const cardNode=document.querySelector('.card');
const clickMe=document.querySelector('.clickme');
const funButton=document.querySelector('.fun');

//creando componentes 
const quote=document.createElement('h3');
const nameSong=document.createElement('p');
const nameAlbum=document.createElement('p');

clickMe.addEventListener('click',()=>{
    //agregando estilo de card
    
    const random = Math.floor(Math.random() * 10);
    const urlAlbum=`${url}${albums[random]}`;
    const info=document.createElement("div");
    window
    .fetch(urlAlbum)
    .then(respuesta=> respuesta.json())
    .then((data)=>{
        cardNode.classList.add('wrapper', 'block');
        quote.textContent=`"${data.quote}"`;
        nameSong.textContent=`- ${data.song}`;
        nameAlbum.textContent=`💿 ${data.album}`;
        

        info.append(quote, nameSong, nameAlbum);
        cardNode.appendChild(info);

    });
    
});

funButton.addEventListener('click', ()=>{alert('this game is not mine, the creator: @thesephist');});

   