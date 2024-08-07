import styled from 'styled-components';

export const StyledHeartIcon = styled.div`
  display: block;
  position: absolute;
  top: 10px;
  left: 16px;
  width: 22px;
  height: 25px;

  .like {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 20;
  }

  .checkmark {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .outline, .filled {
    fill: var(--red);
    position: absolute;
  }

  .filled {
    animation: kfr-filled 2.5s;
    display: none;
  }

  .celebrate {
    position: absolute;
    animation: kfr-celebrate 1.5s;
    animation-fill-mode: forwards;
    display: none;
  }

  .poly {
    stroke: var(--red);
    fill: var(--red);
  }

  .like:checked ~ .checkmark .filled {
    display: block
  }

  .like:checked ~ .checkmark .celebrate {
    display: block
  }

  @keyframes kfr-filled {
    0% {
      opacity: 0;
      transform: scale(0);
    }
  
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
  
  @keyframes kfr-celebrate {
    0% {
      transform: scale(0);
    }
  
    50% {
      opacity: 0.8;
    }
  
    100% {
      transform: scale(1.2);
      opacity: 0;
      display: none;
    }
  }
`