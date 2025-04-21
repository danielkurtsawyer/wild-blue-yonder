import './button.css';

function ButtonPrimary({href, text, className}){
    if(href){
        return (
            <a href={href} target='_blank' rel='noopener noreferrer' className={`button-primary ${className}`}>{text}</a>
        )
    } else {
        return (
            <button className={`button-primary ${className}`}>{text}</button>
        )
    }
}

export default ButtonPrimary;