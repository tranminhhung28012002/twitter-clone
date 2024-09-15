import styles from './Navbar.module.scss';

import grok from '../icon/grok.svg';
import { useForm } from 'react-hook-form';
import post from '../icon/post.svg';
import { NavLink, useNavigate ,useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import avatar from '../icon/avatar-default.png';
import { RiTwitterXFill  } from "react-icons/ri";
import { IoMdHome,IoIosSettings } from "react-icons/io";
import { GoHome, GoSearch } from "react-icons/go";
import { FaRegBell ,FaEnvelope,FaRegUser ,FaList, FaSearch, FaBell, FaRegEnvelope, FaUser   } from "react-icons/fa";
import { LuMoreHorizontal } from "react-icons/lu";
import { MdOutlineKeyboardVoice } from "react-icons/md";


interface Navbarinfo {
    name: string;
    email: string;
}
interface NavItem {
    path: string;
    activeIcon: React.ReactNode;
    inactiveIcon: React.ReactNode;
    label: string;
}
interface NavbarProps {
    onPostClick: () => void;
}

export default function Navbar({onPostClick} :NavbarProps) {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<Navbarinfo>();
    const name = watch('name');
    const userEmail = watch('email'); 
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem('userToken');
        navigate("/login");
    }
    const [moreItem , setMoreItem] = useState(false);
    const ToggleMore = () =>{
        setMoreItem(!moreItem);
    }
    const [showLogoutForm,setShowLogout] = useState(false);
    const toggleLogout = () =>{
        setShowLogout(!showLogoutForm);
    }
    const logoutFormRef = useRef<HTMLDivElement>(null);
    const moreItemRef = useRef<HTMLDivElement>(null);
    const handleClickOutside = (event : MouseEvent) => {
        if (logoutFormRef.current && !logoutFormRef.current.contains(event.target as Node)) {
            setShowLogout(false);

        }
        if(moreItemRef.current && !moreItemRef.current.contains(event.target as Node)){
            setMoreItem(false);
        }
    };


    useEffect(() => {
        if (showLogoutForm || moreItem) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showLogoutForm,moreItem]);
    const location = useLocation();
    const navItems: NavItem[] = [
        {
            path: '/homepage',
            activeIcon: <IoMdHome className={styles.navbar__icon} />,
            inactiveIcon: <GoHome className={styles.navbar__icon} />,
            label: 'Home',
        },
        {
            path: '/Explore',
            activeIcon: <FaSearch className={styles.navbar__icon} />,
            inactiveIcon: <GoSearch  className={`${styles.navbar__icon} ${styles.inactive}`} />,
            label: 'Explore',
        },
        {
            path: '/Notifications',
            activeIcon: <FaBell className={styles.navbar__icon} />,
            inactiveIcon: <FaRegBell className={`${styles.navbar__icon} ${styles.inactive}`} />,
            label: 'Notifications',
        },
        {
            path: '/Message',
            activeIcon: <FaEnvelope className={styles.navbar__icon} />,
            inactiveIcon: <FaRegEnvelope className={`${styles.navbar__icon} ${styles.inactive}`} />,
            label: 'Message',
        },
        // {
        //     path: '/Grok',
        //     activeIcon: <IoMdMail className={styles.navbar__icon} />,
        //     inactiveIcon: <IoMdMail className={`${styles.navbar__icon} ${styles.inactive}`} />,
        //     label: 'Grok',
        // },
        {
            path: '/Profile',
            activeIcon: <FaUser className={styles.navbar__icon} />,
            inactiveIcon: <FaRegUser className={`${styles.navbar__icon} ${styles.inactive}`} />,
            label: 'Profile',
        },
        {
            path: '',
            activeIcon: <LuMoreHorizontal className={styles.navbar__icon} />,
            inactiveIcon: <LuMoreHorizontal className={`${styles.navbar__icon} ${styles.inactive}`} />,
            label: 'More',
        },
    ];

    const navMoreItem: NavItem[] = [
        {
            path: '/List',
            activeIcon: <FaList className={styles.navbar__icon} />,
            inactiveIcon: <FaList className={`${styles.navbar__icon} ${styles.inactive}`} />,
            label: 'List',
        },
        {
            path: '/Setting',
            activeIcon: <IoIosSettings className={styles.navbar__icon} />,
            inactiveIcon: <IoIosSettings className={`${styles.navbar__icon} ${styles.inactive}`} />,
            label: 'Setting and privacy',
        },
        {
            path: '/Create',
            activeIcon: <MdOutlineKeyboardVoice className={styles.navbar__icon} />,
            inactiveIcon: <MdOutlineKeyboardVoice className={`${styles.navbar__icon} ${styles.inactive}`} />,
            label: 'Create your Space',
        },
    ];
 
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__list}>
                <div className={styles.navbar__icontitle}>
                    <RiTwitterXFill className={styles.navbar__iconH} />
                </div>
                {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} className={styles.navbar__item} onClick={item.label === 'More' ? ToggleMore : undefined}>
                        {location.pathname === item.path ? item.activeIcon : item.inactiveIcon}
                        <h2 className={styles.navbar__desc}>{item.label}</h2>
                        {moreItem && (
                        <div ref={moreItemRef} className={styles.navbar__moreList}>
                        {navMoreItem.map((item) => (
                            <div className={styles.navbar__item}>
                                {location.pathname === item.path ? item.activeIcon : item.inactiveIcon}
                                <h2 className={styles.navbar__desc}>{item.label}</h2>
                            </div>
                        ))}
                        </div>
                    )}
                </NavLink>
            ))}
                {/* <div className={styles.navbar__item}>
                    <img src={grok} alt="Grok" className={styles.navbar__icon} />
                    <h2 className={styles.navbar__desc}>Grok</h2>
                </div> */}


                   
                <button className={styles.navbar__button} onClick={onPostClick}>
                    <img src={post} alt="#" />
                    <p>Post</p>
                </button>
                <div className={styles.navbar__user} onClick={toggleLogout}>
                    <img src={avatar} onClick={toggleLogout} className={styles.navbar__img} />
                    <div className={styles.navbar__userinfo}>
                        <span className={styles.navbar__userName}>{name || "User Name"}</span>
                        <span className={styles.navbar__userEmail}>{userEmail || "user@example.com"}</span>
                    </div>
                    <a href='#' className={styles.navbar__useradd}>...</a>
                    {showLogoutForm && (
                        <div ref={logoutFormRef} className={styles.navbar__logoutForm}>
                            <button className={styles.navbar__addaccount}>Add an exists account</button>
                            <button className={styles.navbar__logout} onClick={handleLogout}>Log out {userEmail}</button>
                        </div>
                    )}
                </div>
                
            </div>
        </nav>
        

    );
}
