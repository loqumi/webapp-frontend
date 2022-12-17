import React, { useEffect } from "react";
import FormAddUser from "../components/FormAddUser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, user, navigate]);
  return <FormAddUser />;
};

export default AddUserPage;
