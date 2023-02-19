import ButtonWhite from "../Buttons/ButtonWhite/ButtonWhite";
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
        button=<ButtonWhite title="Mатериалы проверки" />
      />
    </div>
  );
};

export default Events;
