import { shallow, render } from 'enzyme'

import HomePage from './index'

describe('Home Page Component Render', () => {
   const comp = shallow(<HomePage />)

   it('Home Page Json File Save', () => {
      expect(render(comp)).toMatchSnapshot()
   })
})
