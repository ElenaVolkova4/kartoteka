import ButtonBlack from "../../Buttons/ButtonBlack/ButtonBlack";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="form_border">
        <div className="form_title form_body_flex">
          <label htmlFor="title_text">Решение о проведении поверки</label>
          <input type="text" id="title_text" placeholder="Введите текст" />
        </div>
      </div>
      <div className="form_body">
        <div className="form_body_flex">
          {" "}
          <label htmlFor="name">Организация</label>
          <input type="text" id="name" placeholder="ООО “РесерчХолд”" />
        </div>
        <div className="form_body_flex">
          <label htmlFor="type">Вид проверки</label>
          <select id="type">
            <option defaultValue="plan">Плановая</option>
            <option value="other">Еще вариант</option>
            <option value="other">Еще вариант</option>
          </select>
        </div>
        <div className="form_body_flex">
          <label htmlFor="format">Форма проверки</label>
          <select id="format">
            <option defaultValue="out">Выездная</option>
            <option value="other_format">Еще вариант</option>
            <option value="other_format">Еще вариант</option>
          </select>
        </div>
        <div className="form_body_flex">
          <label htmlFor="method">Метод проверки</label>
          <select id="method">
            <option defaultValue="fact">Фактическая</option>
            <option value="other_method">Еще вариант</option>
            <option value="other_method">Еще вариант</option>
          </select>
        </div>
        <div className="form_body_flex">
          <label>Сроки проведения проверки</label>
          <div className="form_body_flex_input_date">
            {" "}
            <input type="date" defaultValue="2020-08-02" />
            -
            <input type="date" defaultValue="2020-08-05" />
          </div>
        </div>
        <div className="form_body_flex">
          <label htmlFor="address">Место проведения проверки</label>
          <input
            type="text"
            id="address"
            placeholder="г. Москва, Ленинский пр-т 178, к4"
          />
        </div>
      </div>
      <div className="form_btn">
        <ButtonBlack title="Написать" />
      </div>
    </div>
  );
};

export default Form;
