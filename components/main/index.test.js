import { shallow, render } from 'enzyme'

import Main from './index'

const title = 'Main title.'

describe('Main Component Render', () => {
   const comp = shallow(<Main title={title}>Children</Main>)

   it('Main Json File Save', () => {
      expect(render(comp)).toMatchSnapshot()
   })
})
