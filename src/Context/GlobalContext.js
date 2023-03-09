import { createContext, useState, useContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const [name, setName] = useState("");
	const [lname, setLname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState()

	return (
		<GlobalContext.Provider
			value={{
				name,
				setName,
				lname,
				setLname,
				email,
				setEmail,
				password,
				setPassword,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(GlobalContext);
};
