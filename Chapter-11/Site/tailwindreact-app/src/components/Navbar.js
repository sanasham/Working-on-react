import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="w-1/3">
      <ul className="flex justify-evenly py-6 px-4">
        <li>Home</li>
        <li>Contact Us</li>
        {/* <Link to="Services"> */}
        <li>Services</li>
        {/* </Link> */}
        <li>Carrers</li>
        <li>Help</li>
      </ul>
    </div>
  );
};

export default Navbar;
