import './button.css';
// import PropTypes from 'prop-types';

function Button({
  children,
  color = 'default',
  size = 'base',
  backgroundColor,
  handleClick
}) {
  return (
    <button
      className={`${color} ${size}`}
      style={backgroundColor && {backgroundColor}}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}


export default Button;

//colorやsizeなどをブラウザで選択式にするため、型にはめる
//argsTypeを使う場合は不要
// Button.propTypes = {
//   color: PropTypes.oneOf(['primary', 'default', 'danger']),
//   size : PropTypes.oneOf(['sm', 'base','lg']),
//   onClick: PropTypes.func.isRequired,
// };
