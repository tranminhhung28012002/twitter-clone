import React, { useRef, useEffect } from 'react';
import styles from './AutoResizeTextarea.module.scss';

interface AutoResizeTextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export default function AutoResizeTextarea({ value, onChange, placeholder }: AutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '24px'; 
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; 
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event);
    adjustHeight();
  };

  return (
    <textarea 
      className={styles.textArea}
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}