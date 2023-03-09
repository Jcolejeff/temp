import NavLinks from "../Navlinks/NavLinks";
import Logo from "../../assets/images/psycheLogo.svg";
import Wrapper from "../../assets/wrappers/BigSidebar";
import { ReactComponent as Logout } from "../../assets/images/logout.svg";
import dummmyImage from "../../assets/images/dummyImg.png";
import { useSelector } from "react-redux";
const BigSidebar = () => {
	const { isOpen } = useSelector((state) => state.sidebar);

	return (
		<Wrapper>
			<div
				className={
					isOpen ? "sidebar-container " : "sidebar-container show-sidebar"
				}
			>
				<div className="content">
					<header>
						<img src={Logo} alt="" />
					</header>
					<NavLinks />
				</div>
				<div className="logout-btn">
					<h1 className="logout">
						<Logout /> logout{" "}
					</h1>
					<div className="userImage">
						<img src={dummmyImage} alt="" />
						<h4>lsldkdd dkslkskdlsksl</h4>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default BigSidebar;
