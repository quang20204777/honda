import React from "react";
import { Table, Card, Row, Col } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faWarehouse, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

const columns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Mã máy",
    dataIndex: "machineCode",
    key: "machineCode",
  },
  {
    title: "Dành cho",
    dataIndex: "destine",
    key: "destine",
  },
];

const data = [
  {
    id: "1",
    name: "John Brown",
    machineCode: 32,
    destine: "New York No. 1 Lake Park",
  },
  {
    id: "2",
    name: "Jim Green",
    machineCode: 42,
    destine: "London No. 1 Lake Park",
  },
  {
    id: "3",
    name: "Joe Black",
    machineCode: 42,
    destine: "London No. 1 Lake Park",
  },
  {
    id: "4",
    name: "Joe Black",
    machineCode: 42,
    destine: "London No. 1 Lake Park",
  },

  {
    id: "5",
    name: "Joe Black",
    machineCode: 42,
    destine: "London No. 1 Lake Park",
  },

  {
    id: "6",
    name: "Joe Black",
    machineCode: 42,
    destine: "London No. 1 Lake Park",
  },
  {
    id: "7",
    name: "Joe Black",
    machineCode: 42,
    destine: "London No. 1 Lake Park",
  },
  {
    id: "8",
    name: "Joe Black",
    machineCode: 42,
    destine: "London No. 1 Lake Park",
  },
  {
    id: "9",
    name: "Joe Black",
    machineCode: 42,
    destine: "London No. 1 Lake Park",
  },
  {
    id: "10",
    name: "Joe Black",
    machineCode: 42,
    destine: "London No. 1 Lake Park",
  },
  {
    id: "11",
    name: "Joe Black",
    machineCode: 42,
    destine: "London No. 1 Lake Park",
  },
];

function WareHouse() {
    return (
     
      <Row>
      <Col span={8}> 
      <Card size="small" title="Thông tin kho" extra={<a href="#">Chỉnh sửa</a>} style={{ width: 300, margin:'64px', textAlign:'left' }} >
      <p> <FontAwesomeIcon icon={faWarehouse} /> Kho số 1</p>
      <p> <FontAwesomeIcon icon={faAddressBook} /> Số 1, Nguyễn Chí Thanh</p>
      <p> <FontAwesomeIcon icon={faNotesMedical} /> Đây là kho đầu tiên, chứa các xe chuyên dụng dành cho Marker</p>
    </Card>
      </Col>
      <Col span={16}>
      <h2 style={{textAlign:"left"}}> Danh sách XCD đang trong kho</h2>
      <Table
      style={{ marginRight: '24px', boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}
      columns={columns}
      dataSource={data}
      size="small"
      />
      </Col>
      
      </Row>
   
   
   
    

);

      
   
}

export default WareHouse;