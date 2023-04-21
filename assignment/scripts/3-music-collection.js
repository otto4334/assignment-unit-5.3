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

const clarity = {
    title: 'Zedd',
    artist: 'Clarity',
    yearPublished: 2012
}

const theMollusk = {
    title: 'The Mollusk',
    artist: 'Ween',
    yearPublished: 1997
}

const siameseDream = {
    title: 'Siamese Dream',
    artist: 'Smashing Pumpkins',
    yearPublished: 1993
}

const cowboyBebop = {
    title: 'COWBOY BEBOP',
    artist: 'Seatbelts',
    yearPublished: 1998
}

const moment = {
    title: 'moment',
    artist: 'Vierre Cloud',
    yearPublished: 2019
}

addToCollection(gorillaz)
console.log(collection)