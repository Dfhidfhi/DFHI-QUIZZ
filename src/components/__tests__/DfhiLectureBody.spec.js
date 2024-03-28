import { describe, it, expect } from 'vitest'
import DfhiLectureBody from '../../components/DfhiLectureBody.vue'
import { mount } from '@vue/test-utils'

describe('test DfhiLectureBody ', () => {
    expect(DfhiLectureBody).toBeTruthy();
    const wrapper = mount(DfhiLectureBody,{
        propsData: {
            lectureName : 'testName',
            lectureImage : 'testImg',
            lectureQuestions :'testQuestion',
          }
    });
    it('should render Classes correctly', () => {

        expect(wrapper.find('.dfhiLecturetBody').exists()).toBe(true);

    })

    it('should render Tags and attributes correctly', () => {

        expect(wrapper.find("h1").exists()).toBe(true);
        expect(wrapper.find("img").exists()).toBe(true);
        expect(wrapper.find("h2").exists()).toBe(true);
        expect(wrapper.find('img').element.alt).toBe("lectureImage");
        expect(wrapper.find("h2").text()).toBe('testQuestion Fragen');

    })

    it('should render props correctly', () => {
 
        expect(wrapper.vm.lectureName).toBe('testName')
        expect(wrapper.vm.lectureImage).toBe('testImg')
        expect(wrapper.vm.lectureQuestions).toBe('testQuestion')

    })
})