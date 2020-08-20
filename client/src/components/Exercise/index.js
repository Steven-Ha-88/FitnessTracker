import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Exercise = ({
  exercise: { username, description, duration, date, _id },
  deleteExercise,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteExercise(_id));
    window.location = "/";
  };

  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + _id}>Edit</Link> |
        <span
          style={{
            cursor: "pointer",
            color: "#007BFF",
            display: "inline-block",
          }}
          onClick={handleClick}>
          Delete
        </span>
      </td>
    </tr>
  );
};

export default Exercise;
