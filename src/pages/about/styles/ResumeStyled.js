import styled from 'styled-components'

const ResumeStyled = styled.div`
    text-align: center;
    color: white;
    max-width: 100%;
    background-image: url('https://i.imgur.com/IAAMurU.jpg');
    background-size:     cover;
    background-repeat:   no-repeat;
    font-family: ${pr => pr.theme.MainFont};


    p{
        padding: 0.8rem 0;
    }

    h3{
        padding: 6rem 0;
        font-size: 4rem;
    }

    .resume-icon{
        font-size:2rem;
    }

    .desc{
        padding: 0;
        padding: 2%;
    }
    

    .desc-container{
        max-width: 60%;
        margin: auto;
        color: ${pr => pr.theme.Yellow};
        font-size: 1.2rem;
        text-align: justify;
    }

    .resume-desc-item{
        display: flex;
        align-items: center;
    }


    .resume-item {
        ${'' /* background: rgba(0, 28, 42, 0.25); */}
        margin: 2% 0;
    }

    .resume-item div:nth-of-type(1){
        padding-top: 2%;
    }

    .title{
        font-weight: bold;
        font-size: 2rem;
    }


//? Rocket Icon
    .rocket{
        margin-right: 3%;
        color: ${pr => pr.theme.Blue};
        font-size: 1.5rem;
    }

    @media (max-width: 428px){
        .desc-container{
            max-width: 80%;
        }

        .title{
            font-size: 1.5rem;
        }

        .desc{
            font-size: 0.9rem;
        }

    }

  

`

export default ResumeStyled;