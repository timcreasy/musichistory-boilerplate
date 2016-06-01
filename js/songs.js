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

// =========================== GLOBAL VARS ============================= //

// Songs array
var songs = [];

// =========================== DEFAULT SONGS ============================= //

// Add songs to songs array
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Add song to beginning of array
songs.unshift("Girlfriend Is Better - by Talking Heads on the album Stop Making Sense");
// Add song to end of array
songs.push("Time - by Pink Floyd on the album The Dark Side of The Moon");

// Output initial songs
outputSongs();

// =========================== FUNCTIONS ============================= //

function outputSongs() {

  // Loop over array, removing any charachters that don't belong
  for (var i = 0; i < songs.length; i++) {
    // Current song being looked at
    var currentSong = songs[i];

    // Get rid of all astericks
    currentSong = currentSong.replace(/[*@!(]/g, '');
    // Replace > with -
    currentSong = currentSong.replace(/[>]/g, '-');
    // Store formatted song back in array
    songs[i] = currentSong;

    songDisplayContainer.innerHTML += `<p>${currentSong}</p>`;
  }

}

function addMusicPressed() {
  listMusicView.classList.add("hidden");
  addMusicView.classList.remove("hidden");
  songInput.focus();
}

function listMusicPressed() {
  addMusicView.classList.add("hidden");
  listMusicView.classList.remove("hidden");
}

function addButtonPressed() {
  // Build song string
  var songString = songInput.value + " - by " + artistInput.value + " on the album " + albumInput.value;
  // Add song to songs array
  songs.push(songString);
  // Clear current song list from DOM
  songDisplayContainer.innerHTML = "";
  // Reload song list
  outputSongs();
  // Go back to listView
  listMusicPressed();
  // Clear input fields
  songInput.value = "";
  artistInput.value = "";
  albumInput.value = "";
}

// =========================== EVENT LISTENERS ============================= //
addMusicButton.addEventListener("click", addMusicPressed);
listMusicButton.addEventListener("click", listMusicPressed);
addButton.addEventListener("click", addButtonPressed);

