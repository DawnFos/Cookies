import CookieLogo from '../assets/cookie.svg';

const Cookie = (props) => {
    return (
        <div className='cookie'>
            <img className='cookie-img' src={CookieLogo} alt='cookie' />
            <p className="cookie-message">{props.msg}</p>
        </div>
    );
};

export default Cookie