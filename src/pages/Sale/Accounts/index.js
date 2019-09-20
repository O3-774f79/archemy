import React from 'react';
import styled from 'styled-components';
import DetailAccounts from './DetailAccounts';
import NewAccounts from './NewAccounts';
import {Table, Icon} from 'antd';
const Header = styled.div`
    font-size: 30px
    color: black
    display: flex
`;
const Button = styled.button`
    color: black
    backgroundColor: #fff
    cursor: pointer
    borderRadius: 4px
`;
export default class Accounts extends React.PureComponent {
  state = {
    mediaSize: '',
    pageStatus: 'view',
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '',
        dataIndex: 'address',
        key: 'address',
        width: '10%',
        render: () => (
          <Button onClick={() => this.setState ({pageStatus: 'edit'})}>
            edit
          </Button>
        ),
      },
    ],
    data: [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
    ],
  };
  componentDidMount () {
    if (window.innerWidth > 1024) {
      this.setState ({mediaSize: 'pc'});
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      this.setState ({mediaSize: 'tablat'});
    } else if (window.innerWidth >= 480 && window.innerWidth <= 768) {
      this.setState ({mediaSize: 'medium'});
    } else {
      this.setState ({mediaSize: 'mobile'});
    }
  }
  render () {
    const {mediaSize, data, columns, pageStatus} = this.state;
    return (
      <React.Fragment>
        <Header>
          {pageStatus != 'view'
            ? <div>
                <Icon
                  type="left-square"
                  style={{cursor: 'pointer', marginRight: 10}}
                  onClick={() => this.setState ({pageStatus: 'view'})}
                />
              </div>
            : null}

          <div>
            {pageStatus === 'view'
              ? <label>
                  Accounts {pageStatus}
                </label>
              : pageStatus === 'create'
                  ? <label>
                      New Accounts {pageStatus}
                    </label>
                  : <label>
                      Accounts {pageStatus}
                    </label>}
          </div>
        </Header>
        {pageStatus === 'view'
          ? <div style={{marginBottom: 10}}>
              <Button onClick={() => this.setState ({pageStatus: 'create'})}>
                New Accounts
              </Button>
            </div>
          : null}

        {pageStatus === 'view'
          ? <div
              style={{backgroundColor: '#fff', padding: 10, borderRadius: 5}}
            >
              <Table dataSource={data} columns={columns} />{' '}
            </div>
          : pageStatus === 'edit'
              ? <DetailAccounts mediaSize={mediaSize} />
              : <NewAccounts mediaSize={mediaSize} />}

      </React.Fragment>
    );
  }
}
