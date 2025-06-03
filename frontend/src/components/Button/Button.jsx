import './Button.css';

const Button = ({ onClick, text }) => {
    return (
      <button
        type= "button"
        onClick={onClick}
        className="button_style"
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  