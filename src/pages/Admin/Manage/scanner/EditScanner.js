import React from "react";
import { editScanner } from "../../../../reducers/ScannerReducer.js";
import { useDispatch } from "react-redux";
import { Modal, Select, Form, message, Input, Row, Col } from "antd";
import "../../../../assets/styles/HeaderWareHouse.css";
import { wareHouseData } from "../../../../data/wareHouseData.js";
import { useForm } from "antd/es/form/Form.js";

export const EditScanner = ({ closeModal, record }) => {
  const dispatch = useDispatch();
  const [form] = useForm();

  const { Option } = Select;

  const listLocationOfScanner = [
    ...new Set(wareHouseData.map((warehousedata) => warehousedata.name)),
  ];
  console.log(listLocationOfScanner);
  const renderLocationOfScanner = () => {
    return listLocationOfScanner.map((item) => {
      return <Option value={item}>{item}</Option>;
    });
  };

  const onFinish = (values) => {
    closeModal();
    dispatch(
      editScanner({
        id: record.id,
        name: values.name,
        numberCode: values.numberCode,
        type: values.type,
        location: values.location,
        address: values.address,
        stateScanner: values.stateScanner,
      })
    );
    message.success("Thành công");
  };

  return (
    <Modal
      title="Chỉnh sửa máy quét"
      open={true}
      onOk={form.submit}
      onCancel={closeModal}
      okText="Xác nhận"
      cancelText="Đóng"
      width="800px"
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        form={form}
        style={{ marginTop: "24px" }}
        initialValues={{
          name: record.name,
          numberCode: record.numberCode,
          type: record.type,
          location: record.location,
          address: record.address,
          stateScanner: record.stateScanner,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="name" label="Tên" style={{ marginBottom: "24px" }}>
              <Input style={{ width: "300px" }} />
            </Form.Item>
            <Form.Item
              name="numberCode"
              label="Mã máy"
              style={{ marginBottom: "24px" }}
            >
              <Input style={{ width: "300px" }} />
            </Form.Item>
            <Form.Item
              name="type"
              label="Loại"
              style={{ marginBottom: "24px" }}
            >
              <Select
                style={{
                  width: "300px",
                  textAlign: "left",
                }}
              >
                <Option value="Cố định">Cố định</Option>
                <Option value="Di động">Di động</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="location"
              label="Vị trí"
              style={{ marginBottom: "24px" }}
            >
              <Select
                style={{
                  width: "300px",
                  textAlign: "left",
                }}
              >
                {renderLocationOfScanner()}
              </Select>
            </Form.Item>
            <Form.Item
              name="address"
              label="Địa chỉ"
              style={{ marginBottom: "24px" }}
            >
              <Input style={{ width: 300 }} />
            </Form.Item>
            <Form.Item
              name="stateScanner"
              label="Trạng thái"
              style={{ marginBottom: "24px" }}
            >
              <Select
                style={{
                  width: "300px",
                  textAlign: "left",
                }}
              >
                <Option value="Đang hoạt động">Đang hoạt động</Option>
                <Option value="Không hoạt động">Không hoạt động</Option>
                <Option value="Đang bảo trì">Đang bảo trì</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
