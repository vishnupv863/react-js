import PropTypes from 'prop-types';
import styles from './Student.module.css';

function Student(props){
    return(
        <div className={styles.student}>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent? "Yes" : "No"}</p>
        </div>
    );
}

Student.PropTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    Student:PropTypes.bool
}

Student.defaultProps = {
    name:"Guest",
    age:20
}


export default Student;