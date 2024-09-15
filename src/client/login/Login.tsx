import React, { useState } from "react";
import styles from "./Login.module.scss";
import google from './icon/google.png';
import apple from './icon/apple.png';
import twitter from './img/twitter.jpg';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import btn from './button.module.scss';
import Register from "../register/register";
import { toast, ToastContainer } from 'react-toastify';
import axios, { AxiosError } from "axios";
// import http from "../../utils/http";

interface LoginFormInputs {
    email: string;
    password: string;
}

export default function LoginComponent() {
  
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [showCreate, setShowCreate] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const [showRegister, setShowRegister] = useState<boolean>(false);

    const handleNext = () => {
        setStep(prevStep => prevStep + 1);
    };

    const handleLoginClose = () => {
        setShowCreate(false);
        setStep(1);
    };

    const handleRegisterClick = () => {
        setShowRegister(true);
    };

    const { register, handleSubmit, formState: { errors },clearErrors  } = useForm<LoginFormInputs>();
    const [loginError, setLoginError] = useState<string | null>(null);
    
    const handleLogin = (data: LoginFormInputs) => {
        if (data.email === 'himden9999@gmail.com' && data.password === '123123') {
            navigate('/homepage');
        }else if(data.password ===''){
            setLoginError('Nhập mật khẩu');
        }
        else {
            setLoginError('Email hoặc mật khẩu không chính xác.');
        }
    };
    // const handleLogin = async (data: LoginFormInputs) => {
    //     try {
    //         const response = await axios.post('/login.json', {
    //             email: data.email,
    //             password: data.password
    //         });
                     
    //         if (response.data.success) {
    //             toast.success('Đăng nhập thành công!');
    //             navigate('/homepage');
    //         } else {
    //             setLoginError('Email hoặc mật khẩu không chính xác.');
    //         }
    //     } catch (error) {
    //         if (error instanceof AxiosError) {
    //             if (error.response) {
    //                 // Lỗi từ server
    //                 setLoginError(error.response.data.message || 'Email hoặc mật khẩu không chính xác.');
    //             } else if (error.request) {
    //                 // Lỗi không nhận được response
    //                 setLoginError('Không thể kết nối đến server. Vui lòng thử lại sau.');
    //             } else {
    //                 // Lỗi khác
    //                 setLoginError('Có lỗi xảy ra. Vui lòng thử lại sau.');
    //             }
    //         } else {
    //             setLoginError('Có lỗi xảy ra. Vui lòng thử lại sau.');
    //         }
    //         console.error('Lỗi đăng nhập:', error);
    //     }
    // };
    // const handleInputChange = () => {
    //     setLoginError(null);
    //     clearErrors();
    // };

    return (
        <>
            <div className={styles.containertwitter}>
                <div className={styles.login}>
                    <div className={styles.twitterlogin}>
                        <div className={styles.twitterlogin__left}>
                            <img src={twitter} className={styles.twitterlogin__img} alt="" />
                        </div>
                        <div className={styles.twitterlogin__right}>
                            <h1 className={styles.twitterlogin__heading}>Đang diễn ra ngay bây giờ</h1>
                            <p className={styles.twitterlogin__desc}>Tham gia ngay.</p>
                            <div className={styles.twitterlogin__form}>
                                <button className={`${btn.btn1} ${btn['btn1-mt5']} ${btn.button}`}>
                                    <img src={google} className={styles.twitterlogin__icon} alt="" />
                                    Đăng ký bằng Gmail
                                </button>
                                <button className={`${btn.btn1} ${btn['btn1-mt5']} ${btn.button}`}>
                                    <img src={apple} alt="" className={styles.twitterlogin__icon} />
                                    Đăng ký bằng Apple
                                </button>
                                <div className={styles.twitterlogin__script}>
                                    <span className={styles.twitterlogin__block}></span>
                                    <p>hoặc</p>
                                    <span className={styles.twitterlogin__block}></span>
                                </div>
                                <button className={`${btn.btn2} ${btn['btn2-mt8']} ${btn.button}`} onClick={handleRegisterClick}>
                                    Tạo tài khoản
                                </button>
                                <div className={styles.twitterlogin__request}>
                                    <p>Khi đăng ký, bạn đã đồng ý với <span>Điều khoản Dịch vụ</span> và <span>Chính sách Quyền riêng tư</span>, gồm cả <span>Sử dụng Cookie</span>.</p>
                                </div>
                                <div className={styles.twitterlogin__ask}>
                                    Đã có tài khoản?
                                </div>
                                <button className={`${btn.btn3} ${btn['btn3-mt21']} ${btn.button}`} onClick={() => setShowCreate(true)}>
                                    Đăng nhập
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showCreate && (
                <div className={`${styles.twittercreate} ${styles.show}`}>
                    <div className={styles.twittercreate__block}>
                        <div className={styles.twittercreate__on}>
                            <a className={styles.twittercreate__close} onClick={handleLoginClose}>X</a>
                            <img src={twitter} className={styles.twittercreate__icon} alt="" />
                            <span></span>
                        </div>

                        {step === 1 && (
                            <form onSubmit={handleSubmit(handleNext)}>
                                <h2 className={styles.twitterlogin__desc}>Đăng nhập vào X</h2>
                                <button className={`${btn.btn1}  ${btn.button}`}>
                                    <img src={google} className={styles.twitterlogin__icon} alt="" />
                                    Đăng ký bằng Gmail
                                </button>
                                <button className={`${btn.btn1} ${btn['btn1-mt30']} ${btn.button}`}>
                                    <img src={apple} alt="" className={styles.twitterlogin__icon} />
                                    Đăng ký bằng Apple
                                </button>
                                <div className={styles.twitterlogin__script}>
                                    <span className={styles.twitterlogin__block}></span>
                                    <p>hoặc</p>
                                    <span className={styles.twitterlogin__block}></span>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Số điện thoại, email hoặc tên người dùng"
                                        className={styles.twittercreate__textsc}
                                        {...register('email', { required: true })}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    
                                </div>
                                <button type="submit" className={`${btn.btn1} ${btn['btn1-mt30']} ${btn.button}`}>
                                    Tiếp theo
                                </button>
                                <button className={`${btn.btn3} ${btn['btn3-mt26']} ${btn.button}`}>
                                    Quên mật khẩu
                                </button>
                                <p className={`${styles.twittercreate__desc} ${styles['twittercreate__desc-mt21']}`}>Không có tài khoản?<a href="#">Đăng ký</a></p>
                            </form>
                        )}
                        {step === 2 && (
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className={styles.twitterlogin__input}>
                                    <h2 className={styles.twitterlogin__enter}>Nhập mật khẩu của bạn</h2>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        value={email}
                                        readOnly
                                        className={styles.twitterlogin__email}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        className={styles.twitterlogin__password}
                                        {...register('password',)}
                                        
                                       />
                                     
                                     {<div className={styles.twitterlogin__errors}>{loginError}</div>}
                                    <a href="#" className={styles.twitterlogin__forgot}>quên mật khẩu</a>
                                    <button type="submit" className={`${btn.btn1} ${btn['btn1-mt222']} ${btn.button}`}>
                                        Đăng nhập
                                    </button>
                                    <p className={`${styles.twittercreate__desc} ${styles['twittercreate__desc-mt22']}`}>Không có tài khoản?<a href="#">Đăng ký</a></p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {showRegister && (
                <Register showRegister={showRegister} onClose={() => setShowRegister(false)} />
            )}

            <ToastContainer />
        </>
    );
}
