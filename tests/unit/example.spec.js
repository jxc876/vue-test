// 3rd party
import { expect } from 'chai'
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify';
import Vue from 'vue'

// https://github.com/vuetifyjs/vuetify/issues/243
Vue.config.ignoredElements = [
  'v-container', 'v-layout', 'v-flex'
];

// components
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {

  let localVue
  let wrapper

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify);

    wrapper = mount(HelloWorld, {
      localVue: localVue,
      propsData: { msg: 'my message' }
    })
  })

  it('renders props.msg when passed', () => {
    const renderedText = wrapper.find('span').text()
    expect(renderedText).to.equal('my message');
  })

  it('should contain a v-chip', () => {
    const renderedText = wrapper.find('.v-chip .v-chip__content').text()
    expect(renderedText).to.equal('Example Chip');
  })

})
