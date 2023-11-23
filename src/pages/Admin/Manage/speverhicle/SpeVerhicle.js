import React, { useState } from "react";
import { Button, Modal, Table, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteXCD } from "../../../../reducers/SpeVerhicleReducer.js";
import { CreateSV } from "./CreateSV.js";
import { EditSV } from "./EditSV.js";

function SpeVerhicle() {
  const speVerhicles = useSelector((state) => state.speVerhicles);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openInforModal, setOpenInforModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const dispatch = useDispatch();

  const handleRowClick = (record) => {
    setSelectedRow(record);
  };
  const handleOpenInforModal = () => {
    setOpenInforModal(true);
  };
  const handleCloseInforModal = () => {
    setOpenInforModal(false);
  };
  const handleDeleteXCD = (record) => {
    dispatch(deleteXCD({ id: record.id }));
  };
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };
  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Đang hoạt động":
        return "green";
      case "Không hoạt động":
        return "red";
      case "Đang bảo trì":
        return "yellow";
      default:
        return "";
    }
  };

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
      dataIndex: "numberCode",
      key: "numberCode",
    },
    {
      title: "Vị trí hiện tại",
      dataIndex: "location",
      key: "location",
    },

    {
      title: "Sở hữu",
      dataIndex: "own",
      key: "own",
    },
    {
      title: "Trạng thái",
      dataIndex: "stateXCD",
      key: "stateXCD",
      render: (text, record) => {
        return (
          <Tag color={getStatusColor(record.stateXCD)}>{record.stateXCD}</Tag>
        );
      },
    },
    {
      title: "",
      key: "action",
      render: (record) => {
        return (
          <>
            <QuestionCircleOutlined
              style={{ color: "green" }}
              onClick={handleOpenInforModal}
            ></QuestionCircleOutlined>
            <EditOutlined
              style={{ color: "blue", marginLeft: "10px" }}
              onClick={handleOpenEditModal}
            ></EditOutlined>
            <DeleteOutlined
              style={{ color: "#ff0000", marginLeft: "10px" }}
              onClick={handleOpenDeleteModal}
            ></DeleteOutlined>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div
        className="speVergicleHeader"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2 style={{ marginLeft: 24, marginTop: 24 }}>Danh sách XCD</h2>
        <Button style={{ margin: 24 }} onClick={handleOpenAddModal}>
          {" "}
          Thêm xe chuyên dụng{" "}
        </Button>
      </div>

      <Table
        style={{ margin: "24px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}
        pagination={{
          pageSizeOptions: ["9", "5"],
          showSizeChanger: true,
          showQuickJumper: true,
          style: { marginRight: "15px" },
        }}
        columns={columns}
        dataSource={speVerhicles}
        size="small"
        onRow={(record) => ({
          onClick: () => {
            handleRowClick(record);
          },
        })}
      />
      {selectedRow && (
        <Modal
          open={openInforModal}
          title="Thông tin xe chuyên dụng"
          okText="Xác nhận"
          cancelText="Đóng"
          onOk={handleCloseInforModal}
          onCancel={handleCloseInforModal}
          width="600px"
        >
          <div
            className="inforSpeVerhicle"
            style={{ display: "flex", textAlign: "left" }}
          >
            <div style={{ flex: "1", display: "block" }}>
              <h5>Tên</h5>
              <p> {selectedRow.name}</p>
              <h5>Mã máy</h5>
              <p> {selectedRow.numbercode}</p>
              <h5>Loại</h5>
              <p> {selectedRow.typeXCD}</p>
            </div>
            <div style={{ display: "block", flex: "1" }}>
              <h5>Vị trí</h5>
              <p> {selectedRow.location}</p>
              <h5>Thuộc kho</h5>
              <p>{selectedRow.own}</p>
              <h5>Trạng thái</h5>
              <p>{selectedRow.stateXCD}</p>
            </div>
          </div>
        </Modal>
      )}
      {selectedRow && (
        <Modal
          open={openDeleteModal}
          okText="Xác nhận"
          cancelText="Đóng"
          title="Bạn có chắc chắn muốn vô hiệu hóa xe chuyên dụng này?"
          onCancel={handleCloseDeleteModal}
          onOk={() => {
            handleCloseDeleteModal();
            handleDeleteXCD(selectedRow);
          }}
        ></Modal>
      )}
      {openAddModal && <CreateSV closeModal={() => setOpenAddModal(false)} />}
      {openEditModal && (
        <EditSV
          closeModal={() => setOpenEditModal(false)}
          record={selectedRow}
        />
      )}
    </>
  );
}

export default SpeVerhicle;
