import { shallow, render } from 'enzyme'

import Box from './index'

const title = 'Test title.'
const logo = '/favicon.ico'

describe('Box Component Render', () => {
   const comp = shallow(<Box title={title} image={logo} />)

   /*
   it('Resim Render', () => {
      expect(comp.find('img').prop('src')).toEqual(logoPath)
   })
   */

   it('Box Json File Save', () => {
      expect(render(comp)).toMatchSnapshot()
   })
})
