import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

configure({ adapter: new Adapter() }); //connect enzyme to app

describe("<BurgerBuilder />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });

  it("should render <BuildControls/> when receiving ingredient", () => {
    wrapper.setProps({ ings: { salad: 0 } }); // set opposite ings: null
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
