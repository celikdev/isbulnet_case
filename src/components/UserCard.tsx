import { Link } from "react-router-dom";
import { DEFAULT_USER_IMAGE } from "../constants/Data";

const UserCard = () => {
  const lastUpdate = new Date().toLocaleDateString();
  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-b from-[#2857b0] to-[#0f3479] gap-2 shadow-xl">
      <img
        src={DEFAULT_USER_IMAGE}
        alt="User"
        className="w-28 h-28 border-2 border-black rounded-full"
      />
      <h1 className="font-bold text-xl text-white">HABIP AGCA</h1>
      <Link
        to="#"
        className="bg-gray-300 w-full text-center p-2 text-xs font-medium text-gray-600 transition-colors duration-300 border-[1px] border-transparent hover:border-white hover:bg-brand-primary hover:text-white"
      >
        CV Tarihini Düzenle
      </Link>
      <Link to="#" className="text-white underline underline-offset-2 text-sm">
        CV Düzenle
      </Link>
      <h1 className="text-white font-normal text-[10px]">
        Son Güncelleme: {lastUpdate}
      </h1>
    </div>
  );
};

export default UserCard;
