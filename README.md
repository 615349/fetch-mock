This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

extra steps:

1, `yarn add enzyme enzyme-adapter-react-16`

2, Add `src/setupTests.js`
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

3, `yarn add fetch-mock`, which would require `node-fetch`
http://www.wheresrhys.co.uk/fetch-mock/#usagerequirements

4, `yarn test --coverage` to check the coverage
