

const API_BASE_URL = 'https://api.twitter.com/2/tweets/search/recent'; // Ví dụ URL của Twitter API

interface Tweet {
    id: string;
    text: string;
    author_id: string;
    created_at: string;
}

export async function fetchTweets(searchQuery: string): Promise<Tweet[]> {
    try {
        const response = await fetch(`${API_BASE_URL}?query=${encodeURIComponent(searchQuery)}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.BEARER_TOKEN}`, // Thay thế Bearer Token thực tế của bạn
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
