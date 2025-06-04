import './Button.css';

const Button = ({ type, onClick, text }) => {
    return (
      <button
        type= {type}
        onClick={onClick}
        className="btn btn-dark"
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  