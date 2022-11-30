document.addEventListener("DOMContentLoaded", () => {

    //kaart opties
    var kaartArray = [
        {
            name: "bij",
            img: "img/bij.png"
        },
        {
            name: "bij",
            img: "img/bij.png"
        },
        {
            name: "krekel",
            img: "img/krekel.png"
        },
        {
            name: "krekel",
            img: "img/krekel.png"
        },
        {
            name: "libelle",
            img: "img/libelle.png"
        },
        {
            name: "libelle",
            img: "img/libelle.png"
        },
        {
            name: "lieveheersbeestje",
            img: "img/lieveheersbeestje.png"
        },
        {
            name: "lieveheersbeestje",
            img: "img/lieveheersbeestje.png"
        },
        {
            name: "slak",
            img: "img/slak.png"
        },
        {
            name: "slak",
            img: "img/slak.png"
        },
        {
            name: "spin",
            img: "img/spin.png"
        },
        {
            name: "spin",
            img: "img/spin.png"
        },
        {
            name: "vlieg",
            img: "img/vlieg.png"
        },
        {
            name: "vlieg",
            img: "img/vlieg.png"
        },
        {
            name: "vlinder",
            img: "img/vlinder.png"
        },
        {
            name: "vlinder",
            img: "img/vlinder.png"
        }
    ];

    kaartArray.sort(() => 0.5 - Math.random());

    var grid = document.querySelector(".grid");
    var resultaatDisplay = document.querySelector("#resultaat");
    var kaartenGekozen = [];
    var kaartenGekozenID = [];
    var kaartenGewonnen = [];

    //Het bord maken

    function createBoard() {
        for (var i = 0; i < kaartArray.length; i++) {
            var kaart = document.createElement("img");
            kaart.setAttribute("src", "img/card_back.png");
            kaart.setAttribute("data-id", i);
            kaart.addEventListener("click", kaartOmdraaien);
            grid.appendChild(kaart);

        }
    }

    // dubbele kaarten checken

    function kaartDubbelCheck() {
        var kaarten = document.querySelectorAll("img");
        var optieEenID = kaartenGekozenID[0];
        var optieTweeID = kaartenGekozenID[1];
        if (kaartenGekozen[0] === kaartenGekozen[1]) {
            alert("Je vond een zelfde kaart");
            kaarten[optieEenID].setAttribute("src", "img/card_white.png");
            kaarten[optieTweeID].setAttribute("src", "img/card_white.png");
            kaarten[optieEenID].removeEventListener("click", kaartOmdraaien);
            kaarten[optieTweeID].removeEventListener("click", kaartOmdraaien);
            kaartenGewonnen.push(kaartenGekozen);
        } else {
            kaarten[optieEenID].setAttribute("src", "img/card_back.png");
            kaarten[optieTweeID].setAttribute("src", "img/card_back.png");
            alert("Sorry, probeer nog een keer")
        }
        kaartenGekozen = [];
        kaartenGekozenID = [];
        resultaatDisplay.textContent = kaartenGewonnen.length;
        if (kaartenGewonnen.length === kaartArray / 2) {
            resultaatDisplay.textContent = "Proficiat! Je hebt ze allemaal gevonden.";

        }
    }

    // kaart omdraaien
    function kaartOmdraaien() {
        var kaartID = this.getAttribute("data-id");
        kaartenGekozen.push(kaartArray[kaartID].name);
        kaartenGekozenID.push(kaartID);
        this.setAttribute("src", kaartArray[kaartID].img);
        if (kaartenGekozen.length === 2) {
            setTimeout(kaartDubbelCheck, 500)
        }
    }

    createBoard();


})