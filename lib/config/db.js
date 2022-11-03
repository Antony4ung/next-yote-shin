import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
	const client = await MongoClient.connect('mongodb+srv://aungmyatthu:aungmyatthu@cluster0.gp8km.mongodb.net/?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	return client;
}
