import styled from 'styled-components'



const HeaderStyled = styled.header `
    max-width: 100%;
    font-family: ${pr => pr.theme.MainFont};
    ${'' /* background-color: ${pr => pr.theme.Blue}; */}
    ${'' /* background-color: rgba(5, 76, 174, .7); */}
    ${'' /* background: linear-gradient(100deg, #373635 0%, #0f2834 45%); */}
    background: linear-gradient(100deg, #373635 0%, #0d2539 45%);
  

    nav{
        display: flex;
        max-width: 100%;
        justify-content: flex-end;
        font-size: 1.2em;
        position: absolute;
        width: 100%;
    }

    nav a{
        text-decoration: none;
        color: ${pr => pr.theme.Yellow};
        padding: 10px 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-content: center;
        margin-right: 2%;
    }

    nav a:hover{
        transform: scale(1.3);
        transition: transform .3s ease-in-out;
    }

    nav a::after{
        transition: 300ms;
        height: 2px;
        content: "";
        ${'' /* background-color: ${pr => pr.theme.Red}; */}
        background-color: rgba(5, 76, 174,1);
        width: 0;
    }

    nav a:hover::after{
        width: 100%;
    }

    a{
        text-decoration: none;
    }

    .git-logo-text {
        position: absolute;
        left: 3%;
        max-width: 100%;
        ${'' /* margin-bottom: 5px; */}
        font-size: 3em;
        text-decoration: none;
        top: -4px;
    }

    .hamburger{
        display: none;
    }

    .btn-container{
        height: 100%;
        display: flex;
    }

    @media (max-width: 768px) {
        .nav-link{
            display: none;
        }

        .git-logo, .git-logo-text{
            display: none;
        }

        .hamburger{
            display: flex;
            width: 5%;
            height: auto;
            color: #97b2d3;
        }

        


`

export default HeaderStyled;