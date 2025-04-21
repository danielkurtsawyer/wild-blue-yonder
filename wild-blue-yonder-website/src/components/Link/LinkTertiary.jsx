import './link.css';

function LinkTertiary({href, text, className}){
    return (
        <a href={href} className={`link-tertiary ${className}`}>{text}</a>
    )
}

export default LinkTertiary;