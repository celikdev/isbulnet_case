import { useRef, useState } from "react";
import NavList from "../../../components/NavList";
import UserCard from "../../../components/UserCard";

import { CiSearch } from "react-icons/ci";
import CompanyTable from "../../../components/Follow/CompanyTable";

const Follow = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div className="flex flex-col gap-8 pb-10">
      <header className="h-[80px] bg-red-400">Header</header>
      <main className="w-3/5 mx-auto flex gap-4">
        <nav className="w-1/4 flex flex-col gap-6">
          <UserCard />
          <NavList />
        </nav>
        <div className="w-3/4 flex flex-col gap-4">
          <div className="uppercase font-semibold text-brand-primary shadow-md p-4 rounded-lg bg-white">
            <h1 className="text-lg">Takip Ettiğim Firmalar</h1>
          </div>
          <span
            className="flex cursor-text items-center border-[1px] bg-white p-2 rounded-lg gap-2"
            onClick={() => inputRef.current?.focus()}
          >
            <CiSearch size={22} />
            <input
              onChange={(searchQueryText) =>
                setSearchQuery(searchQueryText.target.value)
              }
              ref={inputRef}
              type="text"
              placeholder="Firma Ara"
              className="w-full h-full outline-none text-sm text-brand-primary"
            />
          </span>
          <CompanyTable searchQuery={searchQuery} />
        </div>
      </main>
    </div>
  );
};

export default Follow;
