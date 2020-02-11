import React from 'react';
import { mount, shallow, render } from "enzyme";
import App from './App';
import EosLoader from "./components/EosLoader"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import NavIcon from "./components/NavIcon"
import ProgressBar from "./components/ProgressBar"
import Ressources from "./components/Ressources"
import RessourceType from "./components/RessourceType"
import TradeButtons from "./components/TradeButtons"

import Explorer from "./routes/Explorer"
import Home from "./routes/Home"
import Settings from "./routes/Settings"
import Wallet from "./routes/Wallet"


describe('Full App', () => {
  it('should render correctly in', () => {
    const component = shallow(<App />);
  
    expect(component).toMatchSnapshot();
  });
});


describe('test EosLoader', () => {
  it('should render correctly in', () => {
    const component = shallow(<EosLoader />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('test Header', () => {
  it('should render correctly in', () => {
    const component = shallow(<Header />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('test NavBar', () => {
  it('should render correctly in', () => {
    const component = shallow(<NavBar />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('test NavIcon', () => {
  it('should render correctly in', () => {
    const component = shallow(<NavIcon />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('test ProgressBar', () => {
  it('should render correctly in', () => {
    const component = shallow(<ProgressBar />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('test Ressources', () => {
  it('should render correctly in', () => {
    const component = shallow(<Ressources />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('test RessourceType', () => {
  it('should render correctly in', () => {
    const component = shallow(<RessourceType />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('test TradeButtons', () => {
  it('should render correctly in', () => {
    const component = shallow(<TradeButtons />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('test Explorer', () => {
  it('should render correctly in', () => {
    const component = shallow(<Explorer />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('test Home', () => {
  it('should render correctly in', () => {
    const component = shallow(<Home />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('test Settings', () => {
  it('should render correctly in', () => {
    const component = shallow(<Settings />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('test Wallet', () => {
  it('should render correctly in', () => {
    const component = shallow(<Wallet />);
  
    expect(component).toMatchSnapshot();
  });
});

