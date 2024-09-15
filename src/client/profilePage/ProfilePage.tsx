import { IoMdArrowRoundBack } from 'react-icons/io';
import Navbar from '../homepage/navbar';
import styles from './ProfilePage.module.scss';
import { FaBellSlash, FaCalendarAlt, FaEnvelope, FaLink, FaMapMarkerAlt, FaRegBell, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import avatar from '../homepage/icon/avatar-default.png';
import { useNavigate } from 'react-router-dom';
import Slidebar from '../homepage/slidebar';
import { LuMoreHorizontal } from 'react-icons/lu';
import Tab from '../tab';
interface UserProfile {
    id: string;
    name: string;
    username: string;
    website: string;
    joinDate: string;
    followersCount: number;
    followingCount: number;
    avatarUrl: string;
    bannerUrl: string;
    bio: string;
    location: string;
    birthDate: string;
  }
export default function ProfilePage(){
    const [profile, setProfile] = useState<UserProfile>({
        id: '1',
        name: 'pham van tu',
        username: 'phamvantu231293',
        website: 'http:vuighe.net',
        joinDate: 'February 2017',
        followersCount: 100,
        followingCount: 200,
        avatarUrl: avatar,
        bannerUrl: 'https://example.com/banner.jpg',
        bio: 'You’re gonna leave here in a whole lot of pain 😣',
        location: 'Follow my new account',
        birthDate: '',
      });
      const navigate = useNavigate();
      const [Follow , setFollow] = useState(false);
      const handleFollow = () =>{
        setFollow(!Follow);
      }
      const [notify , setNotify] = useState(false);
      const handleNotify = () =>{
        setNotify(!notify);
      }
      
    return (
        <div className={styles.container}>
        <Navbar onPostClick={() => {}}/>
        <div className={styles.profile}>
          <div className={styles.profile__header}>
            <IoMdArrowRoundBack className={styles.profile__backIcon} onClick={() => navigate(-1)} />
            <div>
              <h2 className={styles['profile__header-name']}>{profile.name}</h2>
              <span className={styles.profile__post}>1 post</span>
            </div>
          </div>
            <div className={styles.profile__banner}>
                <img src={profile.bannerUrl}/>
            </div>
            <div className={styles.profile__info}>
                <img src={profile.avatarUrl} alt="Avatar" className={styles.profile__avatar} />
                <h1 className={styles.profile__name}>{profile.name}</h1>
                <p className={styles.profile__username}>@{profile.username}</p>
                {profile.bio && <p className={styles.profile__bio}>{profile.bio}</p>}
                <div className={styles.profile__details}>
                  {profile.location && <span><FaMapMarkerAlt /> {profile.location}</span>}
                  {profile.website && <span><FaLink /> <a href={profile.website}>{profile.website}</a></span>}
                  <span><FaCalendarAlt /> Joined {profile.joinDate}</span>
                </div>
                <div className={styles.profile__followCounts}>
                  <span><strong>{profile.followingCount}</strong> Following</span>
                  <span><strong>{profile.followersCount}</strong> Followers</span>
                </div>
                <div className={styles.profile__nav}>
                <div className={styles.profile__iconWrappter}>
                  <LuMoreHorizontal className={styles.profile__icon}/>
                  <span className={styles.profile__tooltip}>More</span>
                </div>
                <div className={styles.profile__iconWrappter}>
                <FaEnvelope className={styles.profile__icon}/> 
                  <span className={styles.profile__tooltip}>Message</span>
                </div>
                {Follow &&(
                    <div className={styles.profile__iconWrappter} onClick={handleNotify}>
                        {notify ?(
                            <div>
                                <FaRegBell className={styles.profile__icon}/>
                                <span className={styles.profile__tooltip}>Notify</span>
                            </div>
                        ):
                        (
                            <div>
                                <FaBellSlash className={styles.profile__icon}/>
                                <span className={styles.profile__tooltip}>Turn off Notify</span>
                            </div>
                        )}
                    </div>
                )}
                <button className={styles.profile__follow} onClick={handleFollow}>
                    {Follow ? 'UnFollow' : 'Follow'}
                </button>              
                </div>
            </div>
            <Tab/>
        </div>
        <Slidebar />
      </div>
    )
}