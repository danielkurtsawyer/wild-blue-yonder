import './button.css';

function ButtonSecondary({text, className}){
    return (
        <button className={`button-secondary ${className}`}>{text}</button>
    )
}

export default ButtonSecondary;