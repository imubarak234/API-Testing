/* eslint-disable class-methods-use-this */
import FetchWrapper from './fetchWrapper.js';
/**
 * @class Likes - handles all likes related methods
 */
export default class Likes {
  static #API = new FetchWrapper('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/');

  static #appID = 'rd64xKOPXxGFmPrj8pUt';

  /**
   * @instance method
   * @param {String} param0 - the id of the item
   * @returns - the server response
   * @memberof Likes
   */
  static async postLikes({ id } = {}) {
    const data = {
      item_id: id,
    };
    const response = await Likes.#API.post(`apps/${Likes.#appID}/likes/`, data);
    return response;
  }

  /**
   * @static method
   * @returns - the response from the server
   * @memberof Likes
   */
  static async getLikesAll() {
    const response = await Likes.#API.get(`apps/${Likes.#appID}/likes/`);
    return response;
  }

  /**
   * @static method
   * @param {String} param0 - the id of the item
   * @returns - the number of likes
   * @memberof Likes
   */
  static async getLikesOne(id) {
    const result = await Likes.getLikesAll();
    const { likes } = await result.find((item) => item.item_id === id) ?? { likes: 0 };
    return likes;
  }

  /**
   * @instance method
   * @param {String} param0 - the id of the item
   * @param {HTML Element} elem - the element to update its likes
   * @memberof Likes
   */
  static async updateLikes({ id } = {}, elem) {
    const likes = await Likes.getLikesOne(id);
    elem.innerHTML = likes;
  }
}

const title = document.querySelector('.comment-section h2');

Utils.displayComments(args)
  .then((data) => {
    data.forEach((element) => {
      title.innerHTML = `<h2>Comment(${Utils.getCount(data)})</h2>`
      const next = document.createElement('div');
      next.setAttribute('class', 'flex commenting');
      next.innerHTML = `<p>${element.creation_date} <p>${element.username} : ${element.comment}</p>`;
      space.append(next);
    });
  });

const span = document.querySelector('.close');
const forms = document.getElementById('form');
const add = document.getElementById('adding');

span.addEventListener('click', () => {
  divs.style.display = 'none';
  divs.in
}

  

  


  














/* eslint-disable no-console */

import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import MissionsGrid from './MissionsGrid';
import { reserveMission } from '../../redux/Missions/Missions';

const MissionsContainer = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.missionsReducer, shallowEqual);

  const bookMission = (id) => {
    dispatch(reserveMission(id));
  };

  return (
    <div className="container-fluid h-auto py-5">
      <MissionsGrid
        list={states}
        booking={bookMission}
      />
    </div>
  );
};

export default MissionsContainer;






import PropTypes from 'prop-types';
import MissionsItems from './MissionsItems';
import './Mission.css';

const MissionsGrid = (props) => {
  const { list, booking } = props;
  let count = 0;

  const changes = (next) => {
    let ans = '';
    if ((next % 2) === 0) ans = 'row bg-light';
    else ans = 'row';
    return ans;
  };

  const buttonClass = (args) => {
    let ans = '';
    if (args) ans = 'btn btn-outline-danger';
    else ans = 'btn btn-outline-secondary';
    return ans;
  };

  const buttonInfo = (args) => {
    let ans = '';
    if (args) ans = 'Leave Mission';
    else ans = 'Join Mission';
    return ans;
  };

  const memberButtonInfo = (args) => {
    let ans = '';
    if (args) ans = 'Active Member';
    else ans = 'NOT A MEMBER';
    return ans;
  };

  const memberButtonClass = (args) => {
    let ans = '';
    if (args) ans = 'btn btn-success';
    else ans = 'btn btn-secondary';
    return ans;
  };

  return (
    <div className="px-3 py-3">
      <div className="row">
        <div className="col-2 bords">
          <p className="h3">Mission</p>
        </div>
        <div className="col-6 bords">
          <p className="h3">Description</p>
        </div>
        <div className="col-2 bords">
          <p className="h3">Status</p>
        </div>
        <div className="col-2 bords" />
      </div>

      {
        list.map((missions) => {
          count += 1;
          return (
            <MissionsItems
              key={missions.mission_id}
              ids={missions.mission_id}
              name={missions.mission_name}
              description={missions.description}
              classes={changes(count)}
              booking={booking}
              infos={buttonInfo(missions.reserved)}
              btnClass={buttonClass(missions.reserved)}
              membersInfo={memberButtonInfo(missions.reserved)}
              membersClass={memberButtonClass(missions.reserved)}
            />
          );
        })
      }
    </div>
  );
};
MissionsGrid.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.string,
      mission_name: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  booking: PropTypes.func.isRequired,
};

export default MissionsGrid;







<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>




import PropTypes from 'prop-types';
import './Mission.css';

const MissionsItems = (props) => {
  const {
    name, description, classes, ids, booking, infos, btnClass, membersInfo, membersClass,
  } = props;

  return (
    <div className={classes}>
      <div className="col-2 bords">
        <p className="fw-normal">{name}</p>
      </div>
      <div className="col-6 bords">
        <p className="fw-normal">{description}</p>
      </div>
      <div className="col-2 bords d-flex flex-column justify-content-center">
        <button type="button" className={membersClass}>{membersInfo}</button>
      </div>
      <div className="col-2 bords d-flex flex-column justify-content-center">
        <button type="button" className={btnClass} onClick={() => booking(ids)}>{infos}</button>
      </div>
    </div>
  );
};

MissionsItems.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  booking: PropTypes.func.isRequired,
  ids: PropTypes.string.isRequired,
  infos: PropTypes.string.isRequired,
  btnClass: PropTypes.string.isRequired,
  membersInfo: PropTypes.string.isRequired,
  membersClass: PropTypes.string.isRequired,
};

export default MissionsItems;







const ADD_MISSION = 'space-travelers-hub/missions/ADD_MISSION';
const RESERVE_MISSION = 'space-travelers-hub/missions/RESERVE_MISSION';

const initialState = [];

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export const reserveMission = (payload) => ({
  type: RESERVE_MISSION,
  payload,
});

export const sort = (args) => {
  const ans = [];
  for (let x = 0; x < args.length; x += 1) {
    const newObj = {
      mission_id: args[x].mission_id,
      mission_name: args[x].mission_name,
      description: args[x].description,
      reserved: false,
    };
    ans.push(newObj);
  }
  return ans;
};

export const addAsync = () => (dispatch) => fetch('https://api.spacexdata.com/v3/missions')
  .then((response) => response.json())
  .then((data) => {
    const newData = sort(data);
    newData.map((info) => dispatch(addMission(info)));
  });

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    case RESERVE_MISSION:
      return state.map((next) => {
        if ((next.mission_id === action.payload)) {
          if (next.reserved) {
            return ({
              mission_id: next.mission_id,
              mission_name: next.mission_name,
              description: next.description,
              reserved: false,
            });
          }

          return ({
            mission_id: next.mission_id,
            mission_name: next.mission_name,
            description: next.description,
            reserved: true,
          });
        }
        return next;
      });
    default:
      return state;
  }
};

export default missionsReducer;


// methods thunks keep for later
export const getRockets = () => async (dispatch) => {
  // Fetch rockets here and dispatch displayRockets...
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  const data = await rockets.data;
  dispatch(fetchRockets(data));
};

const getRockets = async () => {
  // Fetch rockets here and dispatch displayRockets...
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  const data = await rockets.data;
  store.dispatch(fetchRockets(data));
};



import PropTypes from 'prop-types';
import MissionItem from './MissionItem';

const MissionsList = (props) => {
  const { lists } = props;
  return (
    <div>
      <h3 className="h3">My Missions</h3>
      <ul className="list-group">
        {
          lists.map((next) => (
            <MissionItem
              key={next.mission_id}
              names={next.mission_name}
            />
          ))
        }
      </ul>
    </div>
  );
};

MissionsList.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.string,
      mission_name: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
    }),
  ).isRequired,
};

export default MissionsList;


id: args[x].id,
rocket_name: args[x].rocket_name,
description: args[x].description,
image: args[x].flickr_images[0],
wiki: args[x].wikipedia,
reserved: false,


import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const { names } = props;

  return (
    <li className="list-group-item p-3 lead">{names}</li>
  );
};
MissionItem.propTypes = {
  names: PropTypes.string.isRequired,
};

export default MissionItem;


{
  isReserved && <button type="button" className="btn btn-info btn-sm p-2">Reserved</button>
}


import PropTypes from 'prop-types';
import RocketItems from './RocketItems';

const RocketList = (props) => {
  const { listsR, countR } = props;

  return (
    <div className="w-50 ms-3">
      <h3 className="h3">My Rockets</h3>
      <ul className="list-group">
        {
          listsR.map((next) => (
            <RocketItems
              key={next.id}
              names={next.rocket_name}
            />
          ))
        }
      </ul>
      {
      (countR === 0) && <p className="p-3 lead">No Rockets Reserved Yet</p>
    }
    </div>
  );
};

RocketList.propTypes = {
  listsR: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rocket_name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      wiki: PropTypes.string,
      reserved: PropTypes.bool,
    }),
  ).isRequired,
  countR: PropTypes.number.isRequired,
};

export default RocketList;



<li className="list-group-item p-3 lead">
      <p>{names}</p>
      <button type="button" className="btn btn-info btn-sm" onClick={missions(ids)}>Leave Mission</button>
    </li>










import React from 'react';
import renderer from 'react-test-renderer';
// import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Naver from '../Components/Navbar';
import Footer from '../Components/Footer';
import RocketContainer from '../Components/rockets/RocketContainer';
import MissionsContainer from '../Components/missions/MissionsContainer';
import ProfileContainer from '../Components/profiles/ProfileContainer';

describe('Series of tests rendering of each major components', () => {
  it('rendering of Navigation bar(Header) correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter to="/" className="navbar-brand">
          <Naver />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('rendering footer correctly', () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rendering Rockets page correctly', () => {
    const tree = renderer
      .create(<RocketContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rendering Missions page correctly', () => {
    const tree = renderer
      .create(<MissionsContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rendering Profiles Page correctly', () => {
    const tree = renderer
      .create(<ProfileContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const ADD_DATA = 'covid-metrics-webapp/Refresh/ADD_DATA';
const SELECT = 'covid-metrics-webapp/Refresh/SELECT';

const initialState = [];

export const addFresh = (payload) => ({
  type: ADD_DATA,
  payload,
});

export const select = (payload) => ({
  type: SELECT,
  payload,
});

const refreshReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    case SELECT:
      return state.map((next) => {
        if (next.continent === action.payload) {
          return ({
            ...next,
            picked: true,
          });
        }
        return ({
          ...next,
          picked: false,
        });
      });
    default:
      return state;
  }
};

export default refreshReducer;
