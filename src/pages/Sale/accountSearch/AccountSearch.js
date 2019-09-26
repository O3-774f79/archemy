import React from 'react';
import {Table, Input, Select, Button} from 'antd';
import axios from 'axios';
import TableList from './component/TableList';
import DetailAccounts from '../Accounts/DetailAccounts';
const {Option} = Select;

export default class AccountSearch extends React.PureComponent {
  state = {
    ProductTypeID: 'เลือกประเภทสินค้า',
    ProductTypeList: [],
    ProductGetList: [],
    ProductID: 1,
    dataList: [],
    rowSelect: [],
    pageStatus: 'view',
    columns: [
      {
        title: 'AccountName',
        dataIndex: 'accountName',
        key: 'accountName',
      },
      {
        title: 'TypeName',
        dataIndex: 'typeName',
        key: 'typeName',
      },
      {
        title: 'SubTypeName',
        dataIndex: 'subTypeName',
        key: 'subTypeName',
      },
      {
        title: 'Area',
        dataIndex: 'areaName',
        key: 'areaName',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: '',
        dataIndex: 'address',
        key: 'address',
        width: '10%',
        render: (text, record) => (
          <Button onClick={() => this.handleEditClick (record)}>
            edit
          </Button>
        ),
      },
    ],
  };
  handleEditClick = record => {
    this.setState ({pageStatus: 'edit', rowSelect: record});
  };
  handleChangeType = async value => {
    console.log (`selected ${value}`);
    await this.setState ({ProductTypeID: value});
  };
  handleChangeItem = async value => {
    console.log (`selected ${value}`);
    await this.setState ({ProductID: value});
  };
  handleSubmit = () => {
    axios
      .get (
        `http://ams.leaderplanet.co.th/archemyApi/api/Account/GetListSearch?productTypeId=${this.state.ProductTypeID}&productId=${this.state.ProductID}`
      )
      .then (res => this.setState ({dataList: res.data}))
      .catch (err => this.setState (console.log (err)));
  };
  componentDidMount () {
    axios
      .get (`http://ams.leaderplanet.co.th/archemyApi/api/ProductType/GetList`)
      .then (res => this.setState ({ProductTypeList: res.data}))
      .catch (err => console.log (err));
    axios
      .get (`http://ams.leaderplanet.co.th/archemyApi/api/Product/GetList`)
      .then (res => this.setState ({ProductGetList: res.data}))
      .catch (err => console.log (err));
  }

  render () {
    return (
      <React.Fragment>
        {this.state.pageStatus === 'view'
          ? <span>
              <div style={{display: 'flex', marginBottom: 5}}>
                <div>
                  <label>Product Type :</label>
                  <Select
                    value={this.state.ProductTypeID}
                    style={{width: 200}}
                    onChange={this.handleChangeType}
                  >
                    {this.state.ProductTypeList.map (items => (
                      <Option value={items.id}>{items.productTypeName}</Option>
                    ))}
                  </Select>
                </div>
                <div>
                  <label>Product :</label>
                  <Select
                    value={this.state.ProductTypeID}
                    style={{width: 400}}
                    onChange={this.handleChangeItem}
                  >
                    {this.state.ProductGetList.map (items => (
                      <Option value={items.id}>{items.productName}</Option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Button onClick={this.handleSubmit}>Click</Button>
                </div>
              </div>
              <div style={{backgroundColor: '#fff'}}>
                <TableList
                  data={this.state.dataList}
                  columns={this.state.columns}
                />
              </div>
            </span>
          : <span>
              <label style={{fontSize: "30px"}}>Accounts {this.state.rowSelect.accountName}</label>
              <DetailAccounts selected={this.state.rowSelect} />
            </span>}
      </React.Fragment>
    );
  }
}
