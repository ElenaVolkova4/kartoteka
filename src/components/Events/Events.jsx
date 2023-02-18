import Button from "../Button/Button";
import Header from "../Header/Header";
import "./Events.css";

const Events = () => {
  return (
    <div
    // className=''
    >
      <Header
        title="Карточка мероприятия"
        status="Обновлено"
        button=<Button title="Mатериалы проверки" />
      />
    </div>
  );
};

export default Events;
