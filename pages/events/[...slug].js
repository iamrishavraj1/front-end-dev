import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data";
import EventResult from "../../components/events/results-title";
import EventList from "../../components/events/event-list";
const FilterEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return (
      <>
        <h1 className="center">Loading....</h1>
      </>
    );
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
      <>
        <h1>Invalid Filter. Please Check Valus</h1>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <>
        <h1>No Events found</h1>
      </>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <EventResult date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilterEventsPage;
