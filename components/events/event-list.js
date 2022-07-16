import EventItem from "./event-item";
import classes from "./event-list.module.css";
const EventList = ({ items }) => {
  // const { items } = props;
  return (
    <>
      <ul className={classes.list}>
        {items.map((event) => {
          const { title, image, date, location, id } = event;
          return (
            <>
              {/* <EventItem
                key={event.id}
                id={event.id}
                title={event.title}
                location={event.location}
                date={event.date}
                image={event.image}
              /> */}
              <EventItem
                key={id}
                id={id}
                title={title}
                location={location}
                date={date}
                image={image}
              />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default EventList;
