export const errorContainer = (form, field) => {
    return form.touched[field] && form.errors[field] ? (
        <span className="error text-red-500 inline-block mt-2">{form.errors[field]}</span>
    ) : null;
};


export const formAttr = (form, field) => ({ onBlur: form.handleBlur, onChange: form.handleChange, value: form.values[field] })