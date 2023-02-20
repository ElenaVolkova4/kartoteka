import "./Events.css";
import Header from "../Header/Header";
import ButtonWhite from "../Buttons/ButtonWhite/ButtonWhite";
import ButtonBlack from "../Buttons/ButtonBlack/ButtonBlack";
import StructureCard from "./StructureCard/StructureCard";
import Form from "./Form/Form";
// import { organizations } from "../../list_of_organizations";

const Events = () => {
  return (
    <div className="events">
      <Header
        title="Карточка мероприятия"
        status="Обновлено"
        button=<ButtonWhite title="Mатериалы проверки" />
      />
      <div className="events_content">
        <div className="events_content_left_col">
          <div className="events_content_left_title">Структура предприятия</div>
          <StructureCard
            name="ФГБУН Институт нанотехнологий микроэлектроники РАН"
            status="Идёт процесс ликвидации с 25.10.2019 по 10.10.2020"
            director="Сауров Александр Николаевич"
            director_info="Трудовой контракт с 25.03.2017 по 25.03.2023"
            address="119991, Москва, Ленинский просп., 32а"
            employees="123 сотрудника"
          />
          <StructureCard
            name="ФГБУН Институт нанотехнологий микроэлектроники РАН"
            status="Находится в реорганизации с 23.09.2018 по 23.09.2020"
            director="Сауров Александр Николаевич"
            director_info="Трудовой контракт с 25.03.2017 по 25.03.2023"
            address="119991, Москва, Ленинский просп., 32а"
            employees="123 сотрудника"
            old_name="ФГБУН науки Объединенный институт высоких температур РАН"
            old_name2="ФГБУН Институт проблем управления сложными системами РАН"
          />
          <StructureCard
            name="ФГБУН Институт нанотехнологий микроэлектроники РАН"
            status="Идёт процесс банкротства с 23.09.2018 по 23.09.2020"
            director="Сауров Александр Николаевич"
            director_info="Трудовой контракт с 25.03.2017 по 25.03.2023"
            address="119991, Москва, Ленинский просп., 32а"
            employees="123 сотрудника"
          />

          {/* {organizations.map((organization) => (
            <StructureCard
              key={organization.inn}
              name={organization.name}
              director={organization.director}
              address={organization.address}
            />
          ))} */}
        </div>
        <div className="events_content_right_col">
          <div className="events_content_generator card">
            <div className="events_content_generator_document">
              <div className="events_content_generator_document_name">
                Справка проверки
              </div>
              <div className="events_content_generator_document_border"></div>
              <ButtonBlack title="Сформировать" />
            </div>
            <div className="events_content_generator_document">
              <div className="events_content_generator_document_name">
                Акт проверки
              </div>
              <div className="events_content_generator_document_border"></div>
              <ButtonBlack title="Сформировать" />
            </div>
            <div className="events_content_generator_document">
              <div className="events_content_generator_document_name">
                Схема проверки
              </div>
              <div className="events_content_generator_document_border"></div>
              <ButtonBlack title="Сформировать" />
            </div>
          </div>
          <div className="events_content_form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
