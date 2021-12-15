import { SearchIcon } from "../../../../Icon/Icon";

function SearchBar() {
  return (
    <div className="flex items-center flex-1 pr-3 w-850:border-r-1px">
      <SearchIcon className="w-850:live hidden ml-8 mr-3" />
      <input
        className="w-850:live hidden outline-none flex-1 dark:b-light select-none"
        type="text"
        placeholder="Seach For Stores"
      />
    </div>
  );
}

export default SearchBar;
