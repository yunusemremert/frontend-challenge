import { shallow, render } from 'enzyme'

import Footer from './index'

describe('Footer Component Render', () => {
   const comp = shallow(<Footer />)

   it('Footer Json File Save', () => {
      expect(render(comp)).toMatchSnapshot()
   })
})
