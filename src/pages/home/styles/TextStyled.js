import styled from 'styled-components'

const TextStyled = styled.div`
    color: ${pr => pr.theme.Yellow};
    font-family: Poppins;
    max-width: 53%;
    ${'' /* animation: text 3s ease-in-out; */}
    animation: focus-in-contract 1s ease 0s 1 normal none;
    font-size: 1.4rem;
    position: relative;
    top: 19rem;
    margin-left: 4%;
    }

    h1,h2{
        color: ${pr => pr.theme.Blue}
    }

    .home-name{
        ${'' /* animation: text-shadow-multicolor2 1s ease 0s 1 normal forwards; */}
    }


    @keyframes text {
        0%
        {
            opacity: 0;
            
        }
        50%
        {
            opacity: 0.5;
        }
        100%
        {
            opacity: 1;
        }

    }

    @keyframes focus-in-contract {
        0%{
            letter-spacing: 1em;
            filter: blur(12px);
            opacity: 0;
        }
        100%{
            filter: blur(0);
            opacity: 1;
        }
    }

    @keyframes text-shadow-multicolor2 {
  0%{
    text-shadow: 0 0 black,,0 0 red, 0 0 orange,0 0 yellow,0 0 green,0 0 skyblue,0 0 blue,0 0 white;
    transform: translateX(0) translateY(0);
  }
  100%{
    text-shadow: -1px -1px black,-3px -3px red,-5px -5px orange,-7px -7px yellow,-9px -9px green,-11px -11px skyblue,-13px -13px blue,-15px -15px white;
    transform: translateX(8px) translateY(8px);
  }
}

    @media(max-width: 768px) {
        top: 10rem;
        text-align: center;
        left: 8rem;
    }
 
`

export default TextStyled;