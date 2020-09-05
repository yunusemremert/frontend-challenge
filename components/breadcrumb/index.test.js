import { shallow, render } from 'enzyme'

import Breadcrumb from './index'

const title = 'Test title.'

describe('Breadcrumb Component Render', () => {
   const comp = shallow(<Breadcrumb title={title} />)

   it('Breadcrumb Json File Save', () => {
      expect(render(comp)).toMatchSnapshot()
   })
})
