import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveTweets } from "../actions/tweets";
import { setAuthedUser } from "../actions/authedUser";

const AUTHED_ID = "tylermcginnis";

export const handleInitialData = () => {
  return async (dispatch) => {
    const { users, tweets } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveTweets(tweets));
    dispatch(setAuthedUser(AUTHED_ID));
  };
};
