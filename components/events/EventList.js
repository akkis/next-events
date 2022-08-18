import EventItem from "./EventItem";
import styles from "./event-list.module.css";

function EventList({items}) {
  return (
    <div>
      <ul className={styles.list}>
        {items.map((event) => (
          <EventItem
            key={event.id}
            title={event.title}
            id={event.id}
            location={event.location}
            address={event.address}
            image={event.image}
            date={event.date}
          />
        ))}
      </ul>
    </div>
  );
}

export default EventList;
