import { useRouter } from "next/router";
import EventContent from "../../components/event-detail/EventContent";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventSummary from "../../components/event-detail/EventSummary";
import { getEventById } from "../../dummy-data";

const DetailEventPage = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);
  const { description, title, date, location, image } = event || {};
  if (!event) {
    return <p>No event found</p>;
  }
  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
};

export default DetailEventPage;
