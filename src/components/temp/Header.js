import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to="/add-quote">add new quote</Link></li>
        <li><Link to="/detailed-quote">detailed quote</Link></li>
        <li><Link to="/all-quotes">all quotes</Link></li>
      </ul>
    </header>
  );
};

export default Header;