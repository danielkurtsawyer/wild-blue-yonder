import './button.css';

function ButtonTertiary({href, text, className}){
    if(href){
        return (
            <a href={href} target='_blank' rel='noopener noreferrer' className={`button-tertiary ${className}`}>{text}</a>
        )
    } else {
        return (
            <button className={`button-tertiary ${className}`}>{text}</button>
        )
    }
}

export default ButtonTertiary;