import { useEffect, useState } from 'react';
import styles from './TrendingTopics.module.scss';
import { title } from 'process';

interface TrendingTopicsProps {
    topics: {
        id: number;
        title: string;
    }[];
}

export default function TrendingTopics({topics}: TrendingTopicsProps){
   
    const [activeTab, setActiveTab] = useState('for you');
    useEffect(() => {
        setActiveTab('for you');
    }, [topics]);
    if (!topics || topics.length === 0) {
        return null; 
    }
    return(
    <div className={styles.trendingTopics}>
        <div className={styles.trendingTopics__list}>
            {topics.map(topic => 
                <button key={topic.id} className={`${styles.trendingTopics__item} ${activeTab === topic.title.toLowerCase() ? styles['trendingTopics__item--aticle'] : ''}`}
                onClick={() =>setActiveTab(topic.title.toLowerCase())}>
                {topic.title}
                </button>
            )}
        </div>
    </div>
    );
}