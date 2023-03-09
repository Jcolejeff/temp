import styled from "styled-components";

const Wrapper = styled.aside`
	display: none;
	@media (min-width: 992px) {
		display: block;
		box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

		.sidebar-container {
			background: var(--white);
			min-height: 100vh;
			height: 100%;
			width: 250px;
			margin-left: -250px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			transition: var(--transition);
			padding-block-end: 2rem;
		}
		/* .content {
			position: sticky;
			top: 0;
		} */
		.show-sidebar {
			margin-left: 0;
		}
		header {
			height: 6rem;
			display: flex;
			align-items: center;
			padding-left: 2.5rem;
		}
		.nav-links {
			padding-top: 2rem;
			display: flex;
			flex-direction: column;
		}
		.nav-link {
			display: flex;
			align-items: center;
			color: var(--grey-500);
			padding: 1rem 0;
			padding-left: 2.5rem;
			text-transform: capitalize;
			transition: var(--transition);
		}
		.nav-link:hover {
			background: var(--grey-50);
			padding-left: 3rem;
			color: var(--grey-900);
		}
		.nav-link:hover .icon {
			color: var(--primary-100);
		}
		.icon {
			font-size: 1.5rem;
			margin-right: 1rem;
			display: grid;
			place-items: center;
			transition: var(--transition);
		}
		.active {
			color: var(--grey-900);
		}
		.active .icon {
			color: var(--primary-100);
		}
		.logout-btn {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			padding-left: 2.5rem;
			align-items: flex-start;

			.logout {
				display: flex;
				align-items: center;
				gap: 1rem;
				color: red;
			}
			.userImage {
				width: 50px;
				display: flex;
				gap: 1rem;
				img {
					object-fit: contain;
					width: 100%;
					border-radius: 100%;
					margin-left: -0.5rem;
				}
			}
		}
	}
`;
export default Wrapper;
