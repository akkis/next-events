import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

export default function EventPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>Ne event found!</p>;
  }

  return (
    <div>
      <h1>Event Details</h1>
    </div>
  );
}
