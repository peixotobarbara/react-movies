import styled from 'styled-components';

export const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    max-width: 840px;
    margin: 0 auto;

    img {
        width: 300px;
        border-radius: 8px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        text-decoration: none;
        color: white;
    }

    a span {
        font-size: 1.6rem;
    }
`;

export const DetailsInfo = styled.div`
    display: flex;

    .details-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        padding: 10px;
        margin-left: 24px;
    }

    p {
        text-align: left;
        font-weight: normal;
        color: #b8c9d4;
        line-height: 1.2rem;
    }

    a {
        width: 100%;
        height: 46px;
        background-color: #CF1741;
        color: #fff;
        padding: 8px 16px;
        border-radius: 6px;
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: bold;
    }
`;

export const MovieGenres = styled.div`
    display: flex;
    gap: 6px;
    width: 100%;

    span {
        padding: 6px 12px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        font-size: .8rem;
    }
`;
