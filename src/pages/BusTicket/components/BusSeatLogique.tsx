import { FC, Fragment, useEffect } from 'react';
import wheel from '../../../assets/img/steering-wheel.png';
import BoxSeatLegend from './BoxSeatLegend';
import { IResponseApi } from '../../../interfaces/IBus';
import { useUpdateBus } from '../../../api/bus';

interface BusSeatComponentProps {
  data: IResponseApi;
  isSuccess: boolean;
  setSeatSelected: (value: string) => void;
  SeatSelected: string;
  refetch: any;
}

const BusSeatComponent: FC<BusSeatComponentProps> = ({
  data,
  isSuccess,
  setSeatSelected,
  SeatSelected,
  refetch,
}) => {
  const { mutate, isSuccess: isSuccessMutation } = useUpdateBus();

  useEffect(() => {
    refetch();
    return () => {};
  }, [isSuccessMutation]);

  return (
    <>
      <div className="bus__presentation">
        <img src={wheel} alt="" />
        <div data-testid="seats-element-test" className="seats">
          {data &&
            isSuccess &&
            data.data[0].seats.map((seats) => {
              return (
                <div
                  key={seats._id}
                  // onClick={() => {
                  //   console.log('Clicked !', data.data[0]);
                  // }}
                  onClick={() => {
                    const payload = {
                      params: {
                        idBus: data.data[0]._id,
                        idSeat: seats._id,
                      },
                      data: {
                        userName: 'Testing User',
                      },
                    };
                    if (seats.user_name.length === 0) {
                      //   setSeatSelected(seats._id);
                      mutate(payload);
                    }
                  }}
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
