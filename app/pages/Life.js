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
 *     Initial: 2018/01/21        Sun Zhiyue
 */

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native-elements';
import { View } from 'react-native';

import LifeCarousel from '../components/Life/Notable';

class FindScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '生活',
    header: null,
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'ios-shirt' : 'ios-shirt-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  }
  render() {
    return (
      <View>
        <View>
          <Header
            backgroundColor="#fff"
            centerComponent={{ text: '生活', style: { color: '#000' } }}
          />
        </View>
        <LifeCarousel />
      </View>
    );
  }
}
export default FindScreen;
