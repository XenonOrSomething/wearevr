


console.log("WE ARE VR!");

function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}


setTimeout(function() {

var response = fetch("https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v0001/?appid=1533390")
    .then(response => response.json()).then(console.log)
    .catch(error => {
        console.error('error fetching json:', error);
    })
        ;
     
     console.log(response);
    setTimeout(9999);
    jsonToObject = JSON.parse(response);
    var playerCount = response.player_count;
    var result = response.result;
    var whythefuckdoesthisnotwork = toString(result)

}, 2000)




var playerText = whythefuckdoesthisnotwork;

document.getElementById("playercount").innerHTML = playerText;

console.log("undefined")

