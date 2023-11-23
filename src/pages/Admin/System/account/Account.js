import React, { useState } from "react";
import { Button, Modal, Table, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteAccount } from "../../../../reducers/AccountReducer.js";
import { CreateAccount } from "./CreateAccount.js";
import { EditAccount } from "./EditAccount.js";

function Account() {
  const accounts = useSelector((state) => state.accounts);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openInforModal, setOpenInforModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const dispatch = useDispatch();

  const handleRowClick = (record) => {
    setOpenInforModal(true);
    setSelectedRow(record);
  };
  const handleOpenInforModal = () => {
    setOpenInforModal(true);
  };
  const handleCloseInforModal = () => {
    setOpenInforModal(false);
  };
  const handleDeleteXCD = (record) => {
    dispatch(deleteAccount({ id: record.id }));
  };
  const handleOpenDeleteModal = (event) => {
    event.stopPropagation();
    setOpenDeleteModal(true);
  };
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };
  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };
  const handleOpenEditModal = (event) => {
    setOpenEditModal(true);
    event.stopPropagation();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Đang hoạt động":
        return "green";
      case "Không hoạt động":
        return "red";
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
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Vai trò",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Trạng thái",
      dataIndex: "stateAccount",
      key: "stateAccount",
      render: (text, record) => {
        return (
          <Tag color={getStatusColor(record.stateAccount)}>
            {record.stateAccount}
          </Tag>
        );
      },
    },
    {
      title: "",
      key: "action",
      render: (record) => {
        return (
          <>
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
        className="accountHeader"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2 style={{ marginLeft: 24, marginTop: 24 }}>Danh sách tài khoản</h2>
        <Button style={{ margin: 24 }} onClick={handleOpenAddModal}>
          {" "}
          Thêm tài khoản{" "}
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
        dataSource={accounts}
        size="small"
        onRow={(record) => ({
          onClick: () => {
            handleRowClick(record);
            setOpenInforModal(true)
          },
        })}
      />
      {selectedRow && (
        <Modal
          open={openInforModal}
          title="Thông tin tài khoản"
          okText="Xác nhận"
          cancelText="Đóng"
          onOk={handleCloseInforModal}
          onCancel={handleCloseInforModal}
          width="600px"
        >
          <div
            className="inforAccount"
            style={{ display: "flex", textAlign: "left" }}
          >
            <div style={{ flex: "1", display: "block" }}>
              <h5>Họ và tên</h5>
              <p> {selectedRow.name}</p>
              <h5>Số điện thoại</h5>
              <p> {selectedRow.phoneNumber}</p>
              <h5>Ngày sinh</h5>
              <p> {selectedRow.birthDay}</p>
              <h5>Email</h5>
              <p> {selectedRow.email}</p>
            </div>
            <div style={{ display: "block", flex: "1" }}>
              <h5>Kho</h5>
              <p> {selectedRow.wareHouse}</p>
              <h5>Vai trò</h5>
              <p>{selectedRow.role}</p>
              <h5>Trạng thái</h5>
              <p>{selectedRow.stateAccount}</p>
            </div>
          </div>
        </Modal>
      )}
      {selectedRow && (
        <Modal
          open={openDeleteModal}
          okText="Xác nhận"
          cancelText="Đóng"
          title="Bạn có chắc chắn muốn vô hiệu hóa tài khoản này?"
          onCancel={handleCloseDeleteModal}
          onOk={() => {
            handleCloseDeleteModal();
            handleDeleteXCD(selectedRow);
          }}
        ></Modal>
      )}
      {openAddModal && (
        <CreateAccount closeModal={() => setOpenAddModal(false)} />
      )}
      {openEditModal && (
        <EditAccount
          closeModal={() => setOpenEditModal(false)}
          record={selectedRow}
        />
      )}
    </>
  );
}

export default Account;
