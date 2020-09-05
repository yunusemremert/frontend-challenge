import { shallow, render } from 'enzyme'

import HeadSeo from './index'

const title = 'Movies title.'

describe('Head Seo Component Render', () => {
   const comp = shallow(<HeadSeo title={title} />)

   it('Head Seo Json File Save', () => {
      expect(render(comp)).toMatchSnapshot()
   })
})
