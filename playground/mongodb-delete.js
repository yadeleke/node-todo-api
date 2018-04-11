const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    const db = client.db('TodoApp');

    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to MongoDB server.');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    //     console.log(res);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res)
    // })

    // db.collection('Users').deleteMany({name: 'Yinka'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5ace8256a6ae7fc2e5402065')
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2))
    });
    // client.close();
});

