import React, { useState } from "react";
import { Table, Button, Modal, Input } from "antd";
import "../../../../assets/styles/HeaderWareHouse.css";
import {
  takeoutdata,
  speVerhicleTakeOut,
} from "../../../../data/takoutdata.js";
import { QuestionCircleOutlined } from "@ant-design/icons";

function TakeOut() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [data, setData] = useState(takeoutdata);
  const data2 = speVerhicleTakeOut;

  const handleRowClick = (record) => {
    // Xử lý sự kiện click và lưu thông tin hàng được chọn vào state
    setSelectedRow(record);
  };

  const showModal = () => {
    setIsSelecting(true);
  };
  const handleOk = () => {
    setIsSelecting(false);
  };
  const handleCancel = () => {
    setIsSelecting(false);
  };

  const columns2 = [
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
      title: "Numbercode",
      dataIndex: "numbercode",
      key: "numbercode",
    },
    {
      title: "Loại",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "Trạng thái",
      dataIndex: "state",
      key: "state",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Từ",
      dataIndex: "from",
      key: "from",
    },
    {
      title: "Đến",
      dataIndex: "to",
      key: "to",
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
    },

    {
      title: "Trạng thái",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "",
      key: "select",
      render: (record) => {
        return (
          <>
            <QuestionCircleOutlined
              onClick={() => showModal()}
              style={{ color: "green" }}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="takeOutHeader">
        <h2 style={{ marginLeft: 24 }}>Danh sách Takeout</h2>
        <Button style={{ margin: 24 }}>Tạo Takeout mới</Button>
      </div>

      <Table
        style={{ margin: "24px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}
        columns={columns}
        dataSource={data}
        size="small"
        onRow={(record, rowIndex) => ({
          onClick: () => handleRowClick(record),
        })}
      />

      {selectedRow && (
        <Modal
          title="Thông tin Takeout"
          open={isSelecting}
          onOk={handleOk}
          onCancel={handleCancel}
          width="800px"
        >
          <div
            className="information"
            style={{ display: "flex", textAlign: "left" }}
          >
            <div style={{ display: "block" }}>
              <h5>Vận chuyển từ</h5>
              <p> {selectedRow.from}</p>
              <h5>Vận chuyển đến</h5>
              <p> {selectedRow.to}</p>
              <h5>Ngày vận chuyển</h5>
              <p> {selectedRow.time}</p>
              <h5>Tài xế</h5>
              <p> Nguyen Van A</p>
              <h5>Biển số xe</h5>
              <p>So 9</p>
            </div>
            <Table
              columns={columns2}
              dataSource={data2}
              style={{ marginLeft: "64px" }}
              size="small"
            ></Table>
          </div>
        </Modal>
      )}
    </>
  );
}

export default TakeOut;

// <Modal
// title="Chỉnh sửa"
// open={isSelecting}
// okText="Save"
// onCancel={()=> {resetEditting()}}
// onOk={()=>{
//     setData((pre) => {
//         return pre.map( takeout => {
//             if (takeout.id===edittingTakeOut.id) {
//                 return edittingTakeOut;
//             }else {
//                 return takeout;
//             }
//         })
//     })
//     resetEditting()
// }}>
// <Input value={edittingTakeOut?.from }  onChange={(e)=> {
//     setEdittingTakeOut(pre=>{
//         return {...pre, from: e.target.value}
//     })
// }}/>

// <Input value={edittingTakeOut?.to}  onChange={(e)=> {
//     setEdittingTakeOut(pre=>{
//         return {...pre, to: e.target.value}
//     })
// }}/>

// <Input value={edittingTakeOut?.time }  onChange={(e)=> {
//     setEdittingTakeOut(pre=>{
//         return {...pre, time: e.target.value}
//     })
// }}/>

// <Input value={edittingTakeOut?.state }  onChange={(e)=> {
//     setEdittingTakeOut(pre=>{
//         return {...pre, state: e.target.value}
//     })
// }}/>

// </Modal>

// const [edittingTakeOut, setEdittingTakeOut]=useState(null);
// const resetEditting = ()=> {
//   setIsSelecting(false);
//   setEdittingTakeOut(null);
// }

// setEdittingTakeOut({...record});
