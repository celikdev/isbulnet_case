import {
  DEFAULT_COMPANY_IMAGE,
  FAVORITE_COMPANY_DATA,
} from "../../constants/Data";

import { GoBell } from "react-icons/go";
import { TbDotsVertical } from "react-icons/tb";

interface CompanyTableProps {
  searchQuery: string;
}

const CompanyTable = ({ searchQuery }: CompanyTableProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4 justify-around shadow-lg border-b-[1px] p-4 bg-white rounded-lg">
        <ul>Firma Adı</ul>
        <ul>Uygun İş İlanlarını Gönder</ul>
      </div>
      <div className="flex flex-col gap-4">
        {FAVORITE_COMPANY_DATA.filter((company) =>
          company.name.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((company, index) => (
          <div
            key={index}
            className="flex relative items-center gap-4 justify-around shadow-lg border-b-[1px] p-4 bg-white rounded-lg"
          >
            <img src={DEFAULT_COMPANY_IMAGE} alt="Company Image" width={80} />
            <span className="w-1/3 text-nowrap truncate text-brand-primary font-medium text-lg">
              {company.name}
            </span>
            <span className="text-xs">
              {company.addedDate} {company.addedTime}
            </span>
            <button className="text-xs flex items-center gap-2">
              <GoBell size={20} />
              İş E-Postası almak istemiyorum
            </button>
            <button>
              <TbDotsVertical size={24} className="text-brand-primary" />
            </button>
            {/* <div className="absolute bottom-0 right-0 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 transition-all duration-300 bg-green-400 w-52 h-12">
              <button>Takipten Çıkar</button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyTable;
