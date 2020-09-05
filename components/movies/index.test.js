import { configure, render, shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import * as ReactReduxHooks from 'react-redux'
import thunk from 'redux-thunk'

import Movies from './index'

describe('Movies', () => {
   let wrapper
   let useEffect
   let store

   const mockUseEffect = () => {
      useEffect.mockImplementationOnce((f) => f())
   }

   beforeEach(() => {
      store = configureStore([thunk])({
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
         loading: false
      })

      useEffect = jest.spyOn(React, 'useEffect')
      mockUseEffect() // important to do it twice
      mockUseEffect()

      jest
         .spyOn(ReactReduxHooks, 'useSelector')
         .mockImplementation((state) => store.getState())

      jest
         .spyOn(ReactReduxHooks, 'useDispatch')
         .mockImplementation(() => store.dispatch)

      wrapper = shallow(
         <ReactReduxHooks.Provider store={store}>
            <Movies />
         </ReactReduxHooks.Provider>
      )
   })

   it('Render', () => {
      expect(render(wrapper)).toMatchSnapshot()
   })
})
