const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const Movie = require("./utils");
const UpdateMovie = require("./utils/update");

const app = async (yargsObj) => {
  const collection = await connection();
  if (yargsObj.create) {
    console.log("C");
    const newMovie = new Movie(yargsObj.title, yargsObj.actor);
    await newMovie.add(collection);
    //add a movie from the terminal into an object and save in database
  } else if (yargsObj.read) {
    console.log("R");
    const result = yargsObj.title
      ? await collection.find({ title: yargsObj.title }).toArray()
      : await collection.find({ actor: yargsObj.actor }).toArray();
    if (result.length === 0 ) {
      console.log("Not found");
    } else {
      console.log(result);
    }

    //list items from database
  } else if (yargsObj.update) {
    console.log("U");
    const update = new UpdateMovie(
      yargsObj.title,
      yargsObj.newTitle,
      yargsObj.newActor
    );
    await update.updateMethod(collection);
    //update one database entry
  } else if (yargsObj.delete) {
    console.log("D");
    const deletes = await collection.deleteOne({ title: yargsObj.title });
    console.log(deletes);
    // deletes.deleteOne(collection);
    //delete one database entry
  } else {
    console.log("Incorrect command");
  }
  await client.close();
};

app(yargs.argv);
