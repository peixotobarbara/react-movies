import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 50px;
    text-align: center;
    color: #fff;
    font-weight: 700;

    h1{
        margin-bottom: 50px;
    }

    input{
        width: 60%;
        background-color: rgba(225, 225, 225, 0.2);;
        height: 46px;
        border-radius: 8px;
        padding: 8px 16px;
        margin-bottom: 50px;
        outline: none;
        border: none;
        color: #fff;
        font-size: 1.1rem;
    }

    input::placeholder{
        color: #B8C9D4;
    }
`