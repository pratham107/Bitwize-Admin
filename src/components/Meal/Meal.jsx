import { useState,useRef,useEffect } from 'react';
import { Card} from 'antd';
import { Image } from 'antd';
// import { DownloadOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

const Meal = () => {
  const [isLoading] = useState(false);
  const [ setMealsData] = useState([]);
//   const [filteredMealsData, setFilteredMealsData] = useState([]);
//   const [mounted, setMounted] = useState(false);

  const isMounted = useRef(true);

  const fetchMealsData = async () => {
    try {
      const response = await fetch('https://navrang.mvd-tech.io/API/meal_data.php');
      const mealsResponse = await response.json();

      if (mealsResponse && Array.isArray(mealsResponse.data)) {
        console.log('Loaded successfully');
        if (isMounted.current) {
          setMealsData(mealsResponse.data);
        }
      } else {
        console.log('No data found');
        if (isMounted.current) {
          setMealsData([]);
        }
      }
    } catch (error) {
      console.error('Error loading meals', error);
    }
  };

  useEffect(() => {
    isMounted.current = true;
    fetchMealsData();
    return () => {
      isMounted.current = false;
    };
  }, []); 
  

  return (
    <div className='bg-slate-300'>
      <div className="cardDiv flex flex-wrap gap-10">
            <Card
              className='mt-20 ml-6 mr-6'
              loading={isLoading}
              bordered={false}
              style={{ width: 1500 }}
            >
             <div className="cardcontent flex flex-wrap">
              
               <div className="logo">
               <Image
               width={200}
               src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                preview={{
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }}
                />
               </div>
               <div className="cardDescription">
                  <h2>
                    rajma Chawal
                  </h2>
                  <div className="itemsSpec flex">
                    <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                 </div> 
                <div className="itemsSpec2 flex">
                <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                </div>
               </div>
 
             </div>
             <Flex  justify='flex-end' align='center' className='flex'>
                    <Button type="primary" className='mr-2'>Details</Button>
                    <Button type="primary">Details</Button>  
                </Flex>
            </Card>
            <Card
              className='mt-2 ml-6 mr-6'
              loading={isLoading}
              bordered={false}
              style={{ width: 1500 }}
            >
             <div className="cardcontent flex flex-wrap">
              
               <div className="logo">
               <Image
               width={200}
               src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                preview={{
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }}
                />
               </div>
               <div className="cardDescription">
                  <h2>
                    rajma Chawal
                  </h2>
                  <div className="itemsSpec flex">
                    <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                 </div> 
                <div className="itemsSpec2 flex">
                <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                </div>
               </div>
 
             </div>
             <Flex  justify='flex-end' align='center' className='flex'>
                    <Button type="primary" className='mr-2'>Details</Button>
                    <Button type="primary">Details</Button>  
                </Flex>
            </Card>
            <Card
              className='mt-2 ml-6 mr-6'
              loading={isLoading}
              bordered={false}
              style={{ width: 1500 }}
            >
             <div className="cardcontent flex flex-wrap">
              
               <div className="logo">
               <Image
               width={200}
               src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                preview={{
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }}
                />
               </div>
               <div className="cardDescription">
                  <h2>
                    rajma Chawal
                  </h2>
                  <div className="itemsSpec flex">
                    <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                 </div> 
                <div className="itemsSpec2 flex">
                <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                </div>
               </div>
 
             </div>
             <Flex  justify='flex-end' align='center' className='flex'>
                    <Button type="primary" className='mr-2'>Details</Button>
                    <Button type="primary">Details</Button>  
                </Flex>
            </Card>
            <Card
              className='mt-2 ml-6 mr-6'
              loading={isLoading}
              bordered={false}
              style={{ width: 1500 }}
            >
             <div className="cardcontent flex flex-wrap">
              
               <div className="logo">
               <Image
               width={200}
               src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                preview={{
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }}
                />
               </div>
               <div className="cardDescription">
                  <h2>
                    rajma Chawal
                  </h2>
                  <div className="itemsSpec flex">
                    <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                 </div> 
                <div className="itemsSpec2 flex">
                <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                </div>
               </div>
 
             </div>
             <Flex  justify='flex-end' align='center' className='flex'>
                    <Button type="primary" className='mr-2'>Details</Button>
                    <Button type="primary">Details</Button>  
                </Flex>
            </Card>
            <Card
              className='mt-5 ml-6 mr-6'
              loading={isLoading}
              bordered={false}
              style={{ width: 1500 }}
            >
             <div className="cardcontent flex flex-wrap">
              
               <div className="logo">
               <Image
               width={200}
               src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                preview={{
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }}
                />
               </div>
               <div className="cardDescription">
                  <h2>
                    rajma Chawal
                  </h2>
                  <div className="itemsSpec flex">
                    <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                 </div> 
                <div className="itemsSpec2 flex">
                <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                </div>
               </div>
 
             </div>
             <Flex  justify='flex-end' align='center' className='flex'>
                    <Button type="primary" className='mr-2'>Details</Button>
                    <Button type="primary">Details</Button>  
                </Flex>
            </Card>
            <Card
              className='mt-2 ml-6 mr-6'
              loading={isLoading}
              bordered={false}
              style={{ width: 1500 }}
            >
             <div className="cardcontent flex flex-wrap">
              
               <div className="logo">
               <Image
               width={200}
               src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                preview={{
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }}
                />
               </div>
               <div className="cardDescription">
                  <h2>
                    rajma Chawal
                  </h2>
                  <div className="itemsSpec flex">
                    <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                 </div> 
                <div className="itemsSpec2 flex">
                <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                </div>
               </div>
 
             </div>
             <Flex  justify='flex-end' align='center' className='flex'>
                    <Button type="primary" className='mr-2'>Details</Button>
                    <Button type="primary">Details</Button>  
                </Flex>
            </Card>
            <Card
              className='mt-2 ml-6 mr-6'
              loading={isLoading}
              bordered={false}
              style={{ width: 1500 }}
            >
             <div className="cardcontent flex flex-wrap">
              
               <div className="logo">
               <Image
               width={200}
               src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                preview={{
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }}
                />
               </div>
               <div className="cardDescription">
                  <h2>
                    rajma Chawal
                  </h2>
                  <div className="itemsSpec flex">
                    <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                 </div> 
                <div className="itemsSpec2 flex">
                <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                </div>
               </div>
 
             </div>
             <Flex  justify='flex-end' align='center' className='flex'>
                    <Button type="primary" className='mr-2'>Details</Button>
                    <Button type="primary">Details</Button>  
                </Flex>
            </Card>
            <Card
              className='mt-2 ml-6 mr-6'
              loading={isLoading}
              bordered={false}
              style={{ width: 1500 }}
            >
             <div className="cardcontent flex flex-wrap">
              
               <div className="logo">
               <Image
               width={200}
               src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                preview={{
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }}
                />
               </div>
               <div className="cardDescription">
                  <h2>
                    rajma Chawal
                  </h2>
                  <div className="itemsSpec flex">
                    <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                 </div> 
                <div className="itemsSpec2 flex">
                <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                </div>
               </div>
 
             </div>
             <Flex  justify='flex-end' align='center' className='flex'>
                    <Button type="primary" className='mr-2'>Details</Button>
                    <Button type="primary">Details</Button>  
                </Flex>
            </Card>
            <Card
              className='mt-2 ml-6 mr-6'
              loading={isLoading}
              bordered={false}
              style={{ width: 1500 }}
            >
             <div className="cardcontent flex flex-wrap">
              
               <div className="logo">
               <Image
               width={200}
               src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                preview={{
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }}
                />
               </div>
               <div className="cardDescription">
                  <h2>
                    rajma Chawal
                  </h2>
                  <div className="itemsSpec flex">
                    <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                 </div> 
                <div className="itemsSpec2 flex">
                <h2>
                        Meal offered : Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h2>
                    <h2>
                        meal type : Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <h2>
                        Meal Fkrmat : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.
                    </h2>
                </div>
               </div>
 
             </div>
             <Flex  justify='flex-end' align='center' className='flex'>
                    <Button type="primary" className='mr-2'>Details</Button>
                    <Button type="primary">Details</Button>  
                </Flex>
            </Card>
      </div>
    </div>
  );
};

export default Meal;
