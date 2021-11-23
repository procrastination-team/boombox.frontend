import React, { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import styles from './AuthModal.module.css';
import { FormField } from './FormField/FormField';

interface AuthModalProps {
  serviceName: string;
  onSubmit: () => void;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  serviceName,
  onSubmit,
  onClose,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, onClose);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} ref={ref}>
        <h3 className={styles.header}>Auth to {serviceName}</h3>
        <div className={styles.fields}>
          <form action=""></form>
          <FormField
            label="Username or email"
            value={username}
            onChange={(value) => setUsername(value)}
          />
          <FormField
            label="Password"
            value={password}
            onChange={(value) => setPassword(value)}
            type="password"
          />
          <button className={styles.submitButton} onClick={(event) => {
            event.preventDefault();

            onSubmit();
          }}>Submit</button>
        </div>
      </div>
    </div>
  );
};