function Button({ type, cssClass, title, onClick }) {
  return (
    <button onClick={onClick} type={type} className={cssClass}>
      {title}
    </button>
  );
}

export default Button;
