import styled from 'styled-components';

export const ContactsList = styled.ol`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  counter-reset: li;
  list-style: none;

  & div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4em 0.4em 0.4em 2em;
    margin: 0.5em 0;
    background: #cface6;
    color: #444;
    text-decoration: none;
    border-radius: 0.3em;
    transition: 0.3s ease-out;
  }
  & div:hover {
    & p {
      color: white;
    }
    background: #7f6491;
  }
  & div:hover:before {
    transform: rotate(360deg);
  }
  & div:before {
    content: counter(li);
    counter-increment: li;
    position: absolute;
    left: -1.3em;
    top: 50%;
    margin-top: -1.3em;
    background-color: #2cc969;
    color: white;
    height: 2em;
    width: 2em;
    line-height: 2em;
    border: 0.3em solid white;
    text-align: center;
    font-weight: bold;
    border-radius: 2em;
    transition: all 0.3s ease-out;
  }
`;
export const ContactsDescr = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: black;
`;
export const DeleteButton = styled.button`
  padding: 12px 8px;
  border-radius: 10px;
  background-color: salmon;
  color: black;
  font-weight: 600;
  text-transform: capitalize;
  transition: all 350ms ease;

  &:hover {
    background-color: red;
    color: white;
  }
`;
