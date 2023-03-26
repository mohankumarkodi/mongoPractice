const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://naidu:naidu.kotha%4016@practicecluster.cufhm4n.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    try {
      const database = client.db('Recykal');
      const students = database.collection('student');

    //   await students.drop();
    
      const query = { _id: 1, name: 'Naidu', age: 25 };
      const res = await students.insertOne(query);
      const res1 = await students.findOne({_id: 1});
      console.log(res1);
      const res2 = students.find();
      console.log(await res2.toArray());

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);