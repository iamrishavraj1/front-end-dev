import classes from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowIcon from "../icons/arrow-right-icon";
import Button from "../ui/Button";
const EventItem = ({ title, image, date, location, id }) => {
  // const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    date: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatLocation = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <>
      <li className={classes.item}>
        <img src={"/" + image} alt={title} />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
              <DateIcon />
              <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
              <AddressIcon />
              <address>{formatLocation}</address>
            </div>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore</span>
              <span className={classes.icon}>
                <ArrowIcon />
              </span>
            </Button>
          </div>
        </div>
      </li>
    </>
  );
};

export default EventItem;
