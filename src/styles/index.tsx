import { createGlobalStyle } from "styled-components";
import token from "styles/token";

const { font } = token;

const GlobalStyles = createGlobalStyle`
	body {
		margin: 0;
		background-color: ${font.color.darkblue};
		color: ${font.color.white};
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	p {
		font-size: ${font.size.s};
	}
`;

export default GlobalStyles;