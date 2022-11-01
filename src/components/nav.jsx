import './style.scss'
import logo from '../../Assets/logo.png'

export default function Nav() {
    return (
        <div className='nav'>
            <div className='navLeft'>
                <a href="https://www.linkedin.com/in/yufa-li/" className="social-icon si-rounded si-small si-linkedin" target="_blank">
                    <i className="fi fi-brands-linkedin"></i>
                </a>
                <a href="https://twitter.com/yufa_li" className="social-icon si-rounded si-small si-twitter" target="_blank">
                    <i className="fi fi-brands-twitter"></i>
                </a>
            </div>
            <div className='navCenter'>
                <ul className='navList'>
                    <li className='navListItem'>Mind Garden</li>
                    <li className='navListItem'>About</li>
                    <li className='navListItem'>Write</li>
                    <li className='navListItem'>Meditation</li>
                </ul>
            </div>
            <div className='navRight'>
                <img className='logo'
                    src={logo}
                    alt="personal blog logo"
                />
            </div>
        </div >
    );
}