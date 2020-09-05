import { shallow, render } from 'enzyme'

import Search from './index'

describe('Search Component Render', () => {
   const comp = shallow(<Search />)

   it('Search Json File Save', () => {
      expect(render(comp)).toMatchSnapshot()
   })
})
