import { pageLinks ,socialLinks} from "../data";
const Footer = () =>
{
    return(
        <>
        <footer className="section footer">
      <ul className="footer-links">
        {
            pageLinks.map((link)=>
            {
                const {id,href,text} = link;
                return(
                    <li key={id}>
                        <a href={href} className="footer-link">{text}</a>
                    </li>
                );
            })
        }
        
        
      </ul>
      <ul className="footer-icons">
        {
            socialLinks.map((link)=>
            {
                const { id,href,icon} = link;
                return(
                    <li key={id}>
                    <a href={href} target="_blank" rel="noreferrer" class="footer-icon">
                        <i className={icon}></i>
                    </a>
                    </li>
                );
            })
        }
        
        
      </ul>
      <p className="copyright">
        Made with <i className="fas fa-heart"> by Sanskruti</i>
        <span id="date"></span>
      </p>
    </footer>
        </>

    );
}
export default Footer