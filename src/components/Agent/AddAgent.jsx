import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Space, Row, Col, Upload, message, Select } from 'antd';
import { Alert } from 'antd';

const { Option } = Select;

const AddAgent = ({ setIsModalOpen, setIsRefresh }) => {
    const [form] = Form.useForm();
    const [imagePreview, setImagePreview] = useState({ image: null, gstProof: null, addressProof: null });
    const [alert, setAlert] = useState({
        message: "",
        description: "",
        type: "",
      });

    const onFinish = async (values) => {
    console.log('Form values:', values);


    const formData = new FormData();
    formData.append('agentName', values.agentName);
    formData.append('uan', values.uan);
    formData.append('user_email', values.email);
    formData.append('addressLine1', values.address1);
    formData.append('addressLine2', values.address2);
    formData.append('area', values.area);
    formData.append('city', values.city);
    formData.append('state', values.state);
    formData.append('country', values.country);
    formData.append('pincode', values.pincode);
    formData.append('locationOnMap', values.location);
    formData.append('logo', values.image.file);
    formData.append('gst_no', values.gstNo);
    formData.append('gst_type', values.gstType);
    formData.append('gst_proof_file', values.gstProof.file);
    formData.append('address_proof_file', values.addressProof.file);
    formData.append('defaultMarkup', values.markup);
    formData.append('taxId', values.taxid);
    formData.append('taxCity', values.taxCity);

    for (const [key, value] of Object.entries(values)) {
        console.log(`${key}: ${value}`);
      }


    try {
        const response = await fetch('https://navrang.mvd-tech.io/API/agent_add.php', {
          method: 'POST',
          body: formData,
        });
  
        const data = await response.json();
        console.log('Response:', data);
  
        if (data.status) {
            setAlert({
                message: "Agent Added SuccessFully...",
                description: "Redirecting",
                type: "success",
              });

              setTimeout(()=>{
                setIsModalOpen(false);
                form.resetFields();
                
                setAlert({
                    message: "",
                    description: "",
                    type: "",
                  });
              },2000)

              setIsRefresh(prev => !prev);

        } else {
            setAlert({
                message: "Something Went Wrong",
                description: "",
                type: "danger",
              });
        }
      } catch (error) {
         setAlert({
            message: `${error.message}`,
            description: "",
            type: "danger",
          });
      }

    };

    const handleImageUpload = (file, type) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG files!');
            return false;
        }

        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must be smaller than 2MB!');
            return false;
        }

        // Generate a preview URL and update the specific field
        const url = URL.createObjectURL(file);
        setImagePreview((prev) => ({ ...prev, [type]: url }));
        return false;
    };

    return (
        <div style={{ maxWidth: 800, margin: '2px auto', padding: '20px' }}>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="agentName"
                            label="Agent Name"
                            rules={[{ required: true, message: 'Please enter agent name' }]}
                        >
                            <Input placeholder="Enter agent name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="uan"
                            label="UAN"
                            rules={[{ required: true, message: 'Please enter UAN' }]}
                        >
                            <Input placeholder="Enter UAN" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: 'Please enter email' },
                                { type: 'email', message: 'Please enter a valid email' },
                            ]}
                        >
                            <Input placeholder="Enter email" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="address1"
                            label="Address Line 1"
                            rules={[{ required: true, message: 'Please enter Address Line 1' }]}
                        >
                            <Input placeholder="Enter Address Line 1" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="address2" label="Address Line 2">
                            <Input placeholder="Enter Address Line 2" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="area"
                            label="Area"
                            rules={[{ required: true, message: 'Please enter area' }]}
                        >
                            <Input placeholder="Enter Area" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="city"
                            label="City"
                            rules={[{ required: true, message: 'Please enter City' }]}
                        >
                            <Input placeholder="Enter City" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="state"
                            label="State"
                            rules={[{ required: true, message: 'Please enter state' }]}
                        >
                            <Input placeholder="Enter State" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="country"
                            label="Country"
                            rules={[{ required: true, message: 'Please enter Country' }]}
                        >
                            <Input placeholder="Enter Country" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="pincode"
                            label="Pincode"
                            rules={[{ required: true, message: 'Please enter Pincode' }]}
                        >
                            <Input placeholder="Enter Pincode" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="location"
                            label="Location"
                            rules={[{ required: true, message: 'Please enter Location' }]}
                        >
                            <Input placeholder="Enter Location" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="markup"
                            label="Default Markup"
                            rules={[{ required: true, message: 'Please enter Default Markup' }]}
                        >
                            <Input placeholder="Enter Markup" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="image" label="Upload Image">
                            <Upload
                                name="image"
                                accept=".jpg,.jpeg,.png"
                                showUploadList={false}
                                beforeUpload={(file) => handleImageUpload(file, 'image')}
                            >
                                <Button>Choose File</Button>
                            </Upload>
                            {imagePreview.image && (
                                <img
                                    src={imagePreview.image}
                                    alt="Uploaded"
                                    style={{ maxWidth: '100%', maxHeight: 100, marginTop: 10 }}
                                />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item name="gstNo" label="GST No.">
                            <Input placeholder="Enter GST No" />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item name="gstType" label="GST Type">
                            <Select placeholder="Select GST Type">
                                <Option value="regular">Regular</Option>
                                <Option value="composition">Composition</Option>
                                <Option value="exempted">Exempted</Option>
                                <Option value="nil">Nil</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item name="gstProof" label="GST Proof">
                            <Upload
                                name="gstProof"
                                accept=".jpg,.jpeg,.png"
                                showUploadList={false}
                                beforeUpload={(file) => handleImageUpload(file, 'gstProof')}
                            >
                                <Button>Choose File</Button>
                            </Upload>
                            {imagePreview.gstProof && (
                                <img
                                    src={imagePreview.gstProof}
                                    alt="Uploaded"
                                    style={{ maxWidth: '100%', maxHeight: 100, marginTop: 10 }}
                                />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item name="addressProof" label="Address Proof">
                            <Upload
                                name="addressProof"
                                accept=".jpg,.jpeg,.png"
                                showUploadList={false}
                                beforeUpload={(file) => handleImageUpload(file, 'addressProof')}
                            >
                                <Button>Choose File</Button>
                            </Upload>
                            {imagePreview.addressProof && (
                                <img
                                    src={imagePreview.addressProof}
                                    alt="Uploaded"
                                    style={{ maxWidth: '100%', maxHeight: 100, marginTop: 10 }}
                                />
                            )}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="taxid"
                            label="Tax Id"
                            rules={[{ required: true, message: 'Please enter TAX ID' }]}
                        >
                            <Input placeholder="Enter TAX ID" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="taxCity"
                            label="Tax City"
                            rules={[{ required: true, message: 'Please enter Tax City' }]}
                        >
                            <Input placeholder="Enter Tax City" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Add Agent
                        </Button>
                        <Button onClick={() => form.resetFields()}>Reset</Button>
                    </Space>
                </Form.Item>
                
            </Form>
            {alert.message && (
            <Alert
            className="mt-5"
            message={alert.message}
            description={alert.description}
            type={alert.type}
            showIcon
            />
        )}
        </div>
    );
};
AddAgent.propTypes = {
    setIsModalOpen: PropTypes.func.isRequired,
    setIsRefresh:PropTypes.func.isRequired,
  };

export default AddAgent;
