import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTwitter } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Socialicon (){
    const socialitems = [
        {
            id : '1',
            name : 'facebook',
            link : 'facebook.com',
            icon : <FontAwesomeIcon icon={faFacebookF} />
        },
        {
            id : '2',
            name : 'linked in',
            link : 'linkedin.com',
            icon : <FontAwesomeIcon icon={faLinkedinIn} />
        },
        {
            id : '3',
            name : 'instagram',
            link : 'instagram.com',
            icon : <FontAwesomeIcon icon={faInstagram} />
        },
        {
            id : '4',
            name : 'twitter',
            link : 'twitter.com',
            icon : <FontAwesomeIcon icon={faTwitter} />
        }
    ];
    const social_list = socialitems.map((socialitem)=>
        <li key={socialitem.id}><a href={socialitem.link} className={`social-id${socialitem.id}`}>{socialitem.icon}</a></li>
    )
    return(
        <div className="social_list">
            <ul>
                {social_list}
            </ul>
        </div>
    );
}

export default Socialicon;