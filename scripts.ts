console.log("WE ARE VR!");

function parse(str: string, ...args: any[]) {
    let i = 0;

    return str.replace(/%s/g, () => args[i++]);
}

const userAction = async () => {
    try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://data.gorillatag.co.uk/");

        if (response.status === 200) {
            console.log("request was successful");
            const myJson = await response.json();
            console.log(myJson);

            const playerText = `There are currently ${myJson} Players online!`;
            document.getElementById("playercount")!.innerHTML = playerText;
            console.log(playerText);
        } else {
            console.error("Request failed with error code", response.status);
        }
    } catch (error) {
        console.error('Error fetching json:', error);
    }
};

userAction();
