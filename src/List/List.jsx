import styles from './List.module.css';
import propTypes from 'prop-types'

function List(props){
    
    //fruits.sort((a,b) => a.name.localeCompare(b.name));  //alphabetical order
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //reverse order
    // fruits.sort((a,b) => a.calories - b.calories)
    //fruits.sort((a,b) => b.calories - a.calories)

    //const localFruits = fruits.filter(fruit => fruit.calories<90)
    //const localFruits = fruits.filter(fruit => fruit.calories>70);

    const itemList = props.item
    const category = props.category

    const ListItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; {item.calories}</li>);
    return(
        <div>
            <h3 className={styles.category}>{category}</h3>
            <ol className={styles.listItems}>{ListItems}</ol>
        </div>);
}

List.defaultProps = {
    category : "category",
    item:[]
}

List.propTypes = {
    category:propTypes.string,
    item:propTypes.arrayOf(propTypes.shape({id:propTypes.number, name:propTypes.string, calories:propTypes.number}))
}

export default List;