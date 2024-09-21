import { useState } from 'react';
import Navbar from '../homepage/navbar';
import Slidebar from '../homepage/slidebar';
import styles from './Search.module.scss';
import ExploreContent from './ExploreContent/ExploreContent';
import TrendingTopics from './TrendingTopics/TrendingTopics';
import ExploreSearch from './ExploreSearch/ExploreSearch';
import { useLocation } from 'react-router-dom';
import ExploreFilter from './SearchFilter/ExploreFilter'; // Import ExploreFilter

export default function Explore() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const [tweets] = useState<any[]>([]); 
    const [loading] = useState<boolean>(false);
    const [trending, setTrending] = useState<string>('Trending');
    const [selectedFilter, setSelectedFilter] = useState<string>('fromAnyone');
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    const topics = [
        { id: 1, title: 'For you' },
        { id: 2, title: 'Trending' },
        { id: 3, title: 'News' },
        { id: 4, title: 'Sport' },
        { id: 5, title: 'Entertainment' }
    ];

    const topicsEnter = [
        { id: 1, title: 'Top' },
        { id: 2, title: 'Latest' },
        { id: 3, title: 'People' },
        { id: 4, title: 'Media' },
        { id: 5, title: 'List' }
    ];

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setTrending('Top');
        setHasSearched(true);
    };

    const handlePostClick = () => {
        console.log('Post clicked');
    };

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter); // Cập nhật bộ lọc đã chọn
        console.log("Selected filter:", filter); // Xử lý bộ lọc đã chọn
    };

    const location = useLocation();
    const isSearch = location.pathname.slice(1);
    
    return (
        <div className={styles.container}>
            <Navbar onPostClick={handlePostClick} />
            <div className={styles.explore}>
                <ExploreSearch 
                    onSearch={handleSearch} 
                    searchHistory={searchHistory} 
                    setSearchHistory={setSearchHistory} 
                    onBack={() => setTrending('Trending')} 
                />
                <TrendingTopics topics={trending === 'Top' ? topicsEnter : topics} />
                <ExploreContent 
                    searchQuery={searchQuery} 
                    tweets={tweets} 
                    loading={loading} 
                    selectedFilter={selectedFilter} 
                /> 
            </div>
            <div>
                {hasSearched && ( 
                    <ExploreFilter 
                        onFilterChange={handleFilterChange} 
                        selectedFilter={selectedFilter} 
                    />
                )}
                <Slidebar currentPage={isSearch} />
            </div>
        </div>
    );
}