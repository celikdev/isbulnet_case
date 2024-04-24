import { Link } from "react-router-dom";
import { FAVORITE_BUTTON_DATA } from "../constants/Data";

const FavoriteBox = () => {
  return (
    <div className="bg-white grid grid-cols-2 p-4 rounded-lg">
      {FAVORITE_BUTTON_DATA.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className="flex flex-col items-center p-10 justify-center gap-4 transition-colors duration-300 hover:bg-gray-200 rounded-lg"
        >
          {item.icon && <item.icon size={60} color="#2253af" />}
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-brand-primary font-medium text-xl">
              {item.name}
            </h1>
            <p className="text-gray-500 text-sm font-light">{item.subText}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FavoriteBox;
