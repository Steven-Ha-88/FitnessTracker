import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercises, deleteExercise } from "./../../actions/index";
import Exercise from "./../Exercise/index";
import { Table, Header, GlobalStyle } from "./styled";

export const ExerciseList = (props) => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises.exercises);
  const loading = useSelector((state) => state.exercises.loading);

  useEffect(() => {
    dispatch(getExercises());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderList = () => {
    return exercises.map((item) => {
      return (
        <Exercise
          exercise={item}
          deleteExercise={deleteExercise}
          key={item._id}
        />
      );
    });
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <GlobalStyle />
          <h3>Logged Exercises</h3>
          <Table className='table'>
            <thead className='thead-light'>
              <tr>
                <Header>Username</Header>
                <Header>Description</Header>
                <Header>Duration</Header>
                <Header>Date</Header>
                <Header>Actions</Header>
              </tr>
            </thead>
            <tbody>{renderList()}</tbody>
          </Table>
        </div>
      )}
    </>
  );
};
