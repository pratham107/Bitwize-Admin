import { useState, useEffect } from 'react';
import { Input } from 'antd';
import AgentCard from './AgentCard';
import PropTypes from 'prop-types';

const { Search } = Input;

const Searchs = ({isRefresh}) => {
  const [isLoading, setIsLoading] = useState(true); // Fix: Properly initializing isLoading state
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [ setSearchQuery] = useState(''); // Fix: Proper state initialization for searchQuery

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://navrang.mvd-tech.io/API/agent_data.php');
        const data = await response.json();
        if (data.status && data.message === 'Success') {
          setAgents(data.data);
          setFilteredAgents(data.data);
          setIsLoading(false);
        } else {
          console.error('No data fetched');
          setIsLoading(true);
        }
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchData();
  }, [isRefresh]);

  const onSearch = (value) => {
    setSearchQuery(value);
    const filtered = agents.filter((agent) =>
      agent.name.toLowerCase().includes(value.toLowerCase()) // Make the search case-insensitive
    );
    setFilteredAgents(filtered);
  };

  return (
    <div>
      <div className="searchcontainer flex mb-4">
        <div className="searchInput">
          <Search
            placeholder="Search agents"
            allowClear
            enterButton="Search"
            size="middle"
            onSearch={onSearch}
            className="max-w-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-10">
        {filteredAgents.length > 0 ? (
          filteredAgents.map((agent) => (
            <AgentCard
              isLoading={isLoading}
              key={agent.id}
              name={agent.name}
              area={agent.area}
              image={agent.logo}
              city={agent.city}
              address1={agent.address1}
              address2={agent.address2}
              country={agent.country}
              pincode={agent.pincode}
              state={agent.state}
              TIN={agent.tax_id}
              Taxcity={agent.tax_city}
              Defaultmarkup={agent.markup}
            />
          ))
        ) : (
          <p>No agents found</p>
        )}
      </div>
    </div>
  );
};

Searchs.propTypes = {
    isRefresh: PropTypes.bool.isRequired,
    // setIsRefresh:PropTypes.func.isRequired,
  };

export default Searchs;
