import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: #FAFAFA;
        margin: 0;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
    
`;

export default GlobalStyle;
