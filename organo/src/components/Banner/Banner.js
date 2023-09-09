import banner from '../../assets/images/banner.png';
import './Banner.css';

function Banner() {
    return (
        <header className='banner'>
            <img src={banner} alt='Banner' />
        </header>
    );
}

export default Banner;