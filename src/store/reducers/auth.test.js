// we dont need enyzme bcs we dont test react, we test noraml js function this tym
import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    // set initial state undefined and action is empty object
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  //reducer take 2 argument initialState and actionTypes
  it("should store the token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token", //payload from action file
          userId: "some-user-id",
        }
      )
    ).toEqual({
      token: "some-token", //we set and test
      userId: "some-user-id", //we set
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
