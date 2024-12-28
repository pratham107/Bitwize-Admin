
import { Card, Row, Col } from 'antd';
import PropTypes from 'prop-types';

const AgentCard = ({
    isLoading,
    name,
    area,
    city,
    address1,
    address2,
    country,
    pincode,
    state,
    TIN,
    Taxcity,
    Defaultmarkup,
}) => (
  <Card
    className="border-gray-500 mt-5"
    loading={isLoading}
    bordered={true}
    style={{
      width: '100%',
      maxWidth: 1500,
    }}
  >
    <Row align="middle" gutter={[16, 16]} wrap>
      <Col span={4}>
        <img
          src="https://picsum.photos/150" // Random image from the internet
          alt="Random"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
      </Col>

      {/* Right side: Content */}
      <Col span={16}>
        <Row gutter={[16, 16]} wrap>
          {/* Section 1: Agent Info */}
          <Col xs={24} sm={12} md={8}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Agent Name: {name}</p>
            <p style={{ margin: 0, fontWeight: 'bold' }}>{address1}{address2}</p>
            <p style={{ margin: 0 }}>{area},{city},{state}</p>
            <p style={{ margin: 0 }}>{country},{pincode}</p>
          </Col>

          {/* Section 2: Tax and Account Info */}
          <Col xs={24} sm={12} md={8}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Tax ID: {TIN}</p>
            <p style={{ margin: 0 }}>Tax city{Taxcity}</p>
            <p style={{ margin: 0 }}>Markup:{Defaultmarkup}</p>
          </Col>

          {/* Section 3: Another User Info */}
          <Col xs={24} sm={12} md={8}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Name: {name}</p>
            <p style={{ margin: 0 }}>Account No: 1234567890</p>
            <p style={{ margin: 0 }}>User Email: user@example.com</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Card>
);

AgentCard.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    pincode: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    TIN: PropTypes.string.isRequired,
    Taxcity: PropTypes.string.isRequired,
    Defaultmarkup: PropTypes.string.isRequired,
  };

export default AgentCard;
