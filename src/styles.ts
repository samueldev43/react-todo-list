import styled,{ createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
}

body {
    background: #a3a3a3;
}
`

export const Container = styled.div`
max-width: 600px;
height: 14rem;
margin: 0 auto;
margin-top: 10rem;
margin-bottom: 3rem;
padding: 1rem 1rem;
background: #ffffff;

h1 {
    font-size: 40px;
    font-weight: 100;
}

form {
    display: flex;
    margin-top: 3rem;

    input {
        width: 450px;
        padding: 0.8rem;
        font-weight: 100;
    }

    button {
        width: 150px;
        height: 3rem;
        border: 0;
        background: #32cd32;
        font-weight: 100;
        font-size: 20px;
        transition: 0.4s;

        &:hover {
            background: green;
        }
    }
}
`