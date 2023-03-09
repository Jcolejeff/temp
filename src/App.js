import "./App.css";
import MailchimpForm from "./Components/MailchimpForm/MailchimpForm";
import { GlobalProvider } from "./Context/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import SignIn from "./Components/pages/Authentication/SignIn";
import SignUp from "./Components/pages/Authentication/SignUp";
import PasswordReset from "./Components/LoginForms/ResetPassword";
import NewPassword from "./Components/LoginForms/NewPassword";
import ResetSuccess from "./Components/LoginForms/ResetSucces";
import ErrorPage from "./Components/pages/Error";
import Wallets from "./Components/pages/dashboard/Wallet/Wallets";
import {
	SharedLayout,
	Account,
	Settings,
	Dashboard,
	PaymentLinks,
} from "./Components/pages/dashboard";
import Analytics from "./Components/pages/dashboard/Wallet/Analytic";
import BeneficiariesPage from "./Components/pages/dashboard/Wallet/Beneficiary/Beneficiaries";
import PaymentLink from "./Components/pages/dashboard/Payment/PaymentLinks";

function App() {
	return (
		<BrowserRouter>
			<GlobalProvider>
				<div className="App">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="join" element={<MailchimpForm />} />

						<Route exact path="/sign-in" element={<SignIn />} />
						<Route exact path="/reset-password" element={<PasswordReset />} />
						<Route
							exact
							path="/reset-password-complete"
							element={<ResetSuccess />}
						/>
						<Route exact path="/new-password" element={<NewPassword />} />
						<Route exact path="/sign-up" element={<SignUp />} />
						<Route path="/dashboard" element={<SharedLayout />}>
							<Route index element={<Dashboard />} />
							<Route path="accounts" element={<Account />} />
							<Route path="settings" element={<Settings />} />
							<Route path="payment" element={<PaymentLink />} />
							<Route path="wallets" element={<Wallets />} />
							<Route path="wallets/analytics" element={<Analytics />} />
							<Route path="wallets/beneficiaries" element={<BeneficiariesPage />} />
						</Route>
						<Route exact path="*" element={<ErrorPage />}></Route>
					</Routes>
					{/* <IntroPage />
        <About />
        <Footer /> */}
				</div>
			</GlobalProvider>
		</BrowserRouter>
	);
}

export default App;
