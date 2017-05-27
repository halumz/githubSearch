import React from 'react';
import Styles from './searchList.css';

export default function (searchList) {
  return (<div className={Styles.listBody}>{searchList.map((item) => {
    const onClick = () => {
      window.open(item.html_url, '_blank');
    };
    const starURL = chrome.extension.getURL('img/black_star.png');
    const forkURL = chrome.extension.getURL('img/tuning_fork.png');
    return (<div key={item.id} onClick={onClick} className={Styles.listbody}>
      <div className={Styles.singleBody}>
        <div className={Styles.divRepo1}>
          <div className={Styles.divWrapperA}>
            <a href={item.html_url} className={Styles.aRepo}>
              {`${item.full_name} `}
              <span className="label label-danger">{item.language ? `(${item.language})` : ''}</span>
            </a>
            <p className={Styles.pDesc}>{item.description ? item.description : ' .'}</p>
          </div>
          <div className={Styles.divWrapperStars}>
            <div className={Styles.divStars}>
              <img alt="#" src={forkURL} className={Styles.imgStar} />
              <p className={Styles.pStar}>{item.forks}</p>
            </div>
            <div className={Styles.divStars}>
              <img alt="#" src={starURL} className={Styles.imgStar} />
              <p className={Styles.pStar}>{item.stargazers_count}</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: '10px' }} />
    </div>);
  })}</div>);
}
