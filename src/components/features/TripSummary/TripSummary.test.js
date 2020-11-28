import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe ('Component TripSummary', () => {
  it('should render correct Link and img', () => {
    const expectedLink = '/trip/abc';
    const expectedImage = 'image.jpg';
    const expectedAltImage = 'somealt';
    const component = shallow(<TripSummary id="abc" tags={['tag1', 'tag2', 'tag3']} cost="" days={1} image={expectedImage} name={expectedAltImage} />);
    
    const renderedLink = component.find('Link').prop('to');
    expect(renderedLink).toEqual(expectedLink);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAltImage);
  });
  
  it('should render correctly props name cost and days', () => {
    const expectedName = 'tripName';
    const expectedDays = 1;
    const expectedCost = '$ 10000';
    const component = shallow(<TripSummary name={expectedName} days={expectedDays} cost={expectedCost} id="" tags={['a', 'b', 'c']} image="" />);
    
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').at(0).text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').at(1).text()).toEqual(`from ${expectedCost}`);
  });
  
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  
  it('should render correct tags', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow (<TripSummary tags={expectedTags} id="" name="" cost="" days={1} image="" />);
    
    expect(component.find('.tags span').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedTags[2]);
  });
  
  it('should not render tags if props tags is false', () => {
    const component = shallow (<TripSummary tags={[]} id="" image="" cost="" name="" days={1} />);
    
    expect(component.hasClass('tags')).toBe(false);
    expect(
      shallow(<TripSummary id="" image="" cost="" name="" days={1} />).hasClass('tags')
    ).toBe(false);
  });
});