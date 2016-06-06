// =========================== DOM ELEMENTS ============================= //
var songDisplayContainer = document.getElementById("songOutput");
var addMusicButton = document.getElementById("addMusicButton");
var listMusicButton = document.getElementById("listMusicButton");
var addMusicView = document.getElementById("addMusicView");
var listMusicView = document.getElementById("listMusicView");
var addButton = document.getElementById("addButton");
var songInput = document.getElementById("songInput");
var artistInput = document.getElementById("artistInput");
var albumInput = document.getElementById("albumInput");

// =========================== SETUP ============================= //

// Songs array
var songs = [];

// =========================== XHR CALLS ============================= //

// Load first list
var xhrListOne = new XMLHttpRequest();
xhrListOne.onreadystatechange = function() {
  if(xhrListOne.readyState === 4 && xhrListOne.status === 200) {
    var songData = JSON.parse(xhrListOne.responseText);
    // Output songs for first list
    outputSongs(songData, 1);
  }
};
xhrListOne.open("GET", "../json/songList.json");
xhrListOne.send();

// =========================== FUNCTIONS ============================= //

function deleteButtonPressed() {
  // Get card element
  var songCard = event.target.parentNode;
  console.log(songCard);
  // Remove from songDisplayContainer
  songDisplayContainer.removeChild(songCard);
}

function moreButtonPressed() {

  // Process second list
  var xhrListTwo = new XMLHttpRequest();
  xhrListTwo.onreadystatechange = function() {
    if(xhrListTwo.readyState === 4 && xhrListTwo.status === 200) {
      var songData = JSON.parse(xhrListTwo.responseText);
      // Output songs for second list
      outputSongs(songData, 2);
    }
  };

  xhrListTwo.open("GET", "../json/songList2.json");
  xhrListTwo.send();
}

function outputSongs(songData, listNumber) {

  // Check which list is being loaded
  if (listNumber === 1) {

    // Loop through each song
    for (let i = 0; i < songData.songs.length; i++) {

      // Get currentSong being looked at
      let currentSong = songData.songs[i];

      // Create song card container
      let songCard = document.createElement("div");
      // Add a class to container
      songCard.class = "songCard";
      // Create song card html
      songCard.innerHTML = `<p class="songInformation">${currentSong.title} - ${currentSong.artist} - ${currentSong.album}</p>`;
      // Create delete button
      let deleteButton = document.createElement("button");
      // Add class to delete button
      deleteButton.class = "deleteButton";
      // Add "Delete" to button text
      deleteButton.innerHTML = "Delete";
      // Add delete button to songCard
      songCard.appendChild(deleteButton);
      // Add event listener to delete button
      deleteButton.addEventListener("click", deleteButtonPressed);
      // Append entire songCard to songDisplayContainer
      songDisplayContainer.appendChild(songCard);
    
    }

    // When first list is done being added to DOM, add more button
    // Create more button
    let moreButton = document.createElement("button");
    // Add ID to moreButton
    moreButton.id = "moreButton";
    // Add text to button
    moreButton.innerHTML = "More";
    // Add event listener to more button
    moreButton.addEventListener("click", moreButtonPressed);
    // Append to songDisplayContainer
    songDisplayContainer.appendChild(moreButton);


  } else if (listNumber === 2) {

    // First remove moreButton
    let moreButton = document.getElementById("moreButton");
    songDisplayContainer.removeChild(moreButton);

    // Loop through each song
    for (let i = 0; i < songData.songs.length; i++) {

      // Get currentSong being looked at
      let currentSong = songData.songs[i];

      // Create song card container
      let songCard = document.createElement("div");
      // Add a class to container
      songCard.class = "songCard";
      // Create song card html
      songCard.innerHTML = `<p class="songInformation">${currentSong.title} - ${currentSong.artist} - ${currentSong.album}</p>`;
      // Create delete button
      let deleteButton = document.createElement("button");
      // Add class to delete button
      deleteButton.class = "deleteButton";
      // Add "Delete" to button text
      deleteButton.innerHTML = "Delete";
      // Add delete button to songCard
      songCard.appendChild(deleteButton);
      // Add event listener to delete button
      deleteButton.addEventListener("click", deleteButtonPressed);
      // Append entire songCard to songDisplayContainer
      songDisplayContainer.appendChild(songCard);
    
    }
    
  }

}

// Add music button pressed
function addMusicPressed() {
  // Hide List View
  listMusicView.classList.add("hidden");
  // Remove hidden class from addMusicView, so it is showing
  addMusicView.classList.remove("hidden");
  // Set focus on text input
  songInput.focus();
}

// List view button pressed
function listMusicPressed() {
  // Hide Add Music View
  addMusicView.classList.add("hidden");
  // Remove hidden class from listMusicView, so it is showing
  listMusicView.classList.remove("hidden");
}

// // Add song to songs array
// function addButtonPressed() {
//   // Build song string
//   var songString = songInput.value + " - by " + artistInput.value + " on the album " + albumInput.value;
//   // Add song to songs array
//   songs.push(songString);
//   // Clear current song list from DOM
//   songDisplayContainer.innerHTML = "";
//   // Reload song list
//   outputSongs();
//   // Go back to listView
//   listMusicPressed();
//   // Clear input fields
//   songInput.value = "";
//   artistInput.value = "";
//   albumInput.value = "";
// }

// =========================== EVENT LISTENERS ============================= //
addMusicButton.addEventListener("click", addMusicPressed);
listMusicButton.addEventListener("click", listMusicPressed);
//addButton.addEventListener("click", addButtonPressed);

