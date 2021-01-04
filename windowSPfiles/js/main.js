//////////////////////
//FUNCTION COMMAND BAR
//////////////////////
function commands() {
  //look for text inside the NEW textbox
  var input = document.getElementById('inputText').value.toLowerCase();
  
  switch(input) {
    case 'pirate':
      window.open("https://www.reddit.com/r/Piracy/");
      break;
    case 'spoti':
      window.open("https://open.spotify.com/");
      break;
     case 'nvidia':
      window.open("https://www.reddit.com/r/nvidia/");
      break;
     case 'drivers':
      window.open("https://www.nvidia.com/Download/Find.aspx");
      break;
     case 'github':
      window.open("https://github.com/DavidRela/");
      break;
     case 'twitter':
      window.open("https://twitter.com/home");
      break; 
     case 'netflix':
      window.open("https://netflix.com/browse");
      break; 
     case 'fa':
      window.open("https://boards.4channel.org/fa/");
      break; 
    default://no keyword detected so we submit the form.
      return true;
      break;
  }
  
  return false; //don't let the form submit
}




/////////////////////////
//FUNCTION RANDOM IMAGE
/////////////////////////
    var images = [
      'img/square01.jpg',
      'img/square02.jpg',
      'img/square03.jpg',
      'img/square04.jpg',
      'img/square05.jpg',
      'img/square06.jpg',
      'img/square07.jpg',
      'img/square08.jpg',
      'img/square09.jpg',
      'img/square10.jpg',
      'img/square11.jpg',
      'img/square12.jpg',
      'img/square13.jpg',
      'img/square14.jpg',
      'img/square15.jpg',
      'img/square16.jpg',
      'img/square17.jpg',
      'img/square18.jpg',
      'img/square19.jpg',
      'img/square20.jpg',
      'img/square21.jpg',
      'img/square22.jpg',
      'img/square23.jpg',
      'img/square24.jpg',
      'img/square25.jpg',
      'img/square26.jpg',
      'img/square27.jpg',
      'img/square28.jpg',
      'img/square29.jpg',
      'img/square30.jpg'
    ];

    var randomImage = Math.floor(Math.random() * 30)

     $(document).ready(function() {
      $(".img-galery").css("background", "url('" + images[randomImage] + "') center center no-repeat");
      $(".img-galery").css("background-size", "cover");
    })
