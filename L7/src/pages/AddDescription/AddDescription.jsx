import { useNavigate } from "react-router";
import "./style.css";
import { useState } from "react";

const AddDescription = () => {
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const add_fn = () => {
    localStorage.setItem("description", description);
    navigate("/view_apart");
  };

  return (
    <div>
      <div>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          name=""
          id=""
        ></textarea>
      </div>
      <button className="btnn" onClick={add_fn}>
        Добавить квартиру
      </button>
    </div>
  );
};

export default AddDescription;
