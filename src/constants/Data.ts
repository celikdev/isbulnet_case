import { FiUser } from "react-icons/fi"
import { FaRegFileAlt } from "react-icons/fa";
import { ImFilesEmpty } from "react-icons/im";
import { FaPenAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { MdMailOutline } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { FaListUl } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { PiHeadset } from "react-icons/pi";

import { IoIosLogOut } from "react-icons/io";


// Favorite Button Data Icons
import { FiTable } from "react-icons/fi";
import { TbBuilding } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";
import { FiEye } from "react-icons/fi";



export const BUTTON_DATA = [
    {
        name: "Profilim",
        path: "/profilim",
        icon: FiUser
    },
    {
        name: "Özgeçmişim",
        path: "/profilim/cv",
        icon: FaRegFileAlt
    },
    {
        name: "Dosyalar & Ön Yazılar",
        path: "/profilim/dosyalar-onyazilar",
        icon: ImFilesEmpty
    },
    {
        name: "Başvurularım",
        path: "/profilim/basvurular",
        icon: FaPenAlt
    },
    {
        name: "Favorilerim",
        path: "/profilim/favoriler",
        icon: MdFavoriteBorder
    },
    {
        name: "Kayıtlı İlanlar",
        path: "/profilim/favoriler/liste",
        alertCount: 4
    },
    {
        name: "Takipteki Firmalar",
        path: "/profilim/follow",
        alertCount: 5

    },
    {
        name: "Kayıtlı Filtreler",
        path: "/profilim/kayitli-aramalar",
        alertCount: 3
    },
    {
        name: "Son İncelenen İlanlar",
        path: "/profilim/son-incelenen-ilanlar",
        alertCount: 61
    },
    {
        name: "İş Alarmları",
        path: "#",
        icon: GoBell
    },
    {
        name: "Mesajlar",
        path: "#",
        icon: MdMailOutline
    },
    {
        name: "Mülakatlarım",
        path: "#",
        icon: TbCertificate,
        alertCount: 1
    },
    {
        name: "Bana Uygun İlanlar",
        path: "#",
        icon: FaListUl
    },
    {
        name: "Ayarlar",
        path: "#",
        icon: IoSettingsOutline
    },
    {
        name: "Yardım",
        path: "#",
        icon: PiHeadset
    },
    {
        name: "Çıkış",
        path: "#",
        icon: IoIosLogOut
    },
]

export const DEFAULT_USER_IMAGE = "https://isbull.s3.eu-north-1.amazonaws.com/default-images/user-profile.png?v=2.9.90"
export const DEFAULT_COMPANY_IMAGE = "https://isbull.s3.eu-north-1.amazonaws.com/v2/no-image.png"

export const FAVORITE_BUTTON_DATA = [
    {
        name: "Kayıtlı İlanlar",
        path: "/profilim/favoriler/liste",
        icon: FiTable,
        subText: "Kayıtlı ilanlarınızı listeleyebilir ve yönetebilirsiniz."
    },
    {
        name: "Takipteki Firmalar",
        path: "/profilim/follow",
        icon: TbBuilding,
        subText: "Takip ettiğiniz firmaları görüntüleyebilirsiniz."
    }, {
        name: "Kayıtlı Filtreler",
        path: "/profilim/kayitli-aramalar",
        icon: FiFilter,
        subText: "Kaydettiğiniz filtreleri inceleyebilirsiniz."
    },
    {
        name: "Son İncelenen İlanlar",
        path: "/profilim/son-incelenen-ilanlar",
        icon: FiEye,
        subText: "En son incelediğiniz ilanları görüntüleyebilirsiniz."
    },
]

export const FAVORITE_COMPANY_DATA = [
    {
        name: "ONUR MÜHENDİSLİK ISI SİS.İNş. TAAh VE DIŞ TİC.LTD.ŞTİ",
        addedDate: "12.05.2021",
        addedTime: "12:30",
    },
    {
        name: "EKİM TURİZM SU SPORLARI İNŞAAT TİCARET LİMİTED ŞİRKETİ-Kibala",
        addedDate: "12.05.2021",
        addedTime: "12:30",
    },
    {
        name: "Tatilflix Turizm Ve Danışmanlık San.Tic.Ltd.Şti",
        addedDate: "12.05.2021",
        addedTime: "12:30",
    }
]