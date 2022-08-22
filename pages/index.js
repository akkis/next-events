import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/EventList";

export default function Home(props) {
  return (
    <div className="center">
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}
