import React from "react";
import { Col, Form, Input, Modal, Row, Select, message } from "antd";
import { useDispatch } from "react-redux";
import { editXCD } from "../../../../reducers/SpeVerhicleReducer.js";
import { wareHouseData } from "../../../../data/wareHouseData.js";
import { makerData } from "../../../../data/makerData.js";

export const EditSV = ({ closeModal, record }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Option } = Select;

  const listLocationOfXCD = [
    ...new Set(wareHouseData.map((warehousedata) => warehousedata.name)),
  ];
  const renderLocationOfXCD = () => {
    return listLocationOfXCD.map((item) => {
      return <Option value={item}>{item}</Option>;
    });
  };

  const listMakerOfXCD = [...new Set(makerData.map((maker) => maker.name))];
  const renderMakerOfXCD = () => {
    return listMakerOfXCD.map((item) => {
      return <Option value={item}>{item}</Option>;
    });
  };
  const onFinish = (values) => {
    closeModal();
    dispatch(
      editXCD({
        id: record.id,
        name: values.name,
        numberCode: values.numberCode,
        typeXCD: values.typeXCD,
        location: values.location,
        own: values.own,
        stateXCD: values.stateXCD,
      })
    );
    message.success("Thành công");
  };

  return (
    <>
      <Modal
        title="Chỉnh sửa xe chuyên dụng"
        width="800px"
        open="true"
        okText="Xác nhận"
        cancelText="Đóng"
        onCancel={closeModal}
        onOk={form.submit}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          style={{ marginTop: "24px" }}
          initialValues={{
            name: record.name,
            numberCode: record.numberCode,
            typeXCD: record.typeXCD,
            location: record.location,
            own: record.own,
            stateXCD: record.stateXCD,
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên"
                style={{ marginBottom: "24px" }}
              >
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
                name="typeXCD"
                label="Loại"
                style={{ marginBottom: "24px" }}
              >
                <Select
                  style={{
                    width: "300px",
                    textAlign: "left",
                  }}
                >
                  <Option value="XCD-lớn">XCD-lớn</Option>
                  <Option value="XCD-nhỏ">XCD-nhỏ</Option>
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
                  {renderLocationOfXCD()}
                </Select>
              </Form.Item>
              <Form.Item
                name="own"
                label="Thuộc kho"
                style={{ marginBottom: "24px" }}
              >
                <Select
                  style={{
                    width: "300px",
                    textAlign: "left",
                  }}
                >
                  {renderMakerOfXCD()}
                </Select>
              </Form.Item>
              <Form.Item
                name="stateXCD"
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
    </>
  );
};
