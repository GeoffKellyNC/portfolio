import styled from "styled-components"



const SkillsStyled = styled.div`
    color: white;
    max-width: 100%;
    min-height: 40rem;
    background-image: url('https://i.imgur.com/1yW3SSt.jpg');
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;
    font-family: ${pr => pr.theme.MainFont};

    h2{
        position: absolute;
        left: 42%;
        font-size: 4em;
        margin-top: 2%;
    }

    p{
        display: flex;
        align-items: center;
    }

    .skill{
        font-size:2.5rem;
        padding: 5% 0;
    }

    .icon{
        width: 8%;
        height: auto;
        padding-right: 1rem;
        animation: icon 1s ease-in-out forwards infinite 1s;
    }

    .bg-overlay {
        background-color: rgba(14, 14, 46, 0.61);
        width: 100%;
        height: 40rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .skills-container {
        display: flex;
        justify-content: flex-start;
        margin-left: 25%;
        margin-top: 10%;
    }

    @keyframes icon {
        0%
        {
            transform: translateY(0)
            
        }
        50%
        {
            transform: translateY(10%)
        }
        100%
        {
            transform: translateY(0)
        }
    }

    @media (max-width: 428px){

        .skill{
            font-size: 1.5rem;
        }

        .skills-container {
            margin-left:10%;
        }

    }

  


`


export default SkillsStyled;