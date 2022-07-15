import React, { useState } from "react";
const TestForm = () => {
  const formData = [
    { id: 1, name: "딸기" },
    { id: 2, name: "바나나" },
    { id: 3, name: "피자" },
    { id: 4, name: "불고기" },
    { id: 5, name: "김치" },
    { id: 6, name: "볶음밥" },
    { id: 7, name: "쌀국수" },
    { id: 8, name: "육개장" },
    { id: 9, name: "거피" },
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.value, target.checked);
  };

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      //   checkedItems([...checkedItems, id]);
      setCheckedItems([...checkedItems, id]);
      console.log(checkedItems);
    } else if (!isChecked && checkedItems.includes(id)) {
      //   checkedItems.delete(id);
      const nextItems = checkedItems.filter((item) => item !== id);
      setCheckedItems(nextItems);
      console.log(checkedItems);
    }
  };

  const allCheckedHandler = (isChecked) => {
    if (isChecked) {
      const nextItems = formData.map((data) => {
        return data.name;
      });
      console.log(nextItems);
      setCheckedItems(nextItems);
      setIsAllChecked(true);
      console.log(checkedItems);
      //   console.log(isAllChecked);
    } else {
      setCheckedItems([]);
      setIsAllChecked(false);
    }
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={() => allCheckedHandler(!isAllChecked)}
          ></input>
          전체
        </label>
      </div>
      {formData.map((item) => (
        <label key={item.id}>
          <input
            type="checkbox"
            value={item.name}
            onChange={checkHandler}
            checked={checkedItems.includes(item.name)}
          />
          {item.name}
        </label>
      ))}
    </div>
  );
};

export default TestForm;
