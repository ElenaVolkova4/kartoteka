import ButtonBlack from "../../Buttons/ButtonBlack/ButtonBlack";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="form_border">
        <div className="form_title">
          <label for="title_text">Решение о проведении поверки</label>
          <br />
          <input type="text" id="title_text" placeholder="Введите текст" />
        </div>
      </div>
      <div className="form_body">
        <div>
          {" "}
          <label for="name">Организация</label>
          <br />
          <input type="text" id="name" placeholder="ООО “РесерчХолд”" />
        </div>
        <div>
          {" "}
          <label for="type">Вид проверки</label>
          <br />
          <select id="type">
            <option selected value="plan">
              Плановая
            </option>
            <option value="other">Еще вариант</option>
            <option value="other">Еще вариант</option>
          </select>
        </div>
        <div>
          {" "}
          <label for="format">Форма проверки</label>
          <br />
          <select id="format">
            <option selected value="out">
              Выездная
            </option>
            <option value="other_format">Еще вариант</option>
            <option value="other_format">Еще вариант</option>
          </select>
        </div>
        <div>
          {" "}
          <label for="method">Метод проверки</label>
          <br />
          <select id="method">
            <option selected value="fact">
              Фактическая
            </option>
            <option value="other_method">Еще вариант</option>
            <option value="other_method">Еще вариант</option>
          </select>
        </div>
        <div>
          <label>Сроки проведения проверки</label>
          <br />
          <input type="date" value="2020-08-02" />
          -
          <input type="date" value="2020-08-05" />
        </div>
        <div>
          <label for="address">Место проведения проверки</label>
          <br />
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
