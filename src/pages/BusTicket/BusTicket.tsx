import React, { FC, Fragment } from 'react';
import BoxSeatLegend from './BoxSeatLegend';
import wheel from '../../assets/img/steering-wheel.png';
import HeaderLayout from '../../layouts/HeaderLayout';
import { useGetBus } from '../../api/bus';

interface BusTicketScreenProps {}

const BusTicketScreen: FC<BusTicketScreenProps> = () => {
  const { data, isFetching, isLoading, isSuccess } = useGetBus('112');

  return (
    <>
      <HeaderLayout>
        <div className="bus-ticket-screen">
          <div className="booking-div">
            <div className="header-direction">
              {data &&
                isSuccess &&
                data.data[0].destinations.map((destination: string, index) => {
                  return (
                    <Fragment key={index}>
                      <div>{destination}</div>
                      <i className="ri-arrow-right-fill"></i>
                    </Fragment>
                  );
                })}
            </div>
            <div className="legend-seat">
              <BoxSeatLegend color="red" legendName="Selected" />
              <BoxSeatLegend color="green" legendName="Standard" />
              <BoxSeatLegend color="white" legendName="occupied" />
            </div>
            <div className="bus__presentation">
              <img src={wheel} alt="" />
              <div className="seats">
                {data &&
                  isSuccess &&
                  data.data[0].seats.map((seats) => {
                    return (
                      <Fragment key={seats._id}>
                        <BoxSeatLegend
                          color="green"
                          legendName=""
                          num={seats.seat_number}
                        />
                      </Fragment>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </HeaderLayout>
    </>
  );
};

export default BusTicketScreen;
