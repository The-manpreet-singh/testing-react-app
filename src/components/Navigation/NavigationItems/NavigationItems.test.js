import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() }); //connect enzyme to app

describe("<NavigationItems />", () => {
  // 2 items burgerbuilder, auth
  it("should render two <NavigationItem /> elements if not authenticated", () => {
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
  // 3 items burgerbuilder, orders, logout
  it("should render three <NavigationItem /> elements if authenticated", () => {
    const wrapper = shallow(<NavigationItems isAuthenticated />);
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
});
