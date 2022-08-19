import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import {getAllEvents} from "../../dummy-data";

export default function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <h2>All events...</h2>
      <EventsSearch />
      <EventList items={events} />
    </div>
  );
}
