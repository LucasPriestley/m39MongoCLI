class Movie {
  constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
    // this.newTitle = newTitle;
    // this.newActor = newActor;
  }
  async add(collection) {
    await collection.insertOne(this);
    //need to save 'this' into database
  }
  // async updateOne(collection) {
  //   await collection.updateOne(
  //     {title: this.title}, {$set:{title: this.newTitle, actor: this.newActor}},
  //   );
  // }
  async deleteOne(collection) {
    await collection.deleteOne(this);
  }
}

module.exports = Movie;
