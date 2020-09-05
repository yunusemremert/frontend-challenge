import { shallow, render } from 'enzyme'

import Header from './index'

describe('Header Component Render', () => {
   const comp = shallow(<Header />)

   it('Header Json File Save', () => {
      expect(render(comp)).toMatchSnapshot()
   })
})
