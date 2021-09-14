import { useRouter } from "next/router";

const SearchEventsPage = () => {
  const router = useRouter();
  return <div>Search Event Page with slug: {router.query.slug}</div>;
};

export default SearchEventsPage;
