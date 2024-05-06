import styles from './Notifications.module.css';

const Notifications = ({ title, activities }) => (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul>
        {activities.map(({ user, action, description, time }, index) => (
          <li key={index} className={styles.activityItem}>
            <img src={user.userPic} className={styles.userPic} />
            <div className={styles.info}>
              <p className={styles.userName}>{user.name}</p>
              <span className={styles.description}> {description}</span>
            </div>
            <span className={styles.time}>{time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default Notifications;