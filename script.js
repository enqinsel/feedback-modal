// svg degisimleri

angry.onclick = () => {
    angry.src = "./newimg/red-angry.svg"

    downhearted.src = "./img/downhearted.svg"
    neutral.src = "./img/neutral.svg"
    happy.src = "./img/happy.svg"
    laugh.src = "./img/laugh.svg"
}

downhearted.onclick = () => {
    downhearted.src = "./newimg/orange-downhearted.svg"

    angry.src = "./img/angry.svg"
    neutral.src = "./img/neutral.svg"
    happy.src = "./img/happy.svg"
    laugh.src = "./img/laugh.svg"
}

neutral.onclick = () => {
    neutral.src = "./newimg/yellow-neutral.svg"

    angry.src = "./img/angry.svg"
    downhearted.src = "./img/downhearted.svg"
    happy.src = "./img/happy.svg"
    laugh.src = "./img/laugh.svg"
}

happy.onclick = () => {
    happy.src = "./newimg/lightGreen-happy.svg"

    angry.src = "./img/angry.svg"
    downhearted.src = "./img/downhearted.svg"
    neutral.src = "./img/neutral.svg"
    laugh.src = "./img/laugh.svg"
}

laugh.onclick = () => {
    laugh.src = "./newimg/green-laugh.svg"

    angry.src = "./img/angry.svg"
    downhearted.src = "./img/downhearted.svg"
    neutral.src = "./img/neutral.svg"
    happy.src = "./img/happy.svg"
}

function myFunction() {
    var x = document.getElementById("idcontainer");
    if (x.style.display = "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

exitModal.onclick = () => {
    var x = document.getElementById("idcontainer");
    x.style.display = "none";
}