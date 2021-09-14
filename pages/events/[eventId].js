import { useRouter } from "next/router";

const DetailEventPage = () => {
  const router = useRouter();
  return <div>Detail Event Page with id: {router.query.eventId}</div>;
};

export default DetailEventPage;
