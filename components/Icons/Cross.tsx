import React from 'react';

interface CrossIconProps {
  className?: string;
  onClick?: () => void;
}

export const CrossIcon: React.FC<CrossIconProps> = ({ className, onClick }) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="612.043px" height="612.043px" viewBox="0 0 612.043 612.043" className={className} onClick={onClick}>
      <path d="M397.503,306.011l195.577-195.577c25.27-25.269,25.27-66.213,0-91.482c-25.269-25.269-66.213-25.269-91.481,0
				L306.022,214.551L110.445,18.974c-25.269-25.269-66.213-25.269-91.482,0s-25.269,66.213,0,91.482L214.54,306.033L18.963,501.61
				c-25.269,25.269-25.269,66.213,0,91.481c25.269,25.27,66.213,25.27,91.482,0l195.577-195.576l195.577,195.576
				c25.269,25.27,66.213,25.27,91.481,0c25.27-25.269,25.27-66.213,0-91.481L397.503,306.011z"/>
    </svg>);
};