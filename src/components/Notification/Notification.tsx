import css from './Notification.module.css';

// notification when no votes yet
export default function Notification() {
  return <p className={css.message}>No feedback yet</p>;
}
