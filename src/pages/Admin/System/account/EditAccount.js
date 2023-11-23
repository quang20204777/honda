import React from "react";
import {
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  message,
  DatePicker,
} from "antd";
import { useDispatch } from "react-redux";
import { makerData } from "../../../../data/makerData.js";
import { editAccount } from "../../../../reducers/AccountReducer.js";
import dayjs from "dayjs";

export const EditAccount = ({ closeModal, record }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Option } = Select;

  const listMakerOfAccount = [...new Set(makerData.map((maker) => maker.name))];
  const renderMakerOfAccount = () => {
    return listMakerOfAccount.map((item) => {
      return <Option value={item}>{item}</Option>;
    });
  };
  const onFinish = (values) => {
    closeModal();
    dispatch(
      editAccount({
        id: record.id,
        name: values.name,
        phoneNumber: values.phoneNumber,
        birthDay: values.birthDay.format("DD/MM/YYYY"),
        email: values.email,
        wareHouse: values.wareHouse,
        role: values.role,
        stateAccount: values.stateAccount,
      })
    );
    message.success("Thành công");
  };

  return (
    <>
      <Modal
        title="Chỉnh sửa tài khoản"
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
            phoneNumber: record.phoneNumber,
            birthDay: dayjs(record.birthDay, "DD/MM/YYYY"),
            email: record.email,
            wareHouse: record.wareHouse,
            role: record.role,
            stateAccount: record.stateAccount,
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Họ và tên"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy nhập tên người dùng!",
                  },
                ]}
                style={{ marginBottom: "24px" }}
              >
                <Input style={{ width: "300px" }} />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy nhập số điện thoại!",
                  },
                  {
                    pattern: /^[0-9]+$/,
                    message: "Số điện thoại chỉ được chứa các chữ số!",
                  },
                  {
                    len: 10,
                    message: "Số điện thoại phải có độ dài 10 chữ số!",
                  },
                ]}
                style={{ marginBottom: "24px" }}
              >
                <Input style={{ width: "300px" }} />
              </Form.Item>
              <Form.Item
                name="birthDay"
                label="Ngày sinh"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy chọn ngày sinh!",
                  },
                ]}
                style={{ marginBottom: "24px" }}
              >
                <DatePicker style={{ width: "300px" }} format="DD/MM/YYYY" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy nhập email!",
                  },
                  {
                    type: "email",
                    message: "Định dạng email không đúng!",
                  },
                ]}
                style={{ marginBottom: "24px" }}
              >
                <Input style={{ width: "300px" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="wareHouse"
                label="Kho"
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
                >
                  {renderMakerOfAccount()}
                </Select>
              </Form.Item>
              <Form.Item
                name="role"
                label="Vai trò"
                rules={[
                  {
                    required: true,
                    message: "Xin hãy chọn vai trò!",
                  },
                ]}
                style={{ marginBottom: "24px" }}
              >
                <Select
                  style={{
                    width: "300px",
                    textAlign: "left",
                  }}
                >
                  <Option value="Tài xế"> Tài xế</Option>
                  <Option value="Quản lý kho">Quản lý kho</Option>
                  <Option value="Maker">Maker</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="stateAccount"
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
                >
                  <Option value="Đang hoạt động">Đang hoạt động</Option>
                  <Option value="Không hoạt động">Không hoạt động</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
