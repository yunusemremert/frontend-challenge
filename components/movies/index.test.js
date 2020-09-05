import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import configureStore from 'redux-mock-store'
const mockStore = configureStore([thunk])

import { shallow, mount, render } from 'enzyme'

import Movies from './index'

/*jest.mock('react-redux', () => ({
   useDispatch: () => {},
   useSelector: () => ({
      movies: {
         limitPosts: [],
         filterPosts: [],
         loading: []
      }
   })
}))*/

describe('My Connected React-Redux Component', () => {
   const store = mockStore({
      movies: {
         limitPosts: [
            {
               title: 'Sherlock: The Abominable Bride',
               images: {
                  PosterArt: {
                     url:
                        'https://streamcoimg-a.akamaihd.net/000/115/93/11593-PosterArt-33274b61ab0cb0e19cb7bff35824efb9.jpg'
                  }
               },
               programType: 'movie',
               releaseYear: '2020'
            }
         ],
         filterPosts: [],
         loading: []
      }
   })

   //store.dispatch = jest.fn()

   const comp = mount(
      <Provider store={store}>
         <Movies />
      </Provider>
   )

   it('should render with given state from Redux store', () => {
      expect(comp.find('Box').length).toEqual(1)
   })

   it('should dispatch an action on button click', () => {
      // Next useEffect problem
      //expect(render(comp)).toMatchSnapshot()
   })
})
