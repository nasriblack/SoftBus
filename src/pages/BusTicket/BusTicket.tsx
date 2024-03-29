import React, { FC, Fragment, useEffect, useState } from 'react';
import BoxSeatLegend from './components/BoxSeatLegend';
import HeaderLayout from '../../layouts/HeaderLayout';
import { useGetBus, useUpdateBus } from '../../api/bus';
import BusSeatComponent from './components/BusSeatLogique';

interface BusTicketScreenProps {}

const BusTicketScreen: FC<BusTicketScreenProps> = () => {
  const { data, isFetching, isLoading, isSuccess, refetch } = useGetBus('112');

  const [SeatSelected, setSeatSelected] = useState(data?.data[0]._id);

  return (
    <>
      {/* <HeaderLayout> */}
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
          {data && (
            <BusSeatComponent
              data={data}
              isSuccess={isSuccess}
              setSeatSelected={setSeatSelected}
              SeatSelected={SeatSelected}
              refetch={refetch}
            />
          )}
        </div>
      </div>
      {/* </HeaderLayout> */}
    </>
  );
};

export default BusTicketScreen;
