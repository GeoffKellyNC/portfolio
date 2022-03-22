import styled from 'styled-components'

const EducationStyled = styled.div`
    color: white;
    max-width: 100%;
    min-height: 47rem;
    background-image: url('https://i.imgur.com/dTKyc20.jpg');
    background-size:     cover;
    background-repeat:   no-repeat;
    font-family: ${pr => pr.theme.MainFont};


    h1{
       margin-left: 40%;
        padding-top: 2%;
        font-size: 5em;
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
        height: 47rem;
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
        align-items: center;
        ${'' /* background: rgba(14, 14, 26, 0.4); */}
    }
    


`


export default EducationStyled;