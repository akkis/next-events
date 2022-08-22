import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../helpers/api-utils";
import { useRouter } from "next/router";

export default function AllEventsPage(props) {
  const events = props.events;
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

export async function getStaticProps(context) {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
}
