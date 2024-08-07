import { GlobalStyle } from "./styles";

import Album from './components/Album';

export function App() {

	return (
		<div className="App">
			<GlobalStyle />
			<h4>
				Vinted Home Test. Made with ❤️ by{" "}
				<a href="https://github.com/BenBariSouf" target="_blank">
					Soufiane.
				</a>
			</h4>
			<Album />
		</div>
	);
}