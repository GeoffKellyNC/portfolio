import styled from 'styled-components'

const EducationStyled = styled.div`
    color: white;
    max-width: 100%;
    min-height: 40rem;
    background-image: url('https://i.imgur.com/dTKyc20.jpg');
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;
    font-family: ${pr => pr.theme.MainFont};


    h1{
       margin-left: 40%;
        padding-top: 2%;
    }

    p{
        padding: .5em;
        font-size: 1.3rem;
    }

    .education-data{
        display: flex;
        flex-direction: column;
        align-items: flex-end;

    }

    .bg-overlay {
        background-color: rgba(14, 14, 46, 0.4);
        width: 100%;
        height: 40rem;
    }

    .container{
        text-align: center;
    }

    .education-item{
        display: flex;
        flex-direction: column;
        text-align: center;
        min-width: 50%;
        padding: 2em 2em;
    }
    


`


export default EducationStyled;