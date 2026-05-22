import { useNavigate } from "react-router";
import "./style.css";
import { useState } from "react";

const AddAddressPage = () => {
  const [address, setAdress] = useState("");
  const [house_num, setHouseNum] = useState("");
  const [square, setSquare] = useState("");

  const navigate = useNavigate();

  const add_fn = () => {
    localStorage.setItem("address", address);
    localStorage.setItem("house_num", house_num);
    localStorage.setItem("square", square);
    navigate("/add_description_apart");
  };

  return (
    <div>
      <div>
        <input onChange={(e) => setAdress(e.target.value)} type="text" />
        <input onChange={(e) => setHouseNum(e.target.value)} type="text" />
        <input onChange={(e) => setSquare(e.target.value)} type="text" />
      </div>
      <button onClick={add_fn} className="butt">
        Добавить и продолжить
      </button>
    </div>
  );
};

export default AddAddressPage;
