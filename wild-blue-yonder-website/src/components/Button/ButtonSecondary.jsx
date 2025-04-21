import './button.css';

function ButtonSecondary({href, text, className}){
    if(href){
        return (
            <a href={href} target='_blank' rel='noopener noreferrer' className={`button-secondary ${className}`}>{text}</a>
        )
    } else {
        return (
            <button className={`button-secondary ${className}`}>{text}</button>
        )
    }
}

export default ButtonSecondary;