import styled from 'styled-components';

export const Movie = styled.li`
    
    color: #fff;
    font-weight: bold;
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;


    img{
        width: 200px;
        border-radius: 12px;
        margin-bottom: 16px;
        transition: ease .5s;
    }

    img:hover{
        transform: scale(1.1);
    }

    span{
        font-size: 1.2rem;
        font-weight: normal;
    }

    small {
        color: #B8C9D4;
    }
`