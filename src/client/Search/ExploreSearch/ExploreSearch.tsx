import { useState } from "react";

import styles from './ExploreSearch.module.scss';
import { FaSearch } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

interface ExploreSearchProps {
    onSearch: (query: string) => void;
    searchHistory: string[];
    setSearchHistory: (history: string[]) => void;
}

export default function ExploreSearch({ onSearch, searchHistory, setSearchHistory }: ExploreSearchProps) {
    const [query, setQuery] = useState('');
    const [showHistory, setShowHistory] = useState(false);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
    const handleSetting = () => {};
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query) {
            onSearch(query);
            const updatedHistory = [query, ...searchHistory.filter(item => item !== query)].slice(0, 20);
            setSearchHistory(updatedHistory);
            
            setQuery(''); 
        }
    };
    const handleFocus = () => setShowHistory(true);
    const handleBlur = () => {
        setTimeout(() => setShowHistory(false), 200); 
    };
    const handleHistoryClick = (item: string) => {
        setQuery(item);
        onSearch(item);
        setShowHistory(false);
    };
    
    return (
        <>
            <div className={styles.exploreSearch}>
                <form onSubmit={handleSubmit} className={styles.exploreSearch__form}>
                    <FaSearch className={styles.exploreSearch__icon} />
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Tìm kiếm..."
                        className={styles.exploreSearch__input}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </form>
                <IoSettingsOutline className={styles.exploreSearch__settingIcon} onClick={handleSetting} />
            </div>

            {showHistory && query === '' && (
                <ul className={styles.searchHistory}>
                    {searchHistory.map((item, index) => (
                        <li className={styles.searchHistory__item} key={index} onClick={() => handleHistoryClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
