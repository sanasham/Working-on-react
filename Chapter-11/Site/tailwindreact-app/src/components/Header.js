import logo from '../assets/Flower.webp';
import avatar from '../assets/avatar.webp';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className="w-screen h-20 bg-orange-100 flex justify-between ...">
      <div className="flex justify-between items-stretch ...">
        <img src={logo} alt="logo" className="h-18 p-0.5 m-0.5" />
        <h1 className="py-6 px-4 text-xl font-bold italic text-red-600 underline underline-offset-1">
          Diya Shamreen Sayyed
        </h1>
      </div>
      <Navbar />
      <div className="flex">
        <h1 className="py-6">Login</h1>
        <img src={avatar} alt="avatar error" className="h-18 p-0.5 m-0.5" />
      </div>
    </div>
  );
};

export default Header;
