import React from 'react';
import {expect} from 'chai';
import SignupPage from './../SignupPage'
import {renderIntoDocument, scryRenderedDOMComponentsWithClass} from 'react-addons-test-utils';
describe('Signup Page', ()=>{
	it('has signupBox', ()=>{
		const component = renderIntoDocument(
	      <SignupPage />
	    );
	    const SignupBox = scryRenderedDOMComponentsWithClass(component, 'signupBox');
	    expect(SignupBox.length).to.equal(1);
	})
});