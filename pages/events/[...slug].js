import { useRouter } from "next/router";

export default function FilteredEventsPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Fitlered:</h1>
      <p>custom filter:</p>
      {router.query.slug && router.query.slug.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </div>
  );
}
