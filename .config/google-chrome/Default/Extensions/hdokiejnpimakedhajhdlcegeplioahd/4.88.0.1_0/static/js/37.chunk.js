(window.webpackJsonpwebClient=window.webpackJsonpwebClient||[]).push([[37],{649:function(e,n){},650:function(e,n){},651:function(e,n){},652:function(e,n){},903:function(e,n,t){"use strict";t.r(n);var i=t(6),o=t(1),l=(t(0),t(648)),c=t(1167),u=t(784),a={id:0,type:"TryAutoFill",visible:!0,completed:null,seenAt:null,color:c.a.GREEN},r={complete:jest.fn(),hideExpandedSkillInDrawer:jest.fn()};jest.mock("../../hooks/use-secondary-onboarding-actions",function(){return{useSecondaryOnboardingActions:function(){return r}}}),jest.mock("react-redux",function(){return Object(i.a)({},jest.requireActual("react-redux"),{useSelector:jest.fn().mockReturnValueOnce({settings:{features:{newInfieldDesignForOnboarding:!0}}})})});var s=function(e){return Object(l.mount)(Object(o.jsx)(u.default,{skill:e,expanded:!0,fromAllSkillsDialog:!1}))};it("should render the TryAutoFill component without crashing",function(){var e=s(a);expect(e).toHaveLength(1)}),it('should invoke the complete function when clicking the input, after "fill" and finally "All set" action button',function(){var e=s(a);e.find("input.autofill-input").simulate("click"),e.find("div.old-infield-menu-item").simulate("click"),e.find("button.action-cta").simulate("click"),e.unmount(),expect(r.complete).toHaveBeenCalled(),expect(r.hideExpandedSkillInDrawer).toHaveBeenCalled()})}}]);