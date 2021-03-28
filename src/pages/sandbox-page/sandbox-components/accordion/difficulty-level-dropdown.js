import React, { useState, useEffect, useRef } from "react";
// import "./accordion.css";
const options = [
  {
    label: "I'm too young to die",
    value: "blue",
  },
  {
    label: "Hurt Me Plenty",
    value: "orange",
  },
  {
    label: "Nightmare",
    value: "red",
  },
];

const DifficultyLevelDropdown = () => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          setSelected(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <h3 className="label">Life Mode</h3>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text" style={{ color: `${selected.value}` }}>
            {selected.label}
          </div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifficultyLevelDropdown;
