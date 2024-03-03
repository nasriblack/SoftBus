import { FC, Fragment } from 'react';
import wheel from '../../../assets/img/steering-wheel.png';
import BoxSeatLegend from './BoxSeatLegend';
import { IResponseApi } from '../../../interfaces/IBus';
import { useUpdateBus } from '../../../api/bus';

interface BusSeatComponentProps {
  data: IResponseApi;
  isSuccess: boolean;
  setSeatSelected: (value: string) => void;
  SeatSelected: string;
}

const BusSeatComponent: FC<BusSeatComponentProps> = ({
  data,
  isSuccess,
  setSeatSelected,
  SeatSelected,
}) => {
  const mutation = useUpdateBus();

  return (
    <>
      <div className="bus__presentation">
        <img src={wheel} alt="" />
        <div className="seats">
          {data &&
            isSuccess &&
            data.data[0].seats.map((seats) => {
              return (
                <div
                  key={seats._id}
                  //   onClick={() => {
                  //     const payload = {
                  //       id: SeatSelected,
                  //       data: dummyData,
                  //     };
                  //     if (seats.user_name.length === 0) {
                  //       //   setSeatSelected(seats._id);
                  //       mutation.mutate(payload);
                  //     }
                  //   }}
                >
                  <BoxSeatLegend
                    color={seats.user_name.length === 0 ? 'green' : 'white'}
                    // color="green"
                    legendName=""
                    num={seats.seat_number}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default BusSeatComponent;
