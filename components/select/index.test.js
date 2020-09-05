import { shallow, render } from 'enzyme'

import Select from './index'

describe('Select Component Render', () => {
   const comp = shallow(<Select />)

   it('Select Json File Save', () => {
      expect(render(comp)).toMatchSnapshot()
   })
})
