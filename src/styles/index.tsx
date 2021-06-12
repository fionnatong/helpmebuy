import { createGlobalStyle } from "styled-components";
import token from "styles/token";

const { font, color, spacing } = token;

const GlobalStyles = createGlobalStyle`
	body {
		margin: 0;
		background-color: ${color.darkblue};
		color: ${color.white};
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	* {
		background-color: ${color.darkblue};
		color: ${color.white};
		
		:focus {
			outline: none;
    	box-shadow: 0 0 0 2px #BBE2FF;
		}
	}

	input,
	button {
		font-size: ${font.size.m};
		padding: ${spacing.m};
		border: 0;
	}

	input {
		::placeholder {
			opacity: 1;
		}
	}

	button {
		:hover {
			cursor: pointer;
		}
	}

	p {
		font-size: ${font.size.m};
		margin: 0;
	}
`;

export default GlobalStyles;