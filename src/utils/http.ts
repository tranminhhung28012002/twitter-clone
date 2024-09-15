const BEARER_TOKEN = process.env.REACT_APP_TWITTER_BEARER_TOKEN; // Nếu bạn có Bearer Token
const API_BASE_URL = 'https://api.x.com/2';

interface Tweet {
    id: string;
    text: string;
    author_id: string;
    created_at: string;
}

export async function fetchTweets(searchQuery: string): Promise<Tweet[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/tweets/search/recent?query=${encodeURIComponent(searchQuery)}&tweet.fields=author_id,created_at,text`, {
            headers: {
                'Authorization': `Bearer ${BEARER_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error('Error fetching tweets:', error);
        throw error;
    }
}