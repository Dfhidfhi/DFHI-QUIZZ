import { describe, it, expect } from 'vitest'
import DfhiQuestion from '../LectureQuestions/DfhiQuestion.vue'
import Lectures_data from "../../data/QuizData.json";
import { mount } from '@vue/test-utils'

describe('test AboutUs', () => {
    expect(DfhiQuestion).toBeTruthy();
   

    const wrapper = mount(DfhiQuestion, {
        propsData: {
            lectureQuestion: 'testProps',
            valueDisabled: "testProps1",
            ClickedchoiceId: "testProps2",
            backgroundColor: "testProps3",

        },
        data() {
            return Lectures_data;
        }
    });
    wrapper.vm.emitSelectedchoice();
    console.log(wrapper.emitted())




    it('should render Classes correctly', () => {
        expect(wrapper.find('.choices-container').exists()).toBe(true);
        expect(wrapper.find('.question-container').exists()).toBe(true);
        expect(wrapper.find('.FrageBox').exists()).toBe(true);
        expect(wrapper.find('.FrageText').exists()).toBe(true);
    })

    it('should render props correctly', () => {

        expect(wrapper.vm.lectureQuestion).toBe('testProps');
        expect(wrapper.vm.valueDisabled).toBe('testProps1');
        expect(wrapper.vm.ClickedchoiceId).toBe('testProps2');
        expect(wrapper.vm.backgroundColor).toBe('testProps3');


    })



 
})