Goal of this document is to define scope for Testing of ns-client which will fullfil testing pyramid.
Which includes *Unit tests, Integration tests, UI/e2e tests* 

### The tools with important dependencies
- [Jasmine](http://jasmine.github.io)
- [Jest](https://facebook.github.io/jest)
- [Enzyme](https://github.com/airbnb/enzyme)
- [jest/jest-cli](https://www.npmjs.com/package/jest-cli)
- [babel-jest/babel-preset-stage-0](https://www.npmjs.com/package/babel-preset-stage-0)
- [sinon](https://www.npmjs.com/package/sinon)
- react-addons-test-utils/enzyme
- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer)
- redux-mock-store

### Installations and Configuration

Install dependency packages
```
npm install babel-jest babel-preset-stage-0 enzyme jest-cli react-addons-test-utils react-test-renderer redux-mock-store sinon -D
```


==========================================================================================
==========================================================================================
Updates:
 - Sudip is helping out in Edgar .. started with UI enhancement you suggested earlier
 - Sagar Patil .. working on responsive layout (signup flow)
   > Resumed improvement of inner pages (user managemetn)
 - We have configured a independent test repo .. organized code structure for graphql client, queries,
 - https://www.npmjs.com/package/mobx-apollo [not widely use.. we are checking various usecases] 
 - Mayura had a walkthrough of architecture, helping in exploring tech stack eg: graphql 
 - And spending daily some time with Sudeep for understanding
 - About testing, as discussed earlier: we are evaluting and finalizing stack for unit, integration, ui testing 

Question:
- Sagar: for mobile layouts: A) Bottom Bar - B) Hamburger menu