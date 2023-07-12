import styled from 'styled-components';

export const Slider = styled.div `

    display: flex;
    grid-template-columns: repeat(4, auto);
    gap: 6px;
    padding: 6px;
    position: relative;
    overflow: hidden;
    scroll-behavior: smooth;

    &::after{
        content: '';
        height: 16px;
        width: 16px;
        position: absolute;
        top: calc(250px - 50%);
        right: 0;
        border-top: 6px solid #fff;
        border-right: 6px solid #fff;
        transform: rotate(45deg);
        cursor: pointer;
        margin: 6px;
    }

    &::before{
        content: '';
        height: 16px;
        width: 16px;
        position: absolute;
        top: calc(250px - 50%);
        left: 0;
        border-top: 6px solid #fff;
        border-left: 6px solid #fff;
        transform: rotate(-45deg);
        cursor: pointer;
        margin: 6px;
    }

`

export const SliderItem = styled.div `

    height: 250px;
    width: 200px;
    border-radius: 8px;
    background-color: red;

`