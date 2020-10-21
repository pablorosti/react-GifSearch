

export const obtenerGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dLh1B96mdTnJ9eogk5LA67lZPTx7AGXD&limit=10&q=${category}`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img=>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}
