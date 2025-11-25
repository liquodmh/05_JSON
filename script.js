
const form = document.getElementById('songForm');
const list = document.getElementById('songList');
const submitBtn = document.getElementById('submitBtn');

//if it doesnt exist in localstorage get empty array else
//get json text and convert it to object jason

let songs = JSON.parse(localStorage.getItem('playlist')) || [];

//user click add button
form.addEventListener('submit', (e) => {
    //Dont submit to server , i will handle it here
    e.preventDefault();

    //read forms Data
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;

    //create json bobj based on url title  
    const song = {
        id: Date.now(),  // Unique ID
        title: title,
        url: url,
        dateAdded: Date.now()
    };


    songs.push(song);

    //TO DO SAVE  AND RERENDER 

    form.reset();
});
