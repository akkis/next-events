import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from '../../dummy-data';

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return <p>Invalid filter. Please abjust your values!</p>
  }

  const filteredEvents = getFilteredEvents({year: numYear, month: numMonth})

  if (! filteredEvents || filteredEvents.length === 0) {
    return <p>No Events found for the chosen filter!</p>
  }

  return (
    <Fragment>
      <h1 className="center">Showing events with filters:</h1>
      <p className="center">Year: {filteredYear}</p>
      <p className="center">Month: {filteredMonth}</p>
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
