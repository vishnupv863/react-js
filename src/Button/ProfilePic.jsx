import styles from './Button.module.css'

function ProfilePic(){

    const eventObject = (e) => console.log(e)
    const handleClick = (e) => e.target.hidden=true;
    const profilePic = './src/assets/finland.jpg'
    return(
        <div>
            <button onClick={(e) => eventObject(e)}>click me</button>
            <img onDoubleClick={(e) => handleClick(e)} className={styles.profileImage} src={profilePic} alt="profilepic" />
        </div>
        
    );
}
export default ProfilePic