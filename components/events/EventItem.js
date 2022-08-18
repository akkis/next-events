import Link from "next/link";
import styles from "./event-item.module.css";

function EventItem({ title, image, date, location, id }) {
  const explore_link = `/events/${id}`;
  return (
    <li key={id} className={styles.item}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>
              {new Date(date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <div className={styles.address}>
            <address>
              {location.replace(", ", "\n")}
            </address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={explore_link}>Explore event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
