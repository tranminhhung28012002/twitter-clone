import styles from './Slidebar.module.scss'
import search from '../icon/search.svg';
import avatar from '../icon/avatar-default.png'
import { useLocation } from 'react-router-dom';

// có node mấy cái đổ dữ liệu ở dưới 
interface SlidebarTren{
    hastag : string;
    comment: string;
    user: string;
    email : string;
    titlehastag:string;
}
interface SlidebarProps {
    currentPage?: string;
  }

export default function Slidebar({currentPage}:SlidebarProps){    
    const location = useLocation();
    const isExplorePage = location.pathname === '/' || currentPage === 'Explore';
    const isPrenium = location.pathname === '/' || currentPage === 'homepage';
    
    return (
        <div className={styles.Slidebar}> 
            {!isExplorePage && (
                <>
            <div className={styles.Slidebar__Search}>
                <img className={styles.Slidebar__iconSearch} src={search} alt="" />
                <input className={styles.Slidebar__Searchcmt} type="text" placeholder='Search' />
            </div>
            <div className={`${styles.Slidebar__Trending} ${styles.Slidebar__block}`}>
            <h2 className={styles.Slidebar__title}>Trends for you</h2>
            <div className={styles.Slidebar__item}>
                <div>
                    <p className={styles.Slidebar__titlehastag}>Trending in VietNam</p>
                    <h6 className={styles.Slidebar__hastag}>#Test</h6>
                    <span className={styles.Slidebar__rate}>26k post</span>
                </div>
                <a href="#" className={styles.Slidebar__more}>...</a>
            </div>
            <div className={styles.Slidebar__item}>
                <div>
                    <p className={styles.Slidebar__titlehastag}>Trending in VietNam</p>
                    <h6 className={styles.Slidebar__hastag}>#Test</h6>
                    <span className={styles.Slidebar__rate}>26k post</span>
                </div>
                <a href="#" className={styles.Slidebar__more}>...</a>
            </div>
            <div className={styles.Slidebar__item}>
                <div>
                    <p className={styles.Slidebar__titlehastag}>Trending in VietNam</p>
                    <h6 className={styles.Slidebar__hastag}>#Test</h6>
                    <span className={styles.Slidebar__rate}>26k post</span>
                </div>
                <a href="#" className={styles.Slidebar__more}>...</a>
            </div>
            <div className={styles.Slidebar__item}>
                <div>
                    <p className={styles.Slidebar__titlehastag}>Trending in VietNam</p>
                    <h6 className={styles.Slidebar__hastag}>#Test</h6>
                    <span className={styles.Slidebar__rate}>26k post</span>
                </div>
                <a href="#" className={styles.Slidebar__more}>...</a>
            </div>
            <div className={styles.Slidebar__item}>
                <div>
                    {/* đổ dữ liệu lại thành {title_hastag} trong data */}
                    <p className={styles.Slidebar__titlehastag}>Trending in VietNam</p>
                    {/* đổ dữ liệu lại thành {hastag} trong data */}
                    <h6 className={styles.Slidebar__hastag}>#Test</h6>
                       {/* đổ dữ liệu lại thành {comment,rate} trong data */}
                    <span className={styles.Slidebar__rate}>26k post</span>
                </div>
                <a href="#" className={styles.Slidebar__more}>...</a>
            </div>
            <a href="#" className={styles.Slidebar__Show}>Show more</a>
        </div>
        </>
            )}
            {isPrenium && (    
            <div className={`${styles.Slidebar__Premium} ${styles.Slidebar__block}`}>
                <h2 className={styles.Slidebar__title}>Subscribe to Premium</h2>
                <p className={styles.Slidebar__desc}>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <button className={styles.Slidebar__sub}>Subscribe</button>
            </div>
            
            )} 
         
            
            
             {/* Đổ dữ liệu Follow vào đây */}
            <div className={`${styles.Slidebar__Wfollow} ${styles.Slidebar__block}`}>
                <h2 className={styles.Slidebar__title}>Who to follow</h2>
                <div className={styles.Slidebar__followUser}>
                    <div className={styles.Slidebar__user}>
                        <img className={styles.Slidebar__avatar} src={avatar} alt="#" />
                        <div>
                        {/* đổi lại thành {userName} trong data */}
                            <h3 className={styles.Slidebar__name}>Pham Van Tu</h3> 
                             {/* đổi lại thành {userEmail} trong data */}
                            <p className={styles.Slidebar__email}>@tu1234</p>
                        </div>
                    </div>
                    <button className={styles.Slidebar__follow}>Follow</button>
                </div>
                <div className={styles.Slidebar__followUser}>
                    <div className={styles.Slidebar__user}>
                        <img className={styles.Slidebar__avatar} src={avatar} alt="#" />
                        <div>
                            <h3 className={styles.Slidebar__name}>Nguyen Trung Hung</h3>
                            <p className={styles.Slidebar__email}>@Hung1234</p>
                        </div>
                    </div>
                    <button className={styles.Slidebar__follow}>Follow</button>
                </div>
                <div className={styles.Slidebar__followUser}>
                    <div className={styles.Slidebar__user}>
                        <img className={styles.Slidebar__avatar} src={avatar} alt="#" />
                        <div>
                            <h3 className={styles.Slidebar__name}>Tran Minh Hung</h3>
                            <p className={styles.Slidebar__email}>@hung2801</p>
                        </div>
                    </div>
                    <button className={styles.Slidebar__follow}>Follow</button>
                </div>
                <a href="#" className={styles.Slidebar__Show}>Show more</a>
            </div>
        </div>
    )
}

