import { client, run } from '../../../lib/mongodb';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await run();
            const db = client.db('TSA'); // Replace with your database name
            const showsCollection = db.collection('shows');

            const shows = await showsCollection.find({}).toArray();

            res.status(200).json(shows);
        } catch (error) {
            console.error('Error fetching shows from MongoDB', error);
            res.status(500).json({ message: 'Failed to fetch shows' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
