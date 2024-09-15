import styles from './Following.module.scss';
import { useState, useEffect } from 'react';
import Article from '../article';
interface Post {
    id: string;
    status: string;
    imageUserName: string;
    userEmail: string;
    name: string;
    reply: number;
    repost: number;
    like: number;
    imageUrl?: string;
    videoUrl?: string;
    view: number;
}   
export default function Following() {

    //lấy dữ liệu về các bài đăng từ người mà người dùng đang theo dõi nghe tư.
    const [posts, setPosts] = useState<Post[]>([]); 

    useEffect(() => {
        const fetchFollowingPosts = async () => {
            try {
                const response = await fetch('/api/following-posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Lỗi khi lấy bài đăng:', error);
                setPosts([]);
            }
        };

        fetchFollowingPosts();
    }, []);

    return (
        <div className={styles.following}>
            {posts.length > 0 ? (
                <div className={styles.following__content}>
                    {posts.map((post) => (
                        //cái Article này là cái form của bài post
                        <Article key={post.id} {...post} />
                    ))}
                </div>
            ) : (
                <div className={styles.following__noContent}>
                    <p className={styles['following__noContent-text']}>
                        Bạn chưa theo dõi ai hoặc chưa có bài đăng nào từ người bạn theo dõi.
                    </p>
                </div>
            )}
        </div>
    );
}