import './button.css';

function ButtonSecondary({href, text, className}){
    if(href){
        return (
            <a href={href} target='_blank' rel='noopener noreferrer' className={`button-secondary ${className}`}>{text}</a>
        )
    }
}

export default ButtonSecondary;