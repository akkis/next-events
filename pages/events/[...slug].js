import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../helpers/api-utils";
import ErrorAlert from "../../components/ui/error-alert";

export default function FilteredEventsPage(props) {
  const filteredEvents = props.events;

  if (props.hasError) {
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

  const theDate = new Date(props.date.year, props.date.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={theDate} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

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
    return {
      props: {
        hasError: true,
      },
      notFound: true,
      // redirect: {
      //   destination: '/error',
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
