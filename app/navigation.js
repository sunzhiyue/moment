/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/01/16        Sun Zhiyue
 */
import { TabNavigator } from 'react-navigation';

import HomeScreen from './pages/Home';
import FindScreen from './pages/Find';
import PublishScreen from './pages/Publish';
import LifeScreen from './pages/Life';
import ProfileScreen from './pages/Profile';

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Find: {
    screen: FindScreen,
  },
  Publish: {
    screen: PublishScreen,
  },
  Life: {
    screen: LifeScreen,
  },
  Profle: {
    screen: ProfileScreen,
  },
}, {
  tabBarPosition: 'bottom',
  lazy: 'true',
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#000',
    labelStyle: {
      fontSize: 10,
    },
    style: {
      backgroundColor: '#fff',
      height: 56,
    },
    indicatorStyle: {
      height: 0,
    },
    showIcon: 'true',
  },
});

const Navigations = {
  Main: { screen: RootTabs },
};

export default Navigations;
