import React from "react";
import { addScanner } from "../../../../reducers/ScannerReducer.js";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Select, Form, message, Row, Col, Input } from "antd";
import "../../../../assets/styles/HeaderWareHouse.css";
import { wareHouseData } from "../../../../data/wareHouseData.js";
import { useForm } from "antd/es/form/Form.js";

export const CreateScanner = ({ closeModal }) => {
  const { Option } = Select;
  const scanners = useSelector((state) => state.scanners);
  const [form] = useForm();
  const dispatch = useDispatch();

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
      addScanner({
        id: scanners[scanners.length - 1].id + 1,
        name: values.name,
        numberCode: values.numberCode,
        type: values.type,
        location: values.location,
        address: values.address,
        stateScanner: values.stateXCD,
      })
    );
    message.success("Thành công");
  };

  return (
    <Modal
      title="Thêm máy quét"
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
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Tên"
              rules={[
                {
                  required: true,
                  message: "Xin hãy nhập tên máy quét!",
                },
              ]}
              style={{ marginBottom: "24px" }}
            >
              <Input
                style={{ width: "300px" }}
                placeholder="Tên"
                // onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="numberCode"
              label="Mã máy"
              rules={[
                {
                  required: true,
                  message: "Xin hãy nhập mã máy!",
                },
              ]}
              style={{ marginBottom: "24px" }}
            >
              <Input
                style={{ width: "300px" }}
                placeholder="Mã máy"
                //     onChange={(e) => setNumberCode(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="type"
              label="Loại"
              rules={[
                {
                  required: true,
                  message: "Xin hãy chọn loại máy quét!",
                },
              ]}
              style={{ marginBottom: "24px" }}
            >
              <Select
                style={{
                  width: "300px",
                  textAlign: "left",
                }}
                placeholder="Loại"
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
              rules={[
                {
                  required: true,
                  message: "Xin hãy chọn vị trí!",
                },
              ]}
              style={{ marginBottom: "24px" }}
            >
              <Select
                style={{
                  width: "300px",
                  textAlign: "left",
                }}
                placeholder="Vị trí"
              >
                {renderLocationOfScanner()}
              </Select>
            </Form.Item>
            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[
                {
                  required: true,
                  message: "Xin hãy nhập địa chỉ!",
                },
              ]}
              style={{ marginBottom: "24px" }}
            >
              <Input style={{ width: 300 }} placeholder="Địa chỉ" />
            </Form.Item>
            <Form.Item
              name="stateXCD"
              label="Trạng thái"
              rules={[
                {
                  required: true,
                  message: "Xin hãy lựa chọn trạng thái!",
                },
              ]}
              style={{ marginBottom: "24px" }}
            >
              <Select
                style={{
                  width: "300px",
                  textAlign: "left",
                }}
                placeholder="Trạng thái"
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
