import { Input } from "./input";
import { SearchIcon } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative text-black p-5">
      <SearchIcon className="absolute left-8 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />
      <Input
        className="w-full rounded-md border border-gray-300 bg-white px-10 py-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-600 dark:focus:ring-gray-600"
        placeholder="Search..."
        type="search"
      />
    </div>
  );
};
