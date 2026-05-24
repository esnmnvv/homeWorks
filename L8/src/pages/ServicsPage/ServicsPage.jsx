import "./style.css";

const ServicsPage = () => {
  const services = [
    {
      id: 1,
      title: "Уборка квартиры",
      description:
        "Генеральная или обычная уборка квартиры после ремонта или проживания",
      price: 2500,
    },
    {
      id: 2,
      title: "Ремонт квартиры",
      description:
        "Косметический ремонт стен, пола, потолка и других частей квартиры",
      price: 15000,
    },
    {
      id: 3,
      title: "Сантехнические услуги",
      description: "Установка и ремонт кранов, раковин, унитазов и труб",
      price: 3000,
    },
    {
      id: 4,
      title: "Электромонтаж",
      description:
        "Установка розеток, выключателей, светильников и замена проводки",
      price: 4000,
    },
    {
      id: 5,
      title: "Покраска стен",
      description: "Подготовка и покраска стен в квартире",
      price: 6000,
    },
    {
      id: 6,
      title: "Сборка мебели",
      description: "Сборка шкафов, кроватей, столов, кухонной мебели и полок",
      price: 2000,
    },
    {
      id: 7,
      title: "Установка дверей",
      description: "Монтаж межкомнатных и входных дверей",
      price: 5000,
    },
    {
      id: 8,
      title: "Установка кондиционера",
      description: "Монтаж, настройка и обслуживание кондиционера в квартире",
      price: 7000,
    },
  ];

  return (
    <div>
      <div className="services-block">
        {services.map((service) => {
          return (
            <div className="service">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <span>{service.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicsPage;
