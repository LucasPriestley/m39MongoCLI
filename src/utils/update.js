class UpdateMovie {
    constructor(title, newTitle, newActor) {
      this.title = title;
      this.newTitle = newTitle;
      this.newActor = newActor;
    }
  
    //Checks if you want to update the actor or not
    //Updating title is mandatory
    async updateMethod(collection) {
      this.newActor
        ? await collection.updateOne(
            { title: this.title },
            { $set: { title: this.newTitle, actor: this.newActor } }
          )
        : await collection.updateOne(
            { title: this.title },
            { $set: { title: this.newTitle } }
          );
    }
  }
  
  module.exports = UpdateMovie;