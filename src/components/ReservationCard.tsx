import React from "react";
import { useDispatch } from "react-redux";
// import { addCustomer } from "../feature/customerSlice";
import { removeReservation } from "../features/reservationsSlice";
// import { v4 as uuid } from "uuid";

interface IReservationCardType {
  name: string;
  index: number;
}

function ReservationCard({ name, index }: IReservationCardType) {
  const dispatch = useDispatch();
  return (
    <div
      className="reservation-card-container"
      onClick={() => {
        dispatch(removeReservation(index));
        // dispatch(
        //   addCustomer({
        //     id: uuid(),
        //     name,
        //     food: [],
        //   })
        // );
      }}
    >
      <p>{name}</p>
    </div>
  );
}

export default ReservationCard;