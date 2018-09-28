import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style: none;
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  flex: 0 1 calc(25% - 15px);
  height: 300px;
  border: 1px solid #b3b3b3;
  padding: 30px 20px;
  border-radius: 5px;
  margin: 20px 10px 0;

  img {
    width: 100px;
    height: 150px;
  }

  &:nth-child(4n + 1) {
    margin-left: 0px;
  }

  &:nth-child(4n + 4) {
    margin-right: 0px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #b3b3b3;
  margin-top: 5px;

  strong {
    color: #000;
  }
`;

export const Price = styled.div`
  color: #37bea9;
  font-weight: bolder;
  font-size: 24px;
`;
