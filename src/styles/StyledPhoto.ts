import styled from 'styled-components';

export const Frame = styled.div`
  width: 100%;
  height: 250px;
  padding: 1em;
  box-sizing: border-box;

  @media only screen and (min-width: 600px) {
    width: 50%;
  }

  @media only screen and (min-width: 960px) {
    width: 33.33%;
  }

  @media only screen and (min-width: 1280px) {
    width: 25%;
  }

  @media only screen and (min-width: 1920px) {
    width: 20%;
    height: 400px;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px 0 var(--light-grey);
  transition: 0.4s;
  border-radius: var(--border-radius-subtle);

  &:hover img {
    opacity: 0.3;
  }

  &:hover .content {
    opacity: 0.7;
  }
  
  img {
    display: block;
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-subtle);
  }

  .content {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    color: var(--white);
    width: 100%;
    height: 100%;
    padding: 0 5px;
    background-color: var(--dark-grey);
    border-radius: var(--border-radius-subtle);
  }

  .info {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    font-weight: 700;
  }

  .author {
    font-style: italic;
  }

  .favourite-container {
    position: absolute;
    width: 100%;
    bottom: 1.25em;
}

.favourite {
  background-color: var(--transparent);
  border: 2px solid var(--white);
  border-radius: var(--border-radius-semi-circle);
  color: var(--white);
  padding: 0.5em 0.85em;
  font-size: 0.9em;
  cursor: pointer;
  &:hover {
    background-color: var(--off-white);
  }
}
`;

export const Separator = styled.hr`
  border-top: 1px solid var(--white);
  padding: 0 2em;
`;