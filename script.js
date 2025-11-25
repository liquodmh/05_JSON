
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
function saveAndRender(){
    localStorage.setItem('playlist',JSON.stringify(songs));
    //todo Reload UI
    renderSongs(songs);
}

function renderSongs() {
    list.innerHTML = ''; // Clear current list

    songArray.forEach(song => {
        // Create table row
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${song.title}</td>
            <td><a href="${song.url}" target="_blank" class="text-info">Watch</a></td>
            <td class="text-end">
                <button class="btn btn-sm btn-warning me-2" onclick="editSong(${song.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteSong(${song.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        list.appendChild(row);
    });
}
