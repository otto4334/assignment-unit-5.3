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

// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist(newartist){
    let artistArray = []; //a for loop to loop over collection and use  .artist as before
    for (let item of collection){
        if(newartist === item.artist){
            artistArray.push(item);
            return artistArray;
        }
    }
}

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log(findByArtist('Ween'))
// > When testing your functions, write all tests in the JavaScript file!


// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria. 
//     - IF the search object has a `trackName` property, only search for that, ignoring any `artist` or `year` properties.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code!



// ## Assignment Submission
// Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!