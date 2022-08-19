import Button from "../ui/Button";
import styles from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRigthIcon from "../icons/arrow-right-icon";

function EventItem({ title, image, date, location, id }) {
  const exploreLink = `/events/${id}`;
  return (
    <li key={id} className={styles.item}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>
              {new Date(date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{location.replace(", ", "\n")}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore event</span>
            <span className={styles.icon}>
              <ArrowRigthIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
