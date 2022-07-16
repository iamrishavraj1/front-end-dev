import { getFeaturedEvents } from "../data";
import EventList from "../components/events/event-list";
const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
};

export default HomePage;
