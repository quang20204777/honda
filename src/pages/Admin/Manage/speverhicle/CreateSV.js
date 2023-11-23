import React, { useState } from "react";
import { Col, Form, Input, Modal, Row, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addXCD } from "../../../../reducers/SpeVerhicleReducer.js";
import { wareHouseData } from "../../../../data/wareHouseData.js";
import { makerData } from "../../../../data/makerData.js";

export const CreateSV = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Option } = Select;
  const speVerhicles = useSelector((state) => state.speVerhicles);
  //   const [name, setName] = useState("");
  //   const [numberCode, setNumberCode] = useState("");
  //   const [typeXCD, setTypeXCD] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [own, setOwn] = useState("");
  //   const [stateXCD, setStateXCD] = useState("");
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
      addXCD({
        id: speVerhicles[speVerhicles.length - 1].id + 1,
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
        title="Thêm xe chuyên dụng"
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
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Tên"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy nhập tên xe chuyên dụng!",
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
                name="typeXCD"
                label="Loại"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy chọn loại xe chuyên dụng!",
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
                  <Option value="XCD-lớn">XCD-lớn</Option>
                  <Option value="XCD-nhỏ">XCD-nhỏ</Option>
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
                  {renderLocationOfXCD()}
                </Select>
              </Form.Item>
              <Form.Item
                name="own"
                label="Thuộc kho"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy chọn kho!",
                  },
                ]}
                style={{ marginBottom: "24px" }}
              >
                <Select
                  style={{
                    width: "300px",
                    textAlign: "left",
                  }}
                  placeholder="Thuộc kho"
                >
                  {renderMakerOfXCD()}
                </Select>
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
    </>
  );
};
