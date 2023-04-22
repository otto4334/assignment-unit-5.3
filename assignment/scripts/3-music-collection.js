console.log('***** Music Collection *****')
let collection = []
function addtoCollection (albumTitle, artistName, yearPublished){
    let newAlbum = {
        title: albumTitle,
        artist: artistName,
        year: yearPublished
    }
    return collection.push(newAlbum), console.log("Added", newAlbum, "to the collection")
}
// addtoCollection is your function, declare it below and fill with new info that correlates to the values you assigned above. IE albumTitle 
addtoCollection('Gorillaz', 'Gorillaz', 2001)
addtoCollection('Zedd', 'Clarity', 2012)
addtoCollection('The Mollusk', 'Ween', 1997)
addtoCollection('Siamese Dream', 'Smashing Pumpkins', 1993)
addtoCollection('COWBOY BEBOP', 'Seatbelts', 1998)
addtoCollection('moment', 'Vierre Cloud', 2019)

console.log(collection)

//showCollection using a looped over array

function showCollection(array){
    console.log(array.length);
    for(let item of array){
        console.log(item.title, "by", item.artist, "published in the year", item.year)
    }
}
showCollection(collection)
