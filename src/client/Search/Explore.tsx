import Navbar from '../homepage/navbar';
import Slidebar from '../homepage/slidebar';
import styles from './Search.module.scss';
import { useEffect, useState } from 'react';
import ExploreContent from './ExploreContent/ExploreContent';
import TrendingTopics from './TrendingTopics/TrendingTopics';
import ExploreSearch from './ExploreSearch/ExploreSearch';

interface TrendingTopic {
    id: number;
    title: string;
}

export default function Explore() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [trendingTopics, setTrendingTopics] = useState<TrendingTopic[]>([]);
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    const [loading, setLoading] = useState<boolean>(false); // Thêm trạng thái loading

    useEffect(() => {
        const fetchTrendingTopics = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/trending-topics'); // Gọi API để lấy chủ đề trending
                const data = await response.json();
                setTrendingTopics(data);
            } catch (error) {
                console.error('Error fetching trending topics:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingTopics();
    }, []);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handlePostClick = () => {
        console.log('Post clicked');
    };

    return (
        <div className={styles.container}>
            <Navbar onPostClick={handlePostClick} />
            <div className={styles.explore}>
                <ExploreSearch 
                    onSearch={handleSearch} 
                    searchHistory={searchHistory} 
                    setSearchHistory={setSearchHistory} 
                />
                {loading ? (
                    <p>Loading trending topics...</p> // Hiển thị thông báo loading
                ) : (
                    <TrendingTopics topics={trendingTopics} />
                )}
                <ExploreContent searchQuery={searchQuery} tweets={[]} />
            </div>
            <Slidebar />
        </div> 
    );
}