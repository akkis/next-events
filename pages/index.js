import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className="">
      <h1>Home page</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
