import styled from "styled-components";


export const List = styled.li`
max-width: 600px;
height: 5rem;
padding: 1.5rem;
background: #ffffff;
list-style: none;
display: flex;
margin: 0 auto;
margin-top: 1rem;
justify-content: space-between;

p {
    font-size: 25px;
}

.icon {
    transition: color 0.2s;

    &:hover {
        color: red;
    }
}
`