import React, { useEffect } from 'react';
import styles from './Toast.module.scss';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Toast sẽ tự động tắt sau 3 giây

    return () => clearTimeout(timer); // Clear timer nếu component bị unmount
  }, [onClose]);

  return (
    <div className={styles.toast}>
      <p>{message}</p>
      <button onClick={onClose} className={styles.toast__close}>
        X
      </button>
    </div>
  );
}