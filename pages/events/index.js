import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

export default function AllEventsPage() {
  let events = getAllEvents();
  const router = useRouter();

  function findEventsHanlder(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHanlder} />
      <EventList items={events} />
    </Fragment>
  );
}
