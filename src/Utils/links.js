import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import icon1 from "../assets/images/home-2.png";
import icon2 from "../assets/images/bank.png";
import icon3 from "../assets/images/link-circle.png";
import icon4 from "../assets/images/wallet.png";

const links = [
	{ id: 1, text: "Dashboard", path: "/dashboard", icon: icon1 },
	{ id: 2, text: "Wallets", path: "wallets", icon: icon2 },
	{ id: 3, text: "Account", path: "accounts", icon: icon3 },
	{ id: 5, text: "Payment Links", path: "payment", icon: icon3 },
	{ id: 4, text: "Settings", path: "settings", icon: icon4 },
];

export default links;
