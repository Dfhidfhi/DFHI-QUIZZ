import { describe, it, expect } from 'vitest'
import HomePage from '../../components/HomePage.vue'
import { mount } from '@vue/test-utils'



describe('test HomePage', () => {
    expect(HomePage).toBeTruthy();
    const wrapper = mount(HomePage)
    const button = wrapper.get('button');
    const img = wrapper.find('img')

    it('should render classes correctly', () => {
        expect(wrapper.find('.container-bubbles-stars').exists()).toBe(true);
        expect(wrapper.find('.isfatesLogo').exists()).toBe(true);
        expect(wrapper.find('.centered-image').exists()).toBe(true);
        expect(wrapper.find('.logo').exists()).toBe(true);
        expect(wrapper.find('.homeIcon').exists()).toBe(true);
        expect(wrapper.find('.start-quizz-button').exists()).toBe(true);
        expect(wrapper.find('.bubbles-stars').exists()).toBe(true);
        expect(wrapper.find('.img1').exists()).toBe(true);

    })

    it('should render Tag and attribute correctly', () => {
        expect(img.exists()).toBe(true);
        expect(img.element.src).toBe("/src/assets/Dfhilogo.svg");


    })

    it('should render Button correctly', () => {

        expect(button.exists()).toBe(true);
        expect(button.text()).toBe("Start Quiz")
        button.trigger('click')
        

    })
    it('should render the number of spans and router correctly', () => {

         expect(wrapper.findAll('span')).toHaveLength(72)
        expect(wrapper.find('router-link[to="/Theme"]').exists()).toBe(true);   

    })
})