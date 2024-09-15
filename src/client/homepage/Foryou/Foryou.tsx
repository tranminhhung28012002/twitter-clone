import React, { useState, useEffect } from 'react';
import styles from './Foryou.module.scss';
import Article from '../article/Article';

interface Post {
    id: string;
    status: string;
    imageUserName: string;
    userEmail: string;
    name: string;
    reply: number;
    repost: number;
    like: number;
    view: number;
    imageUrl?: string;
    videoUrl?: string;
}

interface ForYouProps {
    newUserPost: Post | null;
}

export default function ForYou({ newUserPost }: ForYouProps) {

     //up dữ liệu bài đăng từ người dùng, t chưa biết cách viết lấy bài đăng đề xuất lên
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchForYouPosts = async () => {
        try {
            const response = await fetch('/api/for-you-posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Lỗi khi lấy bài đăng For You:', error);
            setPosts([]);
        }
    };

    useEffect(() => {
        fetchForYouPosts();

    }, []);

    useEffect(() => {
        if (newUserPost) {
            setPosts(prevPosts => [newUserPost, ...prevPosts]);
        }
    }, [newUserPost]);

    return (
        <div className={styles.forYou}>
            {posts.length > 0 ? (
                <div className={styles.forYou__content}>
                    {posts.map((post) => (
                        <Article key={post.id} {...post} />
                    ))}
                </div>
            ) : (
                <div className={styles.forYou__noContent}>
                    <p className={styles['forYou__noContent-text']}>
                       chưa có bài viết
                    </p>
                </div>
            )}
        </div>
    );
}