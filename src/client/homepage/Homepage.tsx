import React, { useState } from 'react';
import styles from './Homepage.module.scss';
import Navbar from './navbar';
import Slidebar from './slidebar';
import avatar from './icon/avatar-default.png';
import earth from './icon/earth.svg';
import AutoResizeTextarea from './AutoResizeTextarea/Textarea';
import { FaList } from "react-icons/fa";
import { MdInsertEmoticon, MdDateRange, MdOutlineGifBox } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import Article from './article';
import imgtest from './icon/imgtest.jpeg';
import Following from './following';
import ForYouContent from './Foryou';
import { useLocation } from 'react-router-dom';
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
  }
export default function Homepage() {
    const [activeTab, setActiveTab] = useState('forYou');
    const [text, setText] = useState<string>('');
    const [modalText, setModalText] = useState<string>('');
    const [showPostForm, setShowPostForm] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedFileUrl, setSelectedFileUrl] = useState<string | null>(null);
    const [newUserPost, setNewUserPost] = useState<Post | null>(null);
    const [postImage, setPostImage] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleFormChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setModalText(event.target.value);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const imageUrl = URL.createObjectURL(file);
            setSelectedFileUrl(imageUrl);
            setPostImage(imageUrl);
        }
    };

    const triggerFileInput = () => {
        const fileInput = document.getElementById('fileInput') as HTMLInputElement | null;
        if (fileInput) {
            fileInput.click();
        }
    };

    const handlePostClick = () => {
        setShowPostForm(true);
    };
    
    const handleClose = () => {
        setShowPostForm(false);
        setModalText('');
        setSelectedFile(null);
        setSelectedFileUrl(null);
        setPostImage(null);
    };
    const handleSubmitPost = () => {
        if (text || modalText || selectedFile) {
            const newPost: Post = {
                id: Date.now().toString(),
                status: modalText || text,
                imageUserName: avatar,
                userEmail: "user@example.com",
                name: "User Name",
                reply: 0,
                repost: 0,
                like: 0,
                view: 0,
                imageUrl: postImage || undefined,
            };

            console.log('Đang đăng bài:', newPost);
            setNewUserPost(newPost);

            setText('');
            setModalText('');
            setSelectedFile(null);
            setSelectedFileUrl(null);
            setPostImage(null);
        } else {
            alert('Vui lòng thêm nội dung hoặc chọn một hình ảnh!');
        }
        handleClose();
    };
    const location = useLocation();
    const isHomePage = location.pathname.slice(1);
    return (
        <div className={styles.HomepageContainer}>
            <Navbar  onPostClick={() => {}}/>
            <div className={styles.Homepage}>
                <div className={styles.Homepage__header}>
                    <div
                        className={`${styles.Homepage__act1} ${activeTab === 'forYou' ? styles.active : ''}`}
                        onClick={() => setActiveTab('forYou')}
                    >
                        <h3 className={styles.Homepage__title}>For you</h3>
                    </div>
                    <div
                        className={`${styles.Homepage__act2} ${activeTab === 'following' ? styles.active : ''}`}
                        onClick={() => setActiveTab('following')}
                    >
                        <h3 className={styles.Homepage__title}>Following</h3>
                    </div>
                </div>
                <div className={styles.Homepage__content}>
                    <div className={styles.Homepage__post}>
                        <img src={avatar} alt="Avatar" className={styles.Homepage__avatar} />
                        <div className={styles.Homepage__postbtn}>
                            <AutoResizeTextarea
                                value={text}
                                onChange={handleChange}
                                placeholder="What is happening"
                            />
                            <div className={styles.Homepage__every}>
                                <img src={earth} alt="Earth" />
                                <p className={styles.Homepage__every__reply}>Everyone can reply</p>
                            </div>
                            <div className={styles.Homepage__toolbar}>
                                <ul className={styles.Homepage__list}>
                                    <li>
                                        <CiImageOn className={styles.Homepage__item} onClick={triggerFileInput} />
                                        <input
                                            id="fileInput"
                                            type="file"
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}
                                        />
                                    </li>
                                    <li> <MdOutlineGifBox className={styles.Homepage__item} onClick={triggerFileInput} /></li>
                                    <li> <FaList className={styles.Homepage__item} /></li>
                                    <li> <MdInsertEmoticon className={styles.Homepage__item} /></li>
                                    <li> <MdDateRange className={styles.Homepage__item} /></li>
                                    <li> <IoLocationOutline className={styles.Homepage__item} /></li>
                                </ul>
                                <button className={styles.Homepage__btn} onClick={handleSubmitPost}>Post</button>
                            </div>
                        </div>
                    </div>
                    {selectedFileUrl && (
                        <div className={styles.selectedImageContainer}>
                            <img src={selectedFileUrl} alt="Selected" className={styles.selectedImage} />
                        </div>
                    )}
                    {showPostForm && (
                        <div className={styles.show}>
                            <div className={`${styles.Homepage__postForm}`}>
                                <div className={styles.Homepage__postbtn}>
                                    <a className={styles.Homepage__postClose} href="#" onClick={handleClose}>X</a>
                                    <div className={styles.Homepage__postInfo}>
                                        <img src={avatar} alt="Avatar" className={styles.Homepage__avatar} />
                                        <AutoResizeTextarea
                                            value={modalText}
                                            onChange={handleFormChange}
                                            placeholder="What is happening"
                                        />
                                    </div>
                                    <div className={styles.Homepage__every}>
                                        <img src={earth} alt="Earth" />
                                        <p className={styles.Homepage__every__reply}>Everyone can reply</p>
                                    </div>
                                    <div className={styles.Homepage__toolbar}>
                                        <ul className={styles.Homepage__list}>
                                            <li> <CiImageOn className={styles.Homepage__item} />
                                            <input
                                                id="fileInput"
                                                type="file"
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                onChange={handleFileChange}
                                                />
                                            </li>
                                            <li> <MdOutlineGifBox className={styles.Homepage__item} onClick={triggerFileInput} /></li>
                                            <li> <FaList className={styles.Homepage__item} /></li>
                                            <li> <MdInsertEmoticon className={styles.Homepage__item} /></li>
                                            <li> <MdDateRange className={styles.Homepage__item} /></li>
                                            <li> <IoLocationOutline className={styles.Homepage__item} /></li>
                                        </ul>
                                        <button className={styles.Homepage__btn} onClick={handleSubmitPost}>Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <Article 
                    id='123'
                    name='asd'
                    userEmail ='sadfwec'    
                    status = 'fsadfsdfwecfwdfascfc'    
                    imageUrl={imgtest}
                    reply={3}
                    like={5}
                    view={100}
                    repost={50}
                    imageUserName={avatar}
                    />
                </div>
                {activeTab === 'forYou' ? (
                        <ForYouContent newUserPost={newUserPost} />
                    ) : (
                         // from Following
                        <Following />
                    )}
            </div>
            <Slidebar currentPage={isHomePage} />
        </div>
    );
}
