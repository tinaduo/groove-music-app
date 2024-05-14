import styles from './NotificationsList.module.css';
import Notifications from '../Notifications';

const NotificationsList = ({ activity }) => {
  return (
    <>
    <div className={styles.notif}>
      <Notifications title="New" activities={activity.New} />
      <Notifications title="Today" activities={activity.Today} />
      <Notifications title="This Week" activities={activity['This Week']} />
    </div>
    </>
  );
};

export default NotificationsList;