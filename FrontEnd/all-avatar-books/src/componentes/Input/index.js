import { styled } from "styled-components";

const Input= styled.input`
    order: 1px solid #fcdc7b;
    background: transparent;
    border: 5px solid #5c3026;
    padding: 20px 140px;
    border-radius: 30px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
            color: #FFF;
            font-size: 16px;
    }
`

export default Input