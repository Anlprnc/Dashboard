import React from 'react';
import { SlArrowDown } from 'react-icons/sl';

const Tabs = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const tabItems = ['Activity', 'Inventory', 'Events', 'Documents', 'Overview', 'Reports', 'Photos'];
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className='w-full mt-4'>
      <ul className='hidden sm:flex w-full items-center justify-center text-sm font-light border-b-2'>
        {tabItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(item)}
            className={`
              cursor-pointer p-4 w-full text-center border-b-2
              ${index === 0 ? 'rounded-tl-lg' : ''}
              ${index === tabItems.length - 1 ? 'rounded-tr-lg' : ''}
              ${activeTab === item ? 'border-teal-400 bg-[#eafffc] text-teal-600 font-semibold' : 'border-transparent'}
            `}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className='sm:hidden w-full'>
        <ul className='flex border-b-2'>
          {tabItems.slice(0, 3).map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveTab(item)}
              className={`
                cursor-pointer p-4 w-full text-center border-b-2
                ${activeTab === item ? 'border-teal-400 bg-[#eafffc] text-teal-600 font-semibold' : 'border-transparent'}
              `}
            >
              {item}
            </li>
          ))}
          <li className='relative'>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className='p-4 w-full text-center border-b-2 border-transparent bg-gray-100 flex items-center gap-2'>
              More <SlArrowDown size={12} />
            </button>
            {dropdownOpen && (
              <ul className='absolute right-0 mt-1 w-40 bg-white border rounded shadow-lg'>
                {tabItems.slice(3).map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setActiveTab(item);
                      setDropdownOpen(false);
                    }}
                    className='p-2 hover:bg-gray-200 cursor-pointer text-center'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
