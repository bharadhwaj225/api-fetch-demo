const fetchAPI = async () => {
    let imageURL = null
    try {
        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await res.json()
        imageURL = data.message        
        console.log(data.message)
    }
    catch (err){
        console.log(err);
        
    }
    
    let image = document.getElementById("image")
    image.src = imageURL
}

changeBtn.addEventListener('click', fetchAPI);