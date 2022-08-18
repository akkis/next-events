import { useRouter } from "next/router";

export default function EventPage() {
  const router = useRouter();

  return (
    <div>
      <h2>Single Event Page here...</h2>
      {router.query.eventid && <h3>Event ID:{router.query.eventid}</h3>}
    </div>
  );
}
