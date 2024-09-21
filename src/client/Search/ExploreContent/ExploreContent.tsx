import { useState, useEffect } from 'react';
import styles from './ExploreContext.module.scss';
import { fetchTweets } from '../../../utils/http';

interface ExploreContentProps {
    searchQuery: string;
    tweets: Tweet[];
    loading: boolean;
    selectedFilter: string;
}

interface Tweet {
    id: string;
    text: string;
    author_id: string;
    created_at: string;
}

export default function ExploreContent({ searchQuery, selectedFilter }: ExploreContentProps) {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getTweets = async () => {
            if (!searchQuery.trim()) {
                setTweets([]);
                return;
            }

            setLoading(true);
            try {
                const fetchedTweets = await fetchTweets(searchQuery);
                setTweets(fetchedTweets);
            } catch (error) {
                console.error('Error in component:', error);
                setTweets([]);
            } finally {
                setLoading(false);
            }
        };

        getTweets();
    }, [searchQuery]);
    const filteredTweets = tweets.filter(tweet => {
        if (selectedFilter === 'peopleYouFollow') {
            return tweet.author_id === 'your_followed_user_id'; 
        }
        return true;
    });

    return (
        <div className={styles.exploreContent}>
            {loading ? (
                <p>Đang tải...</p>
            ) : filteredTweets.length > 0 ? (
                <div className={styles.exploreContent__results}>
                    {filteredTweets.map((tweet) => (
                        <div key={tweet.id} className={styles.exploreContent__tweet}>
                            <p>{tweet.text}</p>
                            <small>Author ID: {tweet.author_id}, Created at: {tweet.created_at}</small>
                        </div>
                    ))}
                </div>
            ) : (
                <p className={styles.exploreContent__err}>No results for "{searchQuery}"</p>
            )}
        </div>
    );
}