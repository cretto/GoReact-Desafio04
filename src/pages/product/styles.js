import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const Image = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
    height: 400px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  color: #b3b3b3;

  strong {
    color: #000;
    font-weight: bolder;
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;

  strong {
    color: #37bea9;
    font-weight: bolder;
    font-size: 30px;
  }

  button {
    margin-top: 10px;
    background: #37bea9;
    height: 40px;
    border: 0;
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bolder;
  }
`;
