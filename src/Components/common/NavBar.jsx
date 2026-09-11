const NavItem = ({ href, children }) => {
  return (
    <li className="inline">
      <a
        href={href}
        className="text-white transition-colors hover:text-orange-300"
      >
        {children}
      </a>
    </li>
  );
};

const NavBar = () => {
  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "dashboard", label: "Dashboard", href: "#dashboard" },
    { id: "inventory", label: "Inventory", href: "#inventory" },
    { id: "recipes", label: "Recipes", href: "#recipes" },
    { id: "suppliers", label: "Suppliers", href: "#suppliers" },
  ];
  return (
    <nav className="flex-1" aria-label="Main Navigation">
      <ul className="flex flex-row gap-6">
        {navItems.map((item) => (
          <NavItem href={item.href} key={item.id}>
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
