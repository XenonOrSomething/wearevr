


console.log("WE ARE VR!");


  $(document).ready(function() {
    var audio = document.getElementById("tick");
    audio.play();
    $.ajax({
      url: "https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v0001/?appid=1533390", 
      dataType: "json",
      success: function(data) {
        
        var desiredData = data.response.player_count; 
        
        
        console.log(desiredData);
        $("#playercount").html("<p>" + "There is currently " + desiredData + " players online on Steam alone!" + "</p>");
      },
      error: function() {
        
        $("#playercount").html("<p>Error loading player count</p>");
      }
    });
  
  })



