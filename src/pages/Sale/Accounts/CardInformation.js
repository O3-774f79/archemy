import React from 'react';
import {Icon, Input} from 'antd';
import styled from 'styled-components';

const Row = styled.div`
    width: 100%
    display: flex
`;
const LabelLeft = styled.div`
    width: 30%
    text-align: right
    margin: 3px
`;
const InputRight = styled.div`
    width: 70%
    margin: 3px
`;
const Header = styled.div`
    height: 40px
    border-bottom: 1px solid black
    display: flex
    justify-content: space-between
`;
const Card = styled.div`
    border: 1px solid black
    background-color: green
    margin-bottom: 5px
    border-radius: 6px
    padding: 6px
    height: 350px
    overflow-y: auto
`;
export default class CardInformation extends React.PureComponent {
  state = {
    statusEditCard1: false,
    value1: 'value1',
  };
  //todo
  // set state = value in service
  render () {
    const handleSubmitCard1 = async () => {
      await this.setState ({statusEditCard1: false});
    };
    const {statusEditCard1, value1} = this.state;
    return (
      <Card>
        <Header>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 20,
            }}
          >
            Header
          </label>
          <Icon
            type="setting"
            style={{cursor: 'pointer'}}
            onClick={() =>
              this.setState ({
                statusEditCard1: true,
              })}
          />
        </Header>
        <div body style={{padding: 5}}>
          <Row>
            <LabelLeft>
              <label>Name :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true
                ? <Input value={value1} style={{height: '26px'}} />
                : <label>{value1}</label>}

            </InputRight>
          </Row>
          <Row>
            <LabelLeft>
              <label>Name :</label>
            </LabelLeft>
            <InputRight>
              {statusEditCard1 === true
                ? <Input value={value1} style={{height: '26px'}} />
                : <label>{value1}</label>}

            </InputRight>
          </Row>
          {statusEditCard1 === true
            ? <div footer>
                <button style={{cursor: 'pointer'}} onClick={handleSubmitCard1}>
                  submit
                </button>
              </div>
            : null}
        </div>
      </Card>
    );
  }
}
