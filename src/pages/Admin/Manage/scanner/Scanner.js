import React, { useState } from "react";
import { Button, Modal, Table, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { CreateScanner } from "./CreateScanner.js";
import { deleteScanner } from "../../../../reducers/ScannerReducer.js";
import { EditScanner } from "./EditScanner.js";

function Scanner() {
  const scanners = useSelector((state) => state.scanners);
  const [selectAdd, setSelectAdd] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectEdit, setSelectEdit] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const dispatch = useDispatch();
  const showEditModal = () => {
    setSelectEdit(true);
  };
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };
  const handleDelete = (record) => {
    dispatch(deleteScanner({ id: record.id }));
  };
  const showAddModal = () => {
    setSelectAdd(true);
  };
  const showInforModal = () => {
    setIsSelecting(true);
  };

  const handleInforOk = () => {
    setIsSelecting(false);
  };
  const handleInforCancel = () => {
    setIsSelecting(false);
  };

  const handleRowClick = (record) => {
    setSelectedRow(record);
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
      title: "Loại",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Vị trí",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái",
      dataIndex: "stateScanner",
      key: "stateScanner",
      render: (text, record) => (
        <Tag color={getStatusColor(record.stateScanner)}>
          {record.stateScanner}
        </Tag>
      ),
    },
    {
      title: "",
      key: "action",
      render: (record) => {
        return (
          <>
            <QuestionCircleOutlined
              onClick={() => showInforModal()}
              style={{ color: "green" }}
            />

            <EditOutlined
              style={{ color: "blue", marginLeft: "10px" }}
              onClick={() => showEditModal()}
            />

            <DeleteOutlined
              style={{ color: "#ff0000", marginLeft: "10px" }}
              onClick={() => handleOpenDeleteModal()}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      <div
        className="scanner"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2 style={{ marginLeft: 24 }}>Danh sách máy quét</h2>
        <Button style={{ margin: 24 }} onClick={() => showAddModal()}>
          {" "}
          Thêm máy quét{" "}
        </Button>
      </div>
      <Table
        style={{ margin: "24px", boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)" }}
        columns={columns}
        pagination={{
          pageSizeOptions: ["9", "5"],
          showSizeChanger: true,
          showQuickJumper: true,
          style: { marginRight: "15px" },
        }}
        dataSource={scanners}
        size="small"
        onRow={(record, rowIndex) => ({
          onClick: () => {
            handleRowClick(record);
          },
        })}
      />
      {selectedRow && (
        <Modal
          title="Thông tin máy quét"
          open={isSelecting}
          onOk={handleInforOk}
          onCancel={handleInforCancel}
          width="600px"
        >
          <div
            className="information"
            style={{ display: "flex", textAlign: "left" }}
          >
            <div style={{ display: "block", width: "276px" }}>
              <h5>Tên</h5>
              <p> {selectedRow.name}</p>
              <h5>Mã máy</h5>
              <p> {selectedRow.numberCode}</p>
              <h5>Loại</h5>
              <p> {selectedRow.type}</p>
            </div>

            <div style={{ display: "block" }}>
              <h5>Vị trí</h5>
              <p> Kho số 1</p>
              <h5>Địa chỉ</h5>
              <p>{selectedRow.address}</p>
              <h5>Trạng thái</h5>
              <p>{selectedRow.stateScanner}</p>
            </div>
          </div>
        </Modal>
      )}
      {selectAdd && <CreateScanner closeModal={() => setSelectAdd(false)} />}
      {selectedRow && (
        <Modal
          open={openDeleteModal}
          title="Bạn có chắc chắn muốn vô hiệu hóa máy quét này?"
          okText="Xác nhận"
          cancelText="Đóng"
          onOk={() => {
            handleCloseDeleteModal();
            handleDelete(selectedRow);
          }}
          onCancel={() => handleCloseDeleteModal()}
        ></Modal>
      )}
      {selectEdit && (
        <EditScanner
          closeModal={() => setSelectEdit(false)}
          record={selectedRow}
        />
      )}
    </>
  );
}

export default Scanner;
