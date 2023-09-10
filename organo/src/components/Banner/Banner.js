import banner from '../../assets/images/banner.png';
import './Banner.css';

export const Banner = () => {
    return (
        <header className='banner'>
            <img src={banner} alt='Banner' />
        </header>
    );
}