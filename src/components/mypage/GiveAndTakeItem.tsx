import "../../styles/GiveAndTakeItem.css";
import type { PointStatisticsState } from "../../states/pointStatisticsState";
import person from "../../assets/person.svg";

interface GiveAndTakeItemProps {
  item: PointStatisticsState;
}

const GiveAndTakeItem: React.FC<GiveAndTakeItemProps> = ({ item }) => {
  const transactionDate = item.transactionDate;

  const datePart = transactionDate.split("T")[0]; // "2025-08-14"
  const timePart = transactionDate.split("T")[1].substring(0, 5); // "03:15"
  const dateArray = datePart.split("-"); // ["2025", "08", "14"]
  const day = dateArray[2];

  return (
    <div className="GiveAndTakeItem">
      <h3>
        {day} <br />일
      </h3>
      <div className="card-container">
        <div className="time">
          <h6>{timePart}</h6>
          <p>전체공개</p>
        </div>
        <div className="profile">
          <img
            src={item.profileImageUrl ? item.profileImageUrl : person}
            alt={item.counterparty}
          />
          <div className="name">
            <h6>{item.counterparty}</h6>
            <p>{item.department}</p>
          </div>
        </div>
        <p className="message">{item.message}</p>
      </div>
    </div>
  );
};

export default GiveAndTakeItem;
