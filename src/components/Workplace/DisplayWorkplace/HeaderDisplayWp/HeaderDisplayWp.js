import DarkMode from "./DarkMode";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import SearchBar from "./SearchBar";
import TitleCustomerStore from "./TitleCustomerStore";

function HeaderDisplayWp() {
  return (
    <div className="flex flex-shrink-0 h-[80px] bg-white dark:b-light shadown-nav">
      <DarkMode />
      <TitleCustomerStore />
      <SearchBar />
      <HeaderInfo />
    </div>
  );
}

export default HeaderDisplayWp;
