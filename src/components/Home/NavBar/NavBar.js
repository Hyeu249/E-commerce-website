import Login from "./Login";
import NavigationTo from "./NavigationTo";

function NavBar({ user }) {
  const textCLass = "font-bold text-gray-500 select-none cursor-pointer";

  return (
    <div className="flex items-center justify-between mt-11">
      <div className="p-2 bg-green-500">Logo</div>
      <div className="flex items-center">
        <div className="xl:flex justify-evenly hidden flex-1 w-[800px]">
          <NavigationTo to="Home" className={textCLass} defaultChecked="true" />
          <NavigationTo to="Categories" className={textCLass} />
          <NavigationTo to="About" className={textCLass} />
          <NavigationTo to="Contact" className={textCLass} />
          <NavigationTo to="Blogs" className={textCLass} />
        </div>
        <Login user={user} />
      </div>
    </div>
  );
}

export default NavBar;
