// Default songs

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Add song to beginning of array
songs.unshift("Girlfriend Is Better - by Talking Heads on the album Stop Making Sense");
// Add song to end of array
songs.push("Time - by Pink Floyd on the album The Dark Side of The Moon");

// Get DOM element to add songs to
var display = document.getElementById("songOutput");

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

  display.innerHTML += `<p>${currentSong}</p>`;
}