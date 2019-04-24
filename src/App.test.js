/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);  
 
});

   describe('Addition', () => {
      it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
      });
*/
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

    describe('App component', () => {
      it('starts with a count of 0', () => {
        const wrapper = shallow(<App />);
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: -1');
      });
    });

	
	  describe('App component', () => {
   

      it('increments count by 1 when the increment button is clicked', () => {
        const wrapper = shallow(<App />);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: 1');
      });
    });
	
	
	  it('matches the snapshot', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
    });
	