import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center pt-12 pb-8'>
            <img className='mx-auto' src={logo} alt="" />
            <p className="text-xl pt-5">Journalism Without Fear or Favour</p>
            <p className="text-xl pt-2">{moment().format("dddd, MMMM D, YYYY ")}</p>
        </div>
    );
};

export default Header;