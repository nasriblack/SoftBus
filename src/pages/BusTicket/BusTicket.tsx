import React, { FC, Fragment } from 'react';
import BoxSeatLegend from './BoxSeatLegend';
import wheel from '../../assets/img/steering-wheel.png';
import HeaderLayout from '../../layouts/HeaderLayout';
import { useGetBus } from '../../api/bus';

interface BusTicketScreenProps {}

const BusTicketScreen: FC<BusTicketScreenProps> = () => {
  const { data, isFetching, isLoading, isSuccess } = useGetBus('112');

  console.log('checking the data', data?.data[0].seats);

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
                      {/* TODO here to put an icon of currently emplacement */}
                      <i className="ri-arrow-right-fill"></i>
                      <div>{destination}</div>
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
                          color={
                            seats.user_name.length === 0 ? 'green' : 'white'
                          }
                          // color="green"
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
