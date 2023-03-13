import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChart from './LiveChart';

const WatchPage = () => {
  const [params] = useSearchParams();
  const videoID = params.get('v');
  const dispath = useDispatch();
  useEffect(() => {
    dispath(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex">
        <div>
          <iframe
            width="1200"
            height="600"
            src={
              `https://www.youtube.com/embed/` +
              videoID +
              '?autoplay=1&mute=1`}'
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <LiveChart />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
