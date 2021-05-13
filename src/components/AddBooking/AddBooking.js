import React, { useState } from "react";
import {
  Heading,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useCollectionData } from "react-firebase-hooks/firestore";

// firebase
import { firestore } from "../../firebase";

// components
import Booking from "../Booking/Booking";

// styles
import "./AddBooking.css";

const AddBooking = () => {
  const toast = useToast();
  const [contents, setContents] = useState({
    title: "",
    venue: "",
    category: "",
    imgUrl: "",
    price: 0,
    desc: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const addBookingHandler = () => {
    if (
      contents.title === "" ||
      contents.venue === "" ||
      contents.category === "" ||
      contents.imgUrl === "" ||
      contents.price === 0 ||
      contents.desc === ""
    ) {
      return alert("Fill the forms");
    }

    setLoading(true);
    const dbModel = {
      ...contents,
      createdAt: new Date().toDateString(),
    };
    firestore
      .collection("bookings")
      .add(dbModel)
      .then(() => {
        setContents({
          title: "",
          venue: "",
          category: "",
          imgUrl: "",
          price: 0,
          desc: "",
        });
        setLoading(false);
        toast({
          title: "Success",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  // fetching list
  const listRef = firestore.collection("bookings");
  const query = listRef.orderBy("createdAt");

  const [lists] = useCollectionData(query, { idField: "id" });

  return (
    <div className="add-booking">
      <Heading as="h2">Add Booking</Heading>

      <div className="add-booking__section" data-aos="fade-right">
        {error && <p className="error">{error}</p>}
        <form className="add-booking__section-form">
          <Input
            placeholder="Title"
            isRequired
            size="lg"
            value={contents.title}
            onChange={(e) =>
              setContents({ ...contents, title: e.target.value })
            }
          />
          <Select
            placeholder="Venue"
            size="lg"
            value={contents.venue}
            isRequired
            onChange={(e) =>
              setContents({ ...contents, venue: e.target.value })
            }
          >
            <option value="venue-1">Venue-1</option>
            <option value="venue-2">venue-2</option>
            <option value="venue-3">venue-3</option>
          </Select>
          <Select
            placeholder="Category"
            size="lg"
            value={contents.category}
            isRequired
            onChange={(e) =>
              setContents({ ...contents, category: e.target.value })
            }
          >
            <option value="weeding">Weeding</option>
            <option value="birthday">Birthday</option>
            <option value="fashion">Fashion</option>
          </Select>
          <Input
            placeholder="Image Url"
            isRequired
            size="lg"
            value={contents.imgUrl}
            onChange={(e) =>
              setContents({ ...contents, imgUrl: e.target.value })
            }
          />
          <NumberInput size="lg" isRequired defaultValue={+contents.price}>
            <NumberInputField
              onChange={(e) =>
                setContents({ ...contents, price: +e.target.value })
              }
            />
          </NumberInput>
          <Textarea
            placeholder="Description"
            isRequired
            size="lg"
            value={contents.desc}
            onChange={(e) => setContents({ ...contents, desc: e.target.value })}
          />
          {loading ? (
            <p className="error">Loading...</p>
          ) : (
            <Button className="hero__left-btn" onClick={addBookingHandler}>
              Add
            </Button>
          )}
        </form>
        <div>
          <Heading as="h2" pt="10" pb="10">
            Lists
          </Heading>
          <div className="lists">
            {lists &&
              lists.map((item, index) => (
                <Booking item={item} key={item.id} num={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBooking;
