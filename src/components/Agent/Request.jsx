import { Table, Alert, Button } from 'antd';
import { useState, useEffect } from 'react';

const Request = () => {
  const [request, setRequest] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setAlert] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://navrang.mvd-tech.io/API/agent_notappro_list.php');
      const data = await response.json();
      if (data.status && data.message === 'Success') {
        setRequest(
          data.data.map((item) => ({
            ...item,
            key: item.id, // Use unique identifier from API
          }))
        );
      } else {
        setRequest([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setRequest([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAction = async (record, isApproved) => {
    try {
      const response = await fetch(
        `https://navrang.mvd-tech.io/API/agent_confirmation.php?id=${record.id}&isApproved=${isApproved}`,
        { method: 'GET' },
      );
      const result = await response.json();

      if (result.status && result.message === 'Success') {
        setAlert({ type: 'success', message: isApproved === 1 ? 'Agent Approved' : 'Agent Rejected' });
      } else {
        setAlert({ type: 'error', message: 'Something Went Wrong' });
      }
    } catch (error) {
      console.error(error);
      setAlert({ type: 'error', message: 'Error occurred during the action' });
    } finally {
      fetchData();

      // Hide the alert automatically after 1.5 seconds
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }
  };

  const columns = [
    {
      title: 'Sr No',
      dataIndex: 'key', // Match with unique key
      key: 'srNo',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type="primary" className='mr-5' onClick={() => handleAction(record, 1)}>
            Approve
          </Button>
          <Button danger onClick={() => handleAction(record, 2)}>
            Reject
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      {alert && <Alert message={alert.message} type={alert.type} banner />}
      <Table
        loading={isLoading}
        dataSource={request}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>Details: {JSON.stringify(record)}</p>
          ),
          rowExpandable: () => true,
        }}
      />
    </>
  );
};

export default Request;
