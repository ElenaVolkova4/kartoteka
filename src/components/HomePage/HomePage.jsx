import Header from "../Header/Header";
import "./HomePage.css";
import ImgField from "../../images/Group.png";
import MapImg from "../../images/map.png";
import axios from "axios";
import TableStatistics from "./TableStatistics";
import PhoneIcon from "../../images/phone.svg";
import MailIcon from "../../images/mail.svg";
import ChartImg from "../../images/chart.svg";
import DiagramImg from "../../images/diagram.svg";
import SquareBlue from "../../images/square_blue.svg";
import SquarePurple from "../../images/square_purple.svg";
import ChartImg2 from "../../images/chart2.png";
import HorizontalLine from "../../images/Line_975.png";
import VerticalLine from "../../images/Line_977.png";

const HomePage = () => {
  // axios
  //   .get(
  //     `curl -H 'X-Gismeteo-Token: 56b30cb255.3443075' 'https://api.gismeteo.net/v2/search/cities/?lang=en&query=москв'`
  //     // , {
  //     //   withCredentials: true,
  //     // }
  //   )
  //   .then((response) => {
  //     console.log(response);
  //   });

  // let response = fetch(
  //   "https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393",
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-Yandex-API-Key": "dd413aa8-3e5c-4311-bb11-e173f16b5724",
  //     },
  //     credentials: "include",
  //   }
  // );

  // console.log(response);

  // fetch(
  //   "https://cors-anywhere.herokuapp.com/https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393",
  //   {
  //     method: "GET", // Здесь так же может быть GET
  //     // body: JSON.stringify(newPost), // Тело запроса в JSON-формате
  //     headers: {
  //       // Добавляем необходимые заголовки
  //       "X-Yandex-API-Key": "dd413aa8-3e5c-4311-bb11-e173f16b5724",
  //       // "Access-Control-Allow-Origin": "*",
  //     },
  //     // credentials: "include",
  //   }
  // ).then((res) => {
  //   console.log(res);
  // });

  //  Access to fetch at 'https://api.weather.yandex.ru/v2/forecast?lat=55.75396&lon=37.620393' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

  return (
    <div>
      <Header title="ИП Васильев" />
      <div className="home_page_content">
        <div className="home_page_filds card">
          <h3>Работа с полями</h3>
          <div className="home_page_filds_img">
            <img src={ImgField} alt="image" />
          </div>
        </div>
        <div className="home_page_harvest_statistics card">
          <h3>Статистика урожая</h3>
          <div className="home_page_harvest_statistics_place">Поволжье</div>
          <div className="home_page_harvest_statistics_img">
            <img src={MapImg} alt="image" />
          </div>
        </div>

        <div className="home_page_weather card">
          <h3>Погода в курской области</h3>

          <div className="home_page_weather_flex">
            <div className="home_page_weather_date">
              <div>28.08.2020</div>
              <div>Среда</div>
            </div>
            <div className="home_page_weather_temp">
              +28<span>&#8451;</span>
            </div>
          </div>
          <div className="home_page_weather_flex">
            <div className="home_page_weather_info">
              <div>750 мм рт.ст.</div>
              <div>3,5 м/с</div>
            </div>
            <div className="home_page_weather_info">
              <div>Солнечно</div>
              <div>Осадки 7%</div>
            </div>
          </div>
        </div>

        <div className="home_page_reports card">
          <div>
            <h3>Отчеты и статистика</h3>
            <TableStatistics />
          </div>
          <div className="home_page_reports_chart">
            <img src={ChartImg} alt="chart" />
          </div>
        </div>
        <div className="home_page_employees card">
          <h3>Сотрудники</h3>
          <div className="home_page_employee">
            <div className="home_page_employee_info">
              <div className="home_page_employee_name">
                Иванов Иван Иванович
              </div>
              <div className="home_page_employee_post">Заместитель</div>{" "}
            </div>
            <div className="home_page_employee_icons">
              <img src={PhoneIcon} alt="Call" />
              <img src={MailIcon} alt="Email" />
            </div>
          </div>
          <div className="home_page_employee">
            <div className="home_page_employee_info">
              <div className="home_page_employee_name">
                Константинов Иван Иванович
              </div>
              <div className="home_page_employee_post">Секретарь</div>{" "}
            </div>
            <div className="home_page_employee_icons">
              <img src={PhoneIcon} alt="Call" />
              <img src={MailIcon} alt="Email" />
            </div>
          </div>
          <div className="home_page_employees_btn">Показать еще</div>
        </div>

        <div className="home_page_statistics card">
          <div className="home_page_statistics_title">
            <h3>Статистика пшена на полях ЦАО</h3>
            <div className="home_page_statistics_years">
              По годам &#8744;
            </div>{" "}
          </div>

          <div className="home_page_statistics_info">
            <div className="home_page_statistics_info_text">
              <div className="home_page_statistics_info_square__blue">
                <img src={SquareBlue} alt="Square" />
              </div>
              <div className="home_page_statistics_info_harvest_2020">
                Урожай 2020
              </div>
              <div className="home_page_statistics_info_weight_2020">
                15 150 000 тонн
              </div>
              <div className="home_page_statistics_info_regions_2020">
                120 областей
              </div>
              <div className="home_page_statistics_info_square__purple">
                <img src={SquarePurple} alt="Square" />
              </div>
              <div className="home_page_statistics_info_harvest_2019">
                Урожай 2019
              </div>
              <div className="home_page_statistics_info_weight_2019">
                102 650 980 тонн
              </div>
              <div className="home_page_statistics_info_regions_2019">
                250 областей
              </div>{" "}
            </div>
            <div className="home_page_statistics_info_diagram">
              {" "}
              <img src={DiagramImg} alt="Diagram" />
            </div>
          </div>
        </div>

        <div className="home_page_leased_equipment card">
          <div className="home_page_leased_equipment_left">
            <h3>Арендуемая техника</h3>
            <div className="home_page_leased_equipment_name">
              ООО “Магнат Мед”
            </div>
            <div className="home_page_leased_equipments">
              <img src={SquareBlue} alt="Square" />
              <div className="home_page_leased_equipments_2020">
                <div className="home_page_leased_equipments_title">
                  Экскаваторы 2020
                </div>
                <div className="home_page_leased_equipments_info">
                  15 100 машин <br />
                  130 областей
                  <br />5 предприятий
                </div>
              </div>
            </div>
            <div className="home_page_leased_equipment_btn">
              Добавить технику
            </div>
          </div>
          <div className="home_page_leased_equipment_right">
            <img src={ChartImg2} alt="Chart" />
            {/* <img src={HorizontalLine} alt="Line" className="horizontal_line" />
            <img src={VerticalLine} alt="Line" className="vertical_line_left" />
            <img
              src={VerticalLine}
              alt="Line"
              className="vertical_line_center"
            />
            <img
              src={VerticalLine}
              alt="Line"
              className="vertical_line_right"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
