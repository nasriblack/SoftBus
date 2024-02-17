import React, { FC } from 'react';
import BoxSeatLegend from './BoxSeatLegend';
import wheel from '../../assets/img/steering-wheel.png';

interface BusTicketScreenProps {}

const BusTicketScreen: FC<BusTicketScreenProps> = () => {
  return (
    <>
      <div className="bus-ticket-screen">
        <div className="booking-div">
          <div className="header-direction">
            <div>Tunis</div>
            <i className="ri-arrow-right-fill"></i>
            <div>Nabeul</div>
          </div>
          <div className="legend-seat">
            <BoxSeatLegend color="red" legendName="Selected" />
            <BoxSeatLegend color="green" legendName="Standard" />
            <BoxSeatLegend color="white" legendName="occupied" />
          </div>
          <div className="bus__presentation">
            <img src={wheel} alt="" />
            <div className="bus__seat__column">
              <BoxSeatLegend color="red" legendName="" num={1} />
              <BoxSeatLegend color="white" legendName="" num={2} />
              <BoxSeatLegend color="white" legendName="" num={3} />
              <BoxSeatLegend color="green" legendName="" num={4} />
              <BoxSeatLegend color="green" legendName="" num={5} />
              <BoxSeatLegend color="white" legendName="" num={6} />
            </div>
            <div className="bus__seat__column">
              <BoxSeatLegend color="green" legendName="" num={7} />
              <BoxSeatLegend color="green" legendName="" num={8} />
              <BoxSeatLegend color="white" legendName="" num={9} />
              <BoxSeatLegend color="green" legendName="" num={10} />
              <BoxSeatLegend color="white" legendName="" num={11} />
              <BoxSeatLegend color="green" legendName="" num={12} />
            </div>
            <div className="bus__seat__column">
              <BoxSeatLegend color="green" legendName="" num={13} />
              <BoxSeatLegend color="white" legendName="" num={14} />
              <BoxSeatLegend color="green" legendName="" num={15} />
              <BoxSeatLegend color="white" legendName="" num={16} />
              <BoxSeatLegend color="green" legendName="" num={17} />
              <BoxSeatLegend color="white" legendName="" num={18} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusTicketScreen;
