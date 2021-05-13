import React, { useContext } from "react";
import { Heading, Button, useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

// global state
import { globalState } from "../../state/globalState";

// firebase
import { firestore } from "../../firebase";

//styles
import "./Booking.css";

const Booking = ({ item, num = 0 }) => {
  const { user } = useContext(globalState);
  const history = useHistory();
  const toast = useToast();

  let isAdmin = false;
  if (user && user.email === "admin@eventman.com") {
    isAdmin = true;
  }

  const deleteHandler = () => {
    firestore
      .collection("bookings")
      .doc(item.id)
      .delete()
      .then(() =>
        toast({
          title: "Success",
          status: "success",
          duration: 2000,
          isClosable: true,
        })
      )
      .catch((error) => alert(error.message));
  };

  return (
    <div className="booking" data-aos="zoom-in" data-aos-delay={num * 300}>
      <img src={item.imgUrl} alt={item.title} />
      <div>
        <Heading as="h6" className="booking__title">
          {item.title}
        </Heading>
        <div className="booking__details">
          <p>Venue: {item.venue}</p>
          <p>Category: {item.category}</p>
          <p>Price: {item.price} Tk</p>
        </div>
        <p className="booking__desc">Description: {item.desc}</p>
      </div>
      <div className="booking__btn">
        {isAdmin ? (
          <Button onClick={deleteHandler}>Delete</Button>
        ) : user ? (
          <Button onClick={() => history.push(`/checkout/${item.id}`)}>
            Book
          </Button>
        ) : (
          <Button onClick={() => history.push("/auth")}>Login</Button>
        )}
      </div>
    </div>
  );
};

export default Booking;
