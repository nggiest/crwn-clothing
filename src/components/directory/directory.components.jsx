import CategoryItem from "../component-item/component-item.component";
import "./directory.styles.scss";

const Directory = ({categories}) => {
    return (
        <div className="categories-container">
        {categories.map((item) => (
          <CategoryItem category={item}/>
        ))}
      </div>
    )
}

export default Directory;