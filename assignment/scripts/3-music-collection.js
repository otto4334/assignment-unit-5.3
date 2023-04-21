console.log('***** Music Collection *****')
let collection = []
function addToCollection (title, artist, yearPublished){
    return collection.push(title, artist, yearPublished);
}

const gorillaz = {
    title: 'Gorillaz',
    artist: 'Gorillaz',
    yearPublished: 2001
}

addToCollection(gorillaz)
console.log(collection)