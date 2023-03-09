import Wrapper from "../../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { ReactComponent as Logo } from "../../assets/images/psycheLogo.svg";
import NavLinks from "../Navlinks/NavLinks";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/slices/sidebar/sidebarSlice";
const SmallSidebar = () => {
	const dispatch = useDispatch();
	const { isOpen } = useSelector((state) => state.sidebar);
	const showSideBar = () => {
		dispatch(toggleSidebar());
	};
	return (
		<Wrapper>
			<div
				className={
					isOpen ? "sidebar-container show-sidebar" : "sidebar-container"
				}
			>
				<div className="content">
					<button type="button" className="close-btn" onClick={showSideBar}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks toggleSidebar={showSideBar} />
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
