import { Link } from "react-router-dom";
import { BUTTON_DATA } from "../constants/Data";
import { MdKeyboardArrowRight } from "react-icons/md";

const NavList = () => {
  return (
    <div className="w-full bg-white rounded-lg flex flex-col py-6">
      {BUTTON_DATA.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className={`flex p-4 justify-between transition-all duration-300 hover:text-brand-primary px-4 group text-gray-600 text-sm
          border-b`}
        >
          {/* <div
            className={`h-full w-1 bg-brand-primary transition-all duration-300 ${
              window.location.pathname === item.path ? "block" : "hidden"
            }`}
          /> */}
          <div className="flex items-center gap-2 px-2">
            {item.icon && <item.icon size={20} />}
            <h1>{item.name}</h1>
          </div>
          <div className="flex gap-4">
            {item.alertCount && (
              <div className="bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-semibold">
                {item.alertCount}
              </div>
            )}

            <MdKeyboardArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-all duration-300 group-hover:text-brand-primary"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavList;
