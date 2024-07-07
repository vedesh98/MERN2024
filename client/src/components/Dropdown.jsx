// import React, { useState } from "react";

// const Dropdown = ({ options, defaultValue, onChange }) => {
//   const [selectedOption, setSelectedOption] = useState(defaultValue);
//   const [isOpen, setIsOpen] = useState(false);

//   // ... rest of the component
//   // ... inside the Dropdown component

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     onChange(option); // Pass selected option to parent component
//   };


//   const handleDropdownToggle = () => {
//     setIsOpen(!isOpen);
//   };
//   // ... inside the Dropdown component

//   return (
//     <div className="dropdown">
//       <input
//         className="dropdown-button"
//         onClick={handleDropdownToggle}
//         placeholder="asas"
//         value={selectedOption || "Select an option"}
//       />
//       {isOpen && (
//         <ul className="dropdown-menu">
//           {options.map((option) => (
//             <li key={option} onClick={() => handleOptionClick(option)}>
//               {option}
//             </li>
//           ))}
//         </ul>
        
//       )}
//     </div>
//   );
// };

// export default Dropdown;


import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function SplitBasicExample() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Split Button</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SplitBasicExample;