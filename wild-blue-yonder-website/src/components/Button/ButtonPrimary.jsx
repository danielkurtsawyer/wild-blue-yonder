import './button.css';

function ButtonPrimary({text, className}){
    return (
        <button className={`button-primary ${className}`}>{text}</button>
    )
}

export default ButtonPrimary;