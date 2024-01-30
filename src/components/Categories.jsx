import { useState } from "react";

const Categories = ({ value, ClickCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => {
          return (
            <li
              key={i}
              onClick={() => ClickCategory(i)}
              className={value === i ? "active" : ""}>
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
