import { ISubCategory } from "mocks/product.mock";
import style from "./FilterList.module.scss";
import FilterButton from "components/FilterButton/FilterButton";

const FilterList = () => {
  const filters: ISubCategory[] = [
    {
      id: 1,
      type: "tea",
      name: "Thés",
      image: {
        src: "/assets/subcategory-images/tea-subcategory.svg",
        alt: "sous catégorie thés ",
      },
    },
    {
      id: 2,
      type: "tisane",
      name: "Tisanes",
      image: {
        src: "/assets/subcategory-images/tisane-subcategory.svg",
        alt: "sous catégorie tisanes ",
      },
    }
  ];
  return (
    <ul className={style.filters}>
    {filters.map((filter: ISubCategory) => (
      <li key={filter.id}>
         <FilterButton subCategory={filter} />
      </li>
    ))}
  </ul>
  );
};

export default FilterList;
