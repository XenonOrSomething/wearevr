


console.log("WE ARE VR!");

function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}




const userAction = async () => {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://data.gorillatag.co.uk/")
    .then(response => {

        if (response.status === 0) {
            console.log("request was successful");
        }else{
            console.error("request failed with error code", response.status)
        }
    })
    .catch(error => {
        console.error('error fetching json:', error);
    })
        ;
     var myJson = await response.json();
    console.log(myJson);
    //balls
  }

userAction()

var playerText = `There is currently ${myJson} Players online!`;

document.getElementById("playercount").innerHTML = playerText;

console.log(playerText)

