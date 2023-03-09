import Wrapper from "../../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import icon from "../../assets/images/Frame 122.png";
import { ReactComponent as Arrow } from "../../assets/images/arrow-right.svg";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/slices/sidebar/sidebarSlice";
import { CreatTagModal } from "../Modals";
const Navbar = () => {
	const dispatch = useDispatch();

	const showSideBar = () => {
		dispatch(toggleSidebar());
	};
	return (
		<Wrapper>
			<div className="nav-center">
				<button type="button" className="toggle-btn" onClick={showSideBar}>
					<FaAlignLeft />
				</button>
				{/* <div>
					<h3 className="pageName">{pageName}</h3>
				</div> */}
				<div className="btn-container">
					<img src={icon} alt="" />
					<CreatTagModal />

					{/* <div>
						<button
							type="button"
							className="btn"
							onClick={() => setShowLogout(!showLogout)}
						>
							<FaCaretDown />
						</button>
						<div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
							<button
								type="button"
								className="dropdown-btn"
								onClick={logoutUser}
							>
								logout
							</button>
						</div>
					</div> */}
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
