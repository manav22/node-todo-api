//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return	console.log('Unable to connect to mongodb server');
	}

	console.log('Connected to mongodb server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })

	// db.collection('Users').insertOne({
	// 	name: 'Manav Singh',
	// 	age: 27,
	// 	location: 'Anandpur Sahib'
	// }, (err, result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// })

// 	db.collection('Todos').find({_id: new ObjectID('59cb8951b4f9683d7f2a3117')}).toArray().then((docs)=>{
// 		console.log('Todos');
// 		console.log(JSON.stringify(docs, undefined, 2));
// 	}, (err)=>{
// 		console.log('Unable to fetch todos', err);
// 	})

// 	// db.close();
// });

	db.collection('Todos').find().count().then((count)=>{
		console.log(`Todos count: ${count}`);
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err)=>{
		console.log('Unable to fetch todos', err);
	})		

	// db.close();
});
