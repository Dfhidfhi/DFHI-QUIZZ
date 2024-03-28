import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ScorePage from '../ScorePage.vue'


describe('test ScorePagevue', () => {
    const quizQuestionLength = 5
    const numberOfCorrectAnswers = 5
    expect(ScorePage).toBeTruthy();
    const wrapper = mount(ScorePage, {
        props: {
            numberOfCorrectAnswers: numberOfCorrectAnswers,
            quizQuestionLength: quizQuestionLength
        }
    });

    it('should render p, h1 and router-link Tags', () => {
        expect(wrapper.find('p').exists()).toBe(true)
        expect(wrapper.find('h1').exists()).toBe(true)
        expect(wrapper.find('router-link').exists()).toBe(true)
    })

    it('should render props correctly', () => {
        expect(wrapper.vm.quizQuestionLength).toBe(5)
        expect(wrapper.vm.numberOfCorrectAnswers).toBe(5)
    })
})