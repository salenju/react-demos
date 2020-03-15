import React from "react";

const ThemeContext = React.createContext("light");

class Context01 extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

const Toolbar = props => {
  return (
    <div>
      <ThemeButton />
    </div>
  );
};

const TestData = props => {
  return <div>TestData</div>;
};

class ThemeButton extends React.Component {
  componentDidMount() {
    console.log("====>>>", this.context);
  }
  render() {
    return (
      <div>
        <TestData />
        <button theme={this.context} />
      </div>
    );
  }
}

export default Context01;
