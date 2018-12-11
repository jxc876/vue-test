import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {

  it('renders props.msg when passed', () => {
    const msg = 'new message'

    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    const renderedText = wrapper.find('span').text()
    expect(renderedText).to.equal('new message');
    // expect(wrapper.text()).to.include(msg)
  })

})
