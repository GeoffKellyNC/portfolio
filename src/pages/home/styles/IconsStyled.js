import styled from 'styled-components'

const IconsStyled = styled.div`
    
    max-width: 100%;
    position: relative;
    top: 22rem;
    left: 3.5rem;
    animation: focus-in-contract 1s ease 0s 1 normal none;

  
    img{
        margin: 0.5%;
    }

    .javascript-icon{
        animation: icon 1s ease-in-out forwards infinite 1s;
        width: 6%;
        height: auto;
    }

    .html-icon{
        animation: icon 0.99s ease-in-out forwards infinite; 
        width: 6%;
        height: auto;
    }

    .react-icon{
        animation: icon 1.02s ease-in-out forwards infinite; 
        width: 6%;
        height: auto;
    }

    .css-icon{
        animation: icon 1.01s ease-in-out forwards infinite 1s;
        width: 6%;
        height: auto;
    }

    .sizedIcon{
        width: 6%;
        height: auto;
        animation: icon 1.012s ease-in-out forwards infinite 1s;
        
    }


    @keyframes intro {
        0%{
            opacity: 0;
        }

        50%{
            opacity: 0.5;
        }

        100%{
            opacity: 1;
        }
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

    .react-icon:hover,
    .html-icon:hover,
    .javascript-icon:hover,
    .css-icon:hover,
    .api-icon:hover,
    .npm-icon:hover,
    .git-icon:hover,
    .gitHub-icon:hover,
    .python-icon:hover{
        -webkit-animation: rotate-scale-up 0.5s ease-in-out both;
	        animation: rotate-scale-up 0.5s ease-in-out both;
    }

    @-webkit-keyframes rotate-scale-up {
        0% {
            -webkit-transform: scale(1) rotateZ(0);
                    transform: scale(1) rotateZ(0);
        }
        50% {
            -webkit-transform: scale(2) rotateZ(180deg);
                    transform: scale(2) rotateZ(180deg);
        }
        100% {
            -webkit-transform: scale(1) rotateZ(360deg);
                    transform: scale(1) rotateZ(360deg);
        }
    }
    @keyframes rotate-scale-up {
        0% {
            -webkit-transform: scale(1) rotateZ(0);
                    transform: scale(1) rotateZ(0);
        }
        50% {
            -webkit-transform: scale(2) rotateZ(180deg);
                    transform: scale(2) rotateZ(180deg);
        }
        100% {
            -webkit-transform: scale(1) rotateZ(360deg);
                    transform: scale(1) rotateZ(360deg);
        }
    }
    @keyframes myAnim {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
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


`

export default IconsStyled