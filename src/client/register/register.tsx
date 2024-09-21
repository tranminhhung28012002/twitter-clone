import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Register.module.scss';
import btn from '../login/button.module.scss';
import twitter from '../login/img/twitter.jpg';
import * as yup from 'yup';
import avatar from '../login/img/avatar-default.png';
import Toast from '../toast';
// Định nghĩa Props cho component Register
interface RegisterProps {
  showRegister: boolean;
  onClose: () => void;
}

interface FormData{
  email : String
  password : String
  date_of_birth : String
  code : String
  name : String
}


export default function Register({ showRegister, onClose }: RegisterProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  // const schema = yup.object().shape({
  //   name: yup.string().required('Tên là bắt buộc'),
  //   email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  //   date_of_birth: yup.string().required('Ngày sinh là bắt buộc'),
  //   password: yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Mật khẩu là bắt buộc'),
  //   confirm_password: yup.string()
  //     .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không khớp')
  //     .required('Xác nhận mật khẩu là bắt buộc'),
  // });
  const [step, setStep] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const handleNext = () => {
    setStep(prevStep => prevStep + 1);
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    if (step === 1) {
      setShowToast(true);
    } else {
      handleNext();
    }
  });
  const handleCloseToast = () => {
    setShowToast(false);
    handleNext();
  };

  return (
    <div className={`${styles.twitterRegister} ${styles.show}`}>
      <div className={styles.twitterRegister__block}>
      {showToast && <Toast message="Đăng ký thành công!" onClose={handleCloseToast} />}
        {/* Nội dung form */}
        {/* Block create : email,ten,ngaysinh */}
        {step === 1 && (
          <>
           <a className={styles.twitterRegister__close} onClick={onClose}>X</a>
           <img src={twitter} className={styles.twitterRegister__icon} alt="Twitter Icon" />
            <h2 className={`${styles.twitterRegister__heading} ${styles['twitterRegister__heading-mb33']}`}>Tạo tài khoản của bạn</h2>  
            <form className={styles.twitterRegister__form} onSubmit={onSubmit}>
              <input type="text" placeholder="Tên" className={styles.twitterRegister__name} {...register
              ('name',{
                required:{
                  value:true,
                  message: 'Tên là bắt buộc'
                },
                pattern:{
                  value:/[A-Za-z]/,
                  message: 'Tên không được có ký tự đặc biệt'
                }
              } )
              } />
              {<div className={styles.twitterRegister__errors}>{errors.name?.message}</div>}
              
              <input type="text" placeholder="Email" className={styles.twitterRegister__email} {...register('email',{
                required:{
                  value:true,
                  message: 'Email là bắt buộc'
                },
                pattern:{
                  value:/^\S+@\S+\.\S+$/,
                  message:'Email không đúng định dạng'
                }
              })} />
              {<div className={styles.twitterRegister__errors}>{errors.email?.message}</div>}
              <div className={styles.twitterRegister__comment}>
                <h6 className={styles.twitterRegister__title}>Ngày sinh</h6>
                <p className={styles.twitterRegister__desc}>
                  Điều này sẽ không được hiển thị công khai. Xác nhận tuổi của bạn, ngay cả khi tài khoản này dành cho doanh nghiệp, thú cưng hoặc thứ gì khác.
                </p>
              </div>
              <input type="date" className={styles.twitterRegister__date} {...register('date_of_birth',{
                required:{
                  value:true,
                  message: 'Bắt buộc chọn ngày sinh'
                }
              })} />
              {<div className={styles.twitterRegister__errors}>{errors.date_of_birth?.message}</div>}

              <button type="submit" className={`${btn.btn1} ${btn['btn1-mt100']} ${btn.button}`}>
              Tiếp theo
            </button>
            </form>
          </>
        )}
        {/* Block mã xác nhận */}
        {step === 2 && (
          <>
           <a href='#' className={styles.twitterRegister__close} onClick={onClose}>X</a>
           <img src={twitter} className={styles.twitterRegister__icon} alt="Twitter Icon" />
            <h2 className={`${styles.twitterRegister__heading} ${styles['twitterRegister__heading-mb33']}`}>Chúng tôi đã gửi mã cho bạn</h2>  
            <p className={styles.twitterRegister__desc}>Nhập mã xác thực bên dưới</p>
            <form className={styles.twitterRegister__form} onSubmit={onSubmit}>
              <input type="number" placeholder="Mã xác thực" className={styles.twitterRegister__code} {...register('code',{
                //  Phần này chưa rõ cách lấy mã từ email về nghe =))) 
                required:{
                  value:true,
                  message:'Sai mã xác nhận'
                }
              })}/>
              {<div className={styles.twitterRegister__errors}>{errors.code?.message}</div>}
              <a href="#">Bạn không nhận được email?</a>
                 {/* // Như ở trên chưa xử lý đc  */}
              <button type="submit" className={`${btn.btn1} ${btn['btn1-mt300']} ${btn.button}`}>
              Tiếp theo
            </button>
            </form>
          </>
        )}
        {/* Block mật khẩu */}
        {step === 3 && (
          <>
            <img src={twitter} className={styles.twitterRegister__icon} alt="Twitter Icon" />
            <h2 className={styles.twitterRegister__heading}>Chúng tôi đã gửi mã cho bạn</h2>  
            <p className={`${styles.twitterRegister__desc} ${styles['twitterRegister__desc-mb34']}`}>Đảm bảo mật khẩu có 8 ký tự trở lên</p>
            <form className={styles.twitterRegister__form} onSubmit={onSubmit}>
              <input type="password" placeholder="Mật khẩu" className={styles.twitterRegister__code} {...register('password',{
                required:{
                  value: true,
                  message: 'Nhập mật khẩu'
                },
                minLength:{
                  value:8,
                  message: 'Độ dài mật khẩu lớn hơn 8'
                }
              })}/>
              {<div className={styles.twitterRegister__errors}>{errors.password?.message}</div>}
              <p className={styles.twitterRegister__Paragraphs}>
                Khi đăng ký nghĩa là bạn đồng ý với <a href='#'>Điều khoản dịch vụ</a> và <a href='#'>Chính sách riêng tư</a>, bao gồm cả <a href='#'>Hoạt động sử dụng Cookie</a>. X có thể sử dụng thông tin liên hệ của bạn, bao gồm
                địa chỉ email và số điện thoại nhằm các mục đích được nêu trong Chính sách riêng tư, như giữ gìn an toàn tài khoản của bạn và làm cho các dịch vụ của chúng tôi phù hợp hơn với bạn, bao gồm quảng cáo. <a href='#'>Tìm hiểu thêm</a>
                . Những người khác sẽ có thể tìm thấy bạn qua email hoặc số điện thoại khi được cung cấp, trừ phi bạn chọn cách khác <a href='#'>tại đây.</a>
              </p>
            <button type="submit" className={`${btn.btn1} ${btn['btn1-mt26']} ${btn.button}`}>
              Tiếp theo
            </button>
            </form>
           
          </>
        )}
        {step === 4 && (
          <>
            <img src={twitter} className={styles.twitterRegister__icon} alt="Twitter Icon" />
            <h2 className={styles.twitterRegister__heading}>Chọn một ảnh hồ sơ</h2>  
            <p className={`${styles.twitterRegister__desc} ${styles['twitterRegister__desc-mb34']}`}>Có một tấm ảnh selfie yêu thích? Tải lên ngay bây giờ</p>
            <img src={avatar} alt="avatar" className={styles.twitterRegister__avatar} />
            <button type="submit" className={`${btn.btn3} ${btn['btn3-mt19']} ${btn.button}`}>
              Bỏ qua bây giờ
            </button>
          </>
        )}
      </div>
    </div>
  );
}
