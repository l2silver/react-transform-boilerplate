import React from 'react';
import {expect} from 'chai';
import SignupBox from './../SignupBox';
import {renderIntoDocument, scryRenderedDOMComponentsWithClass} from 'react-addons-test-utils';
describe('SignupBox', ()=>{
	it('has SignupForm', ()=>{
		const component = renderIntoDocument(
	      <SignupBox />
	    );
	    const SignupForm = scryRenderedDOMComponentsWithClass(component, 'SignupForm');
	    expect(SignupForm.length).to.equal(1);
	})
});