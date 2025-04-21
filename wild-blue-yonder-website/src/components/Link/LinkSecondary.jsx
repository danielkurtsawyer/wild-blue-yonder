import './link.css';

function LinkSecondary({href, text, className}){
    return (
        <a href={href} className={`link-secondary ${className}`}>{text}</a>
    )
}

export default LinkSecondary;