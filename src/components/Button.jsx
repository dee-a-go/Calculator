import '../stylesheets/Button.css'

function Button({ children, handleClick }) {

  const isOperator = (value) => isNaN(value) && (value !== '.') && (value !== '=');

  return (
    <div
    className={`button-container${isOperator(children) ? ' operator' : ''}`}
    onClick={() => handleClick(children)}>
      {children}
    </div>
  );
}

export default Button;