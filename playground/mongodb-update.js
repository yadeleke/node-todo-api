const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    const db = client.db('TodoApp');

    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to MongoDB server.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ace8489a6ae7fc2e54020bd')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false 
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ace85c4a6ae7fc2e54020ff')
    }, {
        $set: {
            name: 'Tola'
        },
        $inc: {
            age: 7
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    
    // client.close();
});

