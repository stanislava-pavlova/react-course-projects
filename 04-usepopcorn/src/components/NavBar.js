import Logo from './Logo';
import Search from './Search';
import NumResults from './NumResults';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}
