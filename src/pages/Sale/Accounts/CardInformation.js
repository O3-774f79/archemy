import React from 'react';
import {Icon, Input} from 'antd';
export default class CardInformation extends React.PureComponent {
  state = {
    statusEditCard1: false,
    value1: 'value1',
  };
  render () {
    const handleSubmitCard1 = async () => {
      await this.setState ({statusEditCard1: false});
    };
    const {statusEditCard1, value1} = this.state;
    return (
      <div
        style={{
          backgroundColor: 'green',
          marginBottom: 5,
          borderRadius: 6,
          padding: 6,
          height: '350px',
          overflowY: 'auto',
        }}
      >
        <div
          header
          style={{
            height: '40px',
            borderBottom: '1px solid black',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
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
        </div>
        <div body style={{padding: 5}}>
          <div row style={{width: '100%', display: 'flex'}}>
            <div style={{width: '30%', textAlign: 'right', margin: 3}}>
              <label>Name :</label>
            </div>
            <div style={{width: '70%', margin: 3}}>
              {statusEditCard1 === true
                ? <Input value={value1} style={{height: '26px'}} />
                : <label>{value1}</label>}

            </div>
          </div>
          <div row style={{width: '100%', display: 'flex'}}>
            <div style={{width: '30%', textAlign: 'right', margin: 3}}>
              <label>Name :</label>
            </div>
            <div style={{width: '70%', margin: 3}}>
              {statusEditCard1 === true
                ? <Input value={value1} style={{height: '26px'}} />
                : <label>{value1}</label>}

            </div>
          </div>
          <div row style={{width: '100%', display: 'flex'}}>
            <div style={{width: '30%', textAlign: 'right', margin: 3}}>
              <label>Name :</label>
            </div>
            <div style={{width: '70%', margin: 3}}>
              {statusEditCard1 === true
                ? <Input value={value1} style={{height: '26px'}} />
                : <label>{value1}</label>}

            </div>
          </div>
          <div row style={{width: '100%', display: 'flex'}}>
            <div style={{width: '30%', textAlign: 'right', margin: 3}}>
              <label>Name :</label>
            </div>
            <div style={{width: '70%', margin: 3}}>
              {statusEditCard1 === true
                ? <Input value={value1} style={{height: '26px'}} />
                : <label>{value1}</label>}

            </div>
          </div>
          <div row style={{width: '100%', display: 'flex'}}>
            <div style={{width: '30%', textAlign: 'right', margin: 3}}>
              <label>Name :</label>
            </div>
            <div style={{width: '70%', margin: 3}}>
              {statusEditCard1 === true
                ? <Input value={value1} style={{height: '26px'}} />
                : <label>{value1}</label>}

            </div>
          </div>
          <div row style={{width: '100%', display: 'flex'}}>
            <div style={{width: '30%', textAlign: 'right', margin: 3}}>
              <label>Name :</label>
            </div>
            <div style={{width: '70%', margin: 3}}>
              {statusEditCard1 === true
                ? <Input value={value1} style={{height: '26px'}} />
                : <label>{value1}</label>}

            </div>
          </div>
          <div row style={{width: '100%', display: 'flex'}}>
            <div style={{width: '30%', textAlign: 'right', margin: 3}}>
              <label>Name :</label>
            </div>
            <div style={{width: '70%', margin: 3}}>
              {statusEditCard1 === true
                ? <Input value={value1} style={{height: '26px'}} />
                : <label>{value1}</label>}

            </div>
          </div>
          <div row style={{width: '100%', display: 'flex'}}>
            <div style={{width: '30%', textAlign: 'right', margin: 3}}>
              <label>Name :</label>
            </div>
            <div style={{width: '70%', margin: 3}}>
              {statusEditCard1 === true
                ? <Input value={value1} style={{height: '26px'}} />
                : <label>{value1}</label>}

            </div>
          </div>
          <div row style={{width: '100%', display: 'flex'}}>
            <div style={{width: '30%', textAlign: 'right', margin: 3}}>
              <label>Name :</label>
            </div>
            <div style={{width: '70%', margin: 3}}>
              {statusEditCard1 === true
                ? <Input value={value1} style={{height: '26px'}} />
                : <label>{value1}</label>}

            </div>
          </div>
          {statusEditCard1 === true
            ? <div
                footer
                style={{
                  position: 'fixed',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <button style={{cursor: 'pointer'}} onClick={handleSubmitCard1}>
                  submit
                </button>
              </div>
            : null}
        </div>
      </div>
    );
  }
}
