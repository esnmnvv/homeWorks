import "./style.css";

const ViewApart = () => {
  const address = localStorage.getItem("address");
  const house_num = localStorage.getItem("house_num");
  const square = localStorage.getItem("square");
  const description = localStorage.getItem("description");

  return (
    <div className="block">
      <h2>Информация о апарте</h2>
      <h3>{address}</h3>
      <h3>{house_num}</h3>
      <h3>{square}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ViewApart;
