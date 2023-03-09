import styled from "styled-components";

const Wrapper = styled.nav`
	z-index: 5;
	height: var(--nav-height);
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
	background: var(--white);
	.logo {
		display: flex;
		align-items: center;
		width: 100px;
	}
	.nav-center {
		display: flex;
		width: 90vw;
		align-items: center;
		justify-content: space-between;
	}
	.toggle-btn {
		background: transparent;
		border-color: transparent;
		font-size: 1.75rem;
		color: var(--primary-100);
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	.btn-container {
		position: relative;
		display: flex;
		justify-content: space-around;
		gap: 2rem;

		.tag {
			display: flex;
			color: var(--primary-100);
			border-radius: 2rem;
			align-items: center;
			background-color: #e7eff6;
			padding-inline: 1rem;
			gap: 0.5rem;
		}
		@media (max-width: 40rem) {
			width: 14rem;
			gap: 0.4rem;
			margin-right: -1rem;
			justify-content: center;
			.tag {
				font-size: 0.8rem;
			}
		}
	}
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0 0.5rem;
		position: relative;
	}

	.dropdown {
		position: absolute;
		top: 40px;
		left: 0;
		width: 100%;
		background: var(--primary-100);
		box-shadow: var(--shadow-2);
		padding: 0.5rem;
		text-align: center;
		visibility: hidden;
		border-radius: var(--borderRadius);
	}
	.show-dropdown {
		visibility: visible;
	}
	.dropdown-btn {
		background: transparent;
		border-color: transparent;
		color: var(--primary-100);
		letter-spacing: var(--letterSpacing);
		text-transform: capitalize;
		cursor: pointer;
	}
	.logo-text {
		display: none;
		margin: 0;
	}
	@media (min-width: 992px) {
		position: sticky;
		top: 0;
		.toggle-btn {
			visibility: hidden;
		}

		.nav-center {
			width: 90%;
		}

		.logo-text {
			display: block;
		}
	}
	.pageName {
		text-transform: capitalize;
	}
`;
export default Wrapper;
