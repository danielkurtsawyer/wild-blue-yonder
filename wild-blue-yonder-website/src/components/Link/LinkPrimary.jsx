import './link.css';

function LinkPrimary({href, text, className}){
    return (
        <a href={href} className={`link-primary ${className}`}>{text}</a>
    )
}

export default LinkPrimary;