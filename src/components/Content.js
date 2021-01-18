import "./Content.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Content = ({
  bgImg,
  title,
  desc,
  leftBtnLink,
  leftBtnTxt,
  rightBtnLink,
  rightBtnTxt,
  isIndicator,
  isImp,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="content__wrapper"
    >
      <div className="content__banner">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="btn__container">
        <div className="primary__btn">
          <a href={leftBtnLink}>{leftBtnTxt}</a>
        </div>

        {isImp ? (
          <div className="secondary__btn">
            <a href={rightBtnLink}>{rightBtnTxt}</a>
          </div>
        ) : (
          ""
        )}
      </div>
      {isIndicator ? <div className="indicator__icon"><ExpandMoreIcon fontSize = 'large' /></div> : ""}
    </div>
  );
};

export default Content;
