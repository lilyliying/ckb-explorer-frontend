import styled from 'styled-components'

export const TransactionsItem = styled.div`
  width: 1200px;
  padding: 38px 83px 41px 83px;
  margin: 0 auto;
  margin-top: 10px;
  background: white;
  border: 0px solid white;
  border-radius: 6px;
  box-shadow: 0px 5px 9px rgb(233, 233, 233);
  display: flex;
  flex-direction: column;

  .transaction__hash__panel {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .transaction_hash {
      font-size: 16px;
      color: rgb(75, 188, 142);
    }

    .transaction_block {
      font-size: 16px;
      color: rgb(75, 188, 142);
    }
  }

  .transaction__separate {
    width: 100%;
    height: 1px;
    margin-top: 30px;
    background: rgb(233, 233, 233);
  }

  .transaction__input__output {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 68px;
      height: 68px;
    }
  }
`

export const TransactionsCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 22px;

  .transaction__cell__hash {
    font-size: 16px;
    color: rgb(75, 188, 142);
    max-width: 320px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .transaction__cell__capacity {
    font-size: 16px;
    color: rgb(136, 136, 136);
    margin-left: 25px;
  }
`