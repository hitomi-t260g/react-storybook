import { useState } from 'react';
import './button.css';
import PropTypes from 'prop-types';


/**
 * Button Component for explanation of StoryBook
 */

function Button({
  children,
  color = 'default',
  size = 'base',
  backgroundColor,
  handleClick
}) {
  const [message, setMessage] = useState('');

  const handleClick2 = () => {
    setMessage('clicked');
    handleClick();
  };

  return (
    <button
      className={`${color} ${size}`}
      style={backgroundColor && {backgroundColor}}
      onClick={handleClick2}
    >
      {children}
      {message}
    </button>
  );
}

export default Button;

//colorやsizeなどをブラウザで選択式にするため、型にはめる
//argsTypeを使う場合は不要
Button.propTypes = {
  /**
   * What background color to use
   */
  color: PropTypes.oneOf(['primary', 'default', 'danger']),
  /**
   * How large should the button be?
   */
  size : PropTypes.oneOf(['sm', 'base','lg']),
  // onClick: PropTypes.func.isRequired,
};
