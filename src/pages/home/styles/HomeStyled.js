import styled from 'styled-components'

const HomeStyled = styled.div`
    max-width: 100%;
    min-height: 100vh;
    background-image: url('https://i.imgur.com/kcorx8G.jpg');
    background-size: cover;

    .btn-container{
        height: 25em;
        width: 30%;
        display: flex;
        align-items: flex-end;
        padding-left: 4%;
        justify-content: space-between;
    }
    @media (max-width: 768px) {
        height: 100vh;
        width: 100%;

        .btn-container{
            height: 15em;
            padding-left: 17%;
        }

    }

    @media (max-width: 428px){
        background-size: 100%;
    }

`

export default HomeStyled;