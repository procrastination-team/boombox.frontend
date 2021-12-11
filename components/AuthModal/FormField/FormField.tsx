import React, { HTMLInputTypeAttribute } from 'react';
import styles from './FormField.module.css';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: HTMLInputTypeAttribute;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
}) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}
        <input
          type={type}
          className={styles.input}
          value={value}
          onInput={(event) => onChange(event.currentTarget.value)}
        />
      </label>
    </div>
  );
};