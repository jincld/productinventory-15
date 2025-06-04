const InputText = ({ name, label, placeholder, type = "text", register, error }) => {
  return (
    <div className="sm:col-span-3 mb-3">
      <label htmlFor={name} className="form-label text-black">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={name}
          {...register(name, { required: `${label} is required` })}
          placeholder={placeholder}
          type={type}
          className={`form-control bg-dark text-white border border-secondary placeholder-light rounded-3 shadow-sm ${
            error ? 'is-invalid' : ''
          }`}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default InputText;
