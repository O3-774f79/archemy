import React from 'react';
import CardInformation from './CardInformation';
export default class DetailAccounts extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <div style={{display: 'flex'}}>
          <div
            style={{
              width: '40%',
              borderRight: '1px solid black',
              height: '100%',
              padding: 10,
            }}
          >
            <CardInformation />
            <div style={{backgroundColor: 'red', marginBottom: 5}}>
              card1
            </div>
          </div>
          <div style={{width: '60%'}}>2</div>
        </div>
      </React.Fragment>
    );
  }
}
