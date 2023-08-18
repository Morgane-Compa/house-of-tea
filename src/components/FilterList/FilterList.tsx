import { ISubCategory } from "mocks/product.mock";
import style from "./FilterList.module.scss";
import FilterButton from "components/FilterButton/FilterButton";

interface FilterListProps{
  filters: ISubCategory[] |undefined;
  getSubCategory: (subCat : ISubCategory) => void;
}
const FilterList = (props: FilterListProps) => {
  const {filters} = props;
  const {getSubCategory} = props;
  return (
    <ul className={style.filters}>
    {filters?.map((filter: ISubCategory) => (
      <li key={filter.id}>
         <FilterButton subCategory={filter} selectSubCategory={getSubCategory}/>
      </li>
    ))}
  </ul>
  );
};

export default FilterList;
