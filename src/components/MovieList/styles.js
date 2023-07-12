import styled from 'styled-components';

export const MovieList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 4rem;
    row-gap: 4rem;
    margin: 0 auto;
    list-style: none;
`