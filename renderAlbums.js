
function renderBands(bands) { // the container
    var bandsHTML = bands.map((currentBand) =>{ // accesing the first index within the object array which just 0 since it is just one artist 
        return renderBand(currentBand) // this is returning a fucntion that i will use later ,  
    })
    return `<div>
                
                ${bandsHTML.join('')} // this is displaying what i want it to look like on my HTML page , basically styling it 
    
            </div>` 
        
}
function renderBand(band) { // i am now defing what i want my contiainer to display at index 0
    var albumsHTML = band.albums.map((currentAlbum) =>{ // i have to access the band and then inside of that band i want to dispaly the album
        return renderAlbum(currentAlbum) // i want to return a new function because i want javascript to access what is inside of that object 

    })
    return `<div>${albumsHTML.join(' ')}</div>` // on the html page join the index together without the commas 
} 

function renderAlbum(album) { // i am telling js to display the songs inside of each album 
    var songsHTML = album.songs.map((currentSong) =>{  
        return renderSongs(currentSong) //
    })
        
    return ` <div class = "album">
          <img  class = "mb-1" width = "50" src = ${album.albumCover}/>
          <h3 class = "d-inline-block">${album.title}</h3>
          ${songsHTML.join('')}
       </div>`
 }
 function renderSongs(song) {
    return `<div class = "song d-flex justify-content-between border-top border-bottom py-3">
             <b>${song.title}</b>
            <span>${song.length}</span>
            </div>`
 }

   

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderBands(albumsAbstraction);

}