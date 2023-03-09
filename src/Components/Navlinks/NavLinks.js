import links from "../../Utils/links";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../Context/GlobalContext";

const NavLinks = ({ toggleSidebar }) => {
	return (
		<div className="nav-links">
			{links.map((link) => {
				const { text, path, id, icon } = link;

				return (
					<button key={id}>
						<NavLink
							to={path}
							onClick={toggleSidebar}
							className={({ isActive }) =>
								isActive ? "nav-link active" : "nav-link"
							}
						>
							<span className="icon">
								<img src={icon} alt="" />
							</span>
							{text}
						</NavLink>
					</button>
				);
			})}
		</div>
	);
};

export default NavLinks;
