import React, { useEffect, useState } from 'react';
import ChartMessage from './ChartMessage';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../utils/chartSlice';

import { generateRandomName, textgen } from './Helper/helper';

const LiveChart = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chartMessages = useSelector((state) => state.chart.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: textgen(),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  const handleSubmit = (e) => {
    setLiveMessage(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="ml-2 h-[600px] border border-black w-full bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse ">
          {chartMessages.length > 0 &&
            chartMessages.map((message, index) => (
              <ChartMessage
                key={index}
                name={message.name}
                message={message.message}
              />
            ))}
        </div>
        <form
          className="w-full mx-2 border border-gray-200"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(liveMessage);
            dispatch(addMessage({ name: 'sayyed', message: liveMessage }));
            setLiveMessage('');
          }}
        >
          <input
            className="border border-black-100 w-96 m-2 p-2 rounded-lg"
            type="text"
            name=""
            id=""
            onChange={(e) => handleSubmit(e)}
            value={liveMessage}
          />
          <button className="mx-2 border border-black-500 h-10 px-4 bg-green-300 font-bold rounded-lg">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChart;
