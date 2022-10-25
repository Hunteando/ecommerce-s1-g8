const Input = ({ attribute, handleChange, param }) => {
    return (
        <input
            type={attribute.type}
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className='regular-style'

        />
    )
}
export default Input;