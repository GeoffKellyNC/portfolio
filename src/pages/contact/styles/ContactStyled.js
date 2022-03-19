import styled from 'styled-components'

const ContactStyled = styled.div`
    background-image: url('https://i.imgur.com/8JbUKhI.jpg');
    height: 96vh;
    background-size: cover;



    .form-bg{
        position:absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        background-color: rgba(5, 76, 174, .5);
        border-radius:20px;
        padding:70px 100px;
    }

    h3{
        text-align: center;
        margin-bottom: 5%;
        font-family: ${pr => pr.theme.MainFont};
        color: ${pr => pr.theme.Yellow};
        font-size: 1.4rem;
    }
    
`

export default ContactStyled;