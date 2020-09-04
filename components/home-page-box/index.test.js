import { shallow, render } from 'enzyme'

import HomePageBox from './index'

const data = {
   key: 'series',
   path: '/series',
   title: 'SERIES',
   description: 'Popular Series'
}

describe('Home Page Box Component Render', () => {
   const comp = shallow(<HomePageBox data={data} />)

   it('Home Page Box Json File Save', () => {
      expect(render(comp)).toMatchSnapshot()
   })
})
