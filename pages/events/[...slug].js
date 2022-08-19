import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../dummy-data";
import ErrorAlert from "../../components/ui/error-alert";

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

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <div className="center">
          <ErrorAlert>
            <p>Invalid filter. Please abjust your values!</p>
          </ErrorAlert>
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <div className="center">
          <ErrorAlert>
            <p>No Events found for the chosen filter!</p>
          </ErrorAlert>
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const theDate = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={theDate} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}
