import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Heading, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

// firebase
import { firestore } from "../../firebase";

// global state
import { globalState } from "../../state/globalState";

// styles
import "./Checkout.css";

const Checkout = () => {
  const { id } = useParams();
  const history = useHistory();
  const { user } = useContext(globalState);
  const toast = useToast();
  const [content, setContent] = useState(null);
  const [formInputs, setFormInputs] = useState({
    phone: "",
    notes: "",
  });
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    firestore
      .collection("bookings")
      .doc(id)
      .get()
      .then((item) => {
        setContent(item.data());
      });
    return () => {};
  }, [id]);

  // confirm handler
  const { phone, notes } = formInputs;
  const confirmHandler = () => {
    if (phone === "") {
      alert("Phone is required!");
      return;
    }

    const dbModel = {
      ...content,
      bookingId: id,
      userId: user.uid,
      userEmail: user.email,
      phone: phone,
      date: date,
      notes: notes || "",
      status: "pending",
    };

    firestore
      .collection("confirmBookings")
      .add(dbModel)
      .then(() => {
        setFormInputs({ phone: "", notes: "" });
        setDate(new Date());
        toast({
          title: "Success",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        history.push("/user-dashboard");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
      {content ? (
        <div className="checkout globalPadding">
          <Heading as="h2" textAlign="center" mt="10">
            Confirmation
          </Heading>
          <div className="booking" data-aos="zoom-in">
            <img src={content.imgUrl} alt={content.title} />
            <div>
              <Heading as="h6" className="booking__title" textAlign="center">
                {content.title}
              </Heading>
              <div className="booking__details">
                <p>Venue: {content.venue}</p>
                <p>Category: {content.category}</p>
                <p>Price: {content.price} Tk</p>
              </div>
              <p className="booking__desc-checkout">
                Description: {content.desc}
              </p>
            </div>
          </div>
          <form className="checkout__form" data-aos="fade-right">
            <Input
              className="checkout__phone"
              placeholder="Phone Number"
              isRequired
              size="lg"
              value={formInputs.phone}
              onChange={(e) =>
                setFormInputs({ ...formInputs, phone: e.target.value })
              }
            />

            <Textarea
              className="checkout__notes"
              placeholder="Notes"
              isRequired
              size="lg"
              value={formInputs.notes}
              onChange={(e) =>
                setFormInputs({ ...formInputs, notes: e.target.value })
              }
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker value={date} onChange={setDate} />
            </MuiPickersUtilsProvider>
            <br />
            <Button className="hero__left-btn" onClick={confirmHandler}>
              Confirm
            </Button>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Checkout;
