import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
} from "antd";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import { Nav } from "react-bootstrap";
import "../css/createBank.css";
import "../index.css";
import Footer from "./Footer";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const CreateBank = () => {
  return (
    <div className="home">
      <div className="createBank">
        <div>
          <Navigation status={true} />

          <SideNavbar />
        </div>
        <div className="home">
          <div className="bankForm home">
            <h2>Create Bank</h2>
            <Form
              className="bankMainForm"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
            >
              <Form.Item label="Bank Name">
                <Input />
              </Form.Item>

              <Form.Item label="IFSC Code">
                <Input />
              </Form.Item>
              <Form.Item label="Branch Name">
                <Input />
              </Form.Item>
              <Form.Item label="Address">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item label="District">
                <Input />
              </Form.Item>
              <Form.Item label="City">
                <Input />
              </Form.Item>

              <Form.Item label="Contact Number">
                <Input type="number" />
              </Form.Item>

              <Form.Item label="Pincode">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Bank ID">
                <Input />
              </Form.Item>
              <Form.Item label="Password">
                <Input.Password />
              </Form.Item>
              <Form.Item label="Confirm Password">
                <Input.Password />
              </Form.Item>
              <Form.Item className="bankCreateButton">
                <Button type="danger">Create</Button>
              </Form.Item>
            </Form>
            <div className="footerBottom">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBank;
