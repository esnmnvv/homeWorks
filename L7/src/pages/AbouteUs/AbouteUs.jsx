import { useNavigate } from "react-router";
import "./style.css";

const AbouteUs = () => {
  const navigate = useNavigate();

  const add_fn = () => {
    navigate("/add_apart_address");
  };

  return (
    <div className="but">
      <h1>О нас</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non libero ex,
        quod nemo autem numquam exercitationem, consequatur blanditiis facere
        eius et id recusandae officia dolores corporis cupiditate alias adipisci
        laborum ipsum veritatis fugiat nisi laboriosam beatae. Quae magnam
        reiciendis, explicabo natus tempore harum est optio dicta earum
        similique praesentium tenetur.
      </p>
      <button onClick={add_fn}>Добавить квартиру</button>
    </div>
  );
};

export default AbouteUs;
