// =========================== SETUP ============================= //

// Songs array
var songs = [];

// =========================== LOAD FIRST LIST ============================= //

var firstList = $.ajax( "../json/songList.json" )
  .done(function() {
    var songData = JSON.parse(firstList.responseText);
    // Output songs for first list
    outputSongs(songData, 1);
  });

// =========================== FUNCTIONS ============================= //

function deleteButtonPressed() {
  // Get card element and remove
  $(event.target.parentNode).remove();
}

function moreButtonPressed() {

  var secondList = $.ajax( "../json/songList2.json" )
  .done(function() {
    var songData = JSON.parse(secondList.responseText);
    // Output songs for first list
    outputSongs(songData, 2);
  });

}

function outputSongs(songData, listNumber) {

  // Check which list is being loaded
  if (listNumber === 1) {

    // Loop through each song
    for (let i = 0; i < songData.songs.length; i++) {

      // Get currentSong being looked at
      let currentSong = songData.songs[i];

      // Create song card container
      let songCard = $('<div class="songCard"></div>');
      // Create song card html
      songCard.html(`<p class="songInformation">${currentSong.title} - ${currentSong.artist} - ${currentSong.album}</p>`);
      // Create delete button
      let deleteButton = $('<button class="deleteButton">Delete</button>');
      // Add delete button to songCard
      songCard.append(deleteButton);
      // Add event listener to delete button
      deleteButton.click(deleteButtonPressed);
      // Append entire songCard to songDisplayContainer
      $('#songOutput').append(songCard);
    
    }

    // When first list is done being added to DOM, add more button
    // Create more button
    let moreButton = $('<button id="moreButton">More</button>')
    // Add event listener to more button
    moreButton.click(moreButtonPressed);
    // Append to songDisplayContainer
    $('#songOutput').append(moreButton);


  } else if (listNumber === 2) {

    // First remove moreButton
    $('#moreButon').remove();

    // Loop through each song
    for (let i = 0; i < songData.songs.length; i++) {

      // Get currentSong being looked at
      let currentSong = songData.songs[i];

      // Create song card container
      let songCard = $('<div class="songCard"></div>');
      // Create song card html
      songCard.html(`<p class="songInformation">${currentSong.title} - ${currentSong.artist} - ${currentSong.album}</p>`);
      // Create delete button
      let deleteButton = $('<button class="deleteButton">Delete</button>');
      // Add delete button to songCard
      songCard.append(deleteButton);
      // Add event listener to delete button
      deleteButton.click(deleteButtonPressed);
      // Append entire songCard to songDisplayContainer
      $('#songOutput').append(songCard);
    
    }
    
  }

}

// Add music button pressed
function addMusicPressed() {
  // Hide List View
  $('#listMusicView').addClass("hidden");
  // Remove hidden class from addMusicView, so it is showing
  $('#addMusicView').removeClass("hidden");
  // Set focus on text input
  songInput.focus();
}

// List view button pressed
function listMusicPressed() {
  // Hide Add Music View
  $('#addMusicView').addClass("hidden");
  // Remove hidden class from listMusicView, so it is showing
  $('#listMusicView').removeClass("hidden");
}


// =========================== EVENT LISTENERS ============================= //
$('#addMusicButton').click(addMusicPressed);
$('#listMusicButton').click(listMusicPressed);

