import { IMG_CDN_URL } from '../../constants';
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{lastMileTravel} minutes</h4>
    </div>
  );
};

export default RestrauntCard;
