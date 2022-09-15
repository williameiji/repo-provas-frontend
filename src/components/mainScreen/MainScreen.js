import Header from "./Header";

export default function MainScreen(props) {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
}
