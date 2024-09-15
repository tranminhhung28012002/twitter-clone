import { useState, useEffect } from 'react';
import styles from './ExploreContext.module.scss';
import { fetchTweets } from '../../../utils/http';

interface ExploreContentProps {
    searchQuery: string;
    tweets:Tweet[];
}

interface Tweet {
    id: string;
    text: string;
    author_id: string;
    created_at: string;
}

export default function ExploreContent({ searchQuery }: ExploreContentProps) {
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
                // Gọi API để tìm kiếm tweet dựa trên searchQuery
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

    return (
        <div className={styles.exploreContent}>
            <h1 className={styles.exploreContent__title}>Kết quả tìm kiếm cho "{searchQuery}"</h1>
            {loading ? (
                <p>Đang tải...</p>
            ) : tweets.length > 0 ? (
                <div className={styles.exploreContent__results}>
                    {tweets.map((tweet) => (
                        <div key={tweet.id} className={styles.exploreContent__tweet}>
                            <p>{tweet.text}</p>
                            <small>Author ID: {tweet.author_id}, Created at: {tweet.created_at}</small>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Không tìm thấy tweet nào cho "{searchQuery}"</p>
            )}
        </div>
    );
}