import { shallow, render } from 'enzyme'

import Container from './index'

const className = 'inner'

describe('Container Component Render', () => {
   const comp = shallow(<Container className={className}>Test</Container>)

   it('Container Json File Save', () => {
      expect(render(comp)).toMatchSnapshot()
   })
})
