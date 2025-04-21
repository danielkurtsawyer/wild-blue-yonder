import './button.css';

function ButtonTertiary({href, text, className}){
    if(href){
        return (
            <a href={href} target='_blank' rel='noopener noreferrer' className={`button-tertiary ${className}`}>{text}</a>
        )
    }
}

export default ButtonTertiary;