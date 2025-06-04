const ButtonDelete = ({ type = "button", onClick, text }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn btn-secondary"
    >
      {text}
    </button>
  );
};

export default ButtonDelete;
