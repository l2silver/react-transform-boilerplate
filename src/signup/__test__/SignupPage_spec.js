import {expect} from 'chai';
import SignupPage from './../SignupPage'
import {renderIntoDocument, scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';
describe('Signup Page', ()=>{
	it('has signupBox', ()=>{
		const component = renderIntoDocument(
	      <Voting pair={["Trainspotting", "28 Days Later"]} />
	    );
	    const SignupBox = scryRenderedDOMComponentsWithTag(component, 'SignupBox');
	    expect(SignupBox.length).to.equal(1);
	})
});