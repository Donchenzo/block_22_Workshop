async function fetchingData() {
    try {
        let response = await fetch("https://dummyjson.com/products");

        let translatedData = await response.json();
        console.log(translatedData)

        let completeOutput = translatedData.products
        console.log (completeOutput)
        return completeOutput

    } catch (error) {
        console.error (error);

    }
}



async function renderData() {
    let completeData = document.getElementById("products-container")


    let myResults = await fetchingData();
    console.log(myResults)

    for(let i = 0; i < myResults.length; i++){
        
        let update = myResults[i];
        console.log (update)
        let newUpdateResults = document.createElement("p");

        newUpdateResults.innerText = update.title;
        newUpdateResults.style.border = "2px solid black"

        completeData.appendChild(newUpdateResults)
    }
}

renderData();