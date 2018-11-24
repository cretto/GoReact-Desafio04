import styled from 'styled-components';

export const CartList = styled.table`
  width: 100%;
  margin-top: 20px;
  text-align: left;
  padding: 0;
  border-spacing: 0;

  thead th {
    color: #b3b3b3;
    text-transform: uppercase;
    padding-top: 20px;

    border-top: 1px solid #b3b3b3;

    &:first-child {
      border-left: 1px solid #b3b3b3;
    }

    &:last-child {
      text-align: right;
      border-right: 1px solid #b3b3b3;
    }
  }
`;

export const CartItem = styled.tr`
  &:first-child {
    td {
      border-top: none;
    }
  }

  td {
    padding: 10px 0;
    border-bottom: 1px solid #b3b3b3;

    button {
      background-color: transparent;
      border: none;

      i {
        font-size: 21px;
        color: red;
        cursor: pointer;
      }
    }

    &:nth-child(3),
    &:nth-child(5) {
      color: #37bea9;
      font-weight: bolder;
      font-size: 22px;
    }

    &:nth-child(4) input {
      width: 35px;
      height: 30px;
      color: #b3b3b3;
      padding-left: 10px;
      border-radius: 5px;
      border: 1px solid #b3b3b3;
    }

    &:nth-child(6) {
      text-align: left;
    }

    &:first-child {
      width: 100px;
      padding-left: 20px;
      border-left: 1px solid #b3b3b3;
    }

    &:last-child {
      text-align: center;
      border-right: 1px solid #b3b3b3;
    }

    div.imagem {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0px;

      img {
        width: 50px;
      }
    }

    div.descricao {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 300px;

      color: #b3b3b3;

      strong {
        color: #000;
      }
    }
  }

  &:last-child td {
    border-bottom: 0;
  }

  &:first-child {
    padding-left: 20px;
  }

  &:last-child {
    padding-right: 20px;
  }
`;

export const CartInfo = styled.div`
    padding: 20px 0;
    color: #b3b3b3;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CartTotal = styled.tr`

  td {
    padding-top: 20px;
    border: none;

    &.total {
      color: #b3b3b3;
      text-transform: uppercase;
      font-size: 22px;
      padding-right: 10px;
    }

    &.value {
      color: #37bea9;
      font-weight: bolder;
      font-size: 26px;
    }
  }
`;
