import './button.css';

function ButtonTertiary({text, className}){
    return (
        <button className={`button-tertiary ${className}`}>{text}</button>
    )
}

export default ButtonTertiary;