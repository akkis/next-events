import { Fragment } from "react";
import { getEventById, getAllEvents, getFeaturedEvents } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Button from "../../components/ui/Button";

export default function EventPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <Fragment>
        <div className="center">
          <p>No event found!</p>
        </div>
        <p className="center">
          <Button link="/events">Show all events</Button>
        </p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30
  };
}

export async function getStaticPaths(context) {
  const allEvents = await getFeaturedEvents();
  const paramPaths = allEvents.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: paramPaths,
    fallback: 'blocking',
  };
}
