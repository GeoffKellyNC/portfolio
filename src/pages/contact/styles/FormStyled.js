import styled from 'styled-components'


const StyledContactForm = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 100%;
        margin: auto;
        ${'' /* color: red; */}
        border: none;

    input{
        color: white;
        margin-bottom: 5%;
    }

    .input-box{
        border:0;
        border-bottom:1px solid white;  
        background:transparent;
        width:100%;
        padding:8px 0 5px 0;
        font-size:16px;
    }

    input::placeholder {
        color: ${pr => pr.theme.Yellow};
        font-family: ${pr => pr.theme.MainFont}
    }

    textarea {
        color: white;
    }

    textarea::placeholder {
        color: ${pr => pr.theme.Yellow};
        font-family: ${pr => pr.theme.MainFont}

    }

    button, button::after {
        width: 9em;
        height: 2em;
        font-size: 20px;
        font-family: 'poppins', cursive;
        background: linear-gradient(45deg, transparent 5%, #f0a202 5%);
        border: 0;
        color: #fff;
        box-shadow: 6px 0px 0px #08B2E3;
        outline: transparent;
        position: relative;
        margin-top: 10%;
    }

    button::after {
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);
        
        content: 'Submit';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        ${'' /* background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%); */}
        text-shadow: -3px -3px 0px #08B2E3, 3px 3px 0px #00E6F6;
        clip-path: var(--slice-0);
    }

    button:hover::after {
        animation: 0.8s glitch;
        animation-timing-function: steps(2, end);
    }

    button:hover{
        animation: 0.8s glitch;
        animation-timing-function: steps(2, end);
    }

    @keyframes glitch {
        0% {
            clip-path: var(--slice-1);
            transform: translate(-20px, -10px);
        }
        10% {
            clip-path: var(--slice-3);
            transform: translate(10px, 10px);
        }
        20% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 10px);
        }
        30% {
            clip-path: var(--slice-3);
            transform: translate(0px, 5px);
        }
        40% {
            clip-path: var(--slice-2);
            transform: translate(-5px, 0px);
        }
        50% {
            clip-path: var(--slice-3);
            transform: translate(5px, 0px);
        }
        60% {
            clip-path: var(--slice-4);
            transform: translate(5px, 10px);
        }
        70% {
            clip-path: var(--slice-2);
            transform: translate(-10px, 10px);
        }
        80% {
            clip-path: var(--slice-5);
            transform: translate(20px, -10px);
        }
        90% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 0px);
        }
        100% {
            clip-path: var(--slice-1);
            transform: translate(0);
        }
}





`

export default StyledContactForm;