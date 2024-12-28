import { useState } from 'react';
import { Tabs } from 'antd';
import { Button, Modal  } from 'antd';

import Search from './Search';
import AddAgent from './AddAgent';
import Request from './Request';

const Agent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };

      const handleCancel = () => {
        setIsModalOpen(false);
      };

  const items = [
    {
      key: '1',
      label: 'Search',
      children: <Search />,  // Use 'children' with lowercase 'c'
    },
    {
      key: '2',
      label: 'Request', 
      children: <Request />, // You can add content for the "Request" tab here
    },
  ];    

  return (
    <div className="mt-20 mr-5 ml-5 flex flex-col">
      {/* Button aligned to the right */}
      <div >
        <Button className="flex justify-end" type="primary" shape="round" onClick={showModal}>+ Add Agent</Button>
      
      <Tabs defaultActiveKey="1" items={items}/>
      </div>
      <Modal width={1000} title="Add Agent" open={isModalOpen} onCancel={handleCancel}>
        <AddAgent
         setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </div>
  );
};

export default Agent;
