import NavBar from "../common/NavBar";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-6 bg-amber-700 p-6">
      <div className="">My Logo</div>
      <NavBar />
    </header>
  );
};

export default Header;
