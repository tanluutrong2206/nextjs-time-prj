import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/results-title/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getFilteredEvents } from "../../dummy-data";

const SearchEventsPage = () => {
  const router = useRouter();

  if (!router.query.slug) {
    return <p className="center">Loading ...</p>;
  }
  const [filteredYear, filteredMonth] = router.query.slug;
  const year = +filteredYear;
  const month = +filteredMonth;

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month > 12 ||
    month < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const events = getFilteredEvents({ year, month });

  if (events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Cannot find any events with params</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  return (
    <>
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList items={events} />
    </>
  );
};

export default SearchEventsPage;
