const apiUrl = "https://animechan.vercel.app/api/quotes"

const container = document.createElement("div")
container.className="container"
document.body.appendChild(container)

const preLoader = document.createElement("div")
preLoader.className="preloader"
document.body.append(preLoader)

const refreshBtn = document.querySelector(".refresh-button")

//Function to get API Data
const fetchData = async function(url){
    try {
        const data = await fetch(url);
        const response = await data.json()
        createAnimeCard(response)
        if(data.status == 200){
            preLoader.style.display = "none"
        } 
    } catch (err){
        console.log(err);
    }
}
fetchData(apiUrl)

//Function to Dynamically Create Anime cards
function createAnimeCard (apiResponse){
    apiResponse.forEach(data => {
        let animeCard = document.createElement("div")
        animeCard.className="card"
        animeCard.innerHTML=`
        <h2 class="anime-name">${data.anime}</h2>
        <p class="quote"><q>${data.quote}</q></p>
        <h5 class="anime-character">-${data.character}</h5>`
        console.log(animeCard);
        container.appendChild(animeCard)
    });
}

//Function to Refresh the Page when button is clicked
refreshBtn.addEventListener("click", (e)=>{
    location.reload()
})
