import { describe, it, expect } from 'vitest'
import DfhiLectureHeader from '../../components/DfhiLectureHeader.vue'
import { mount, } from '@vue/test-utils'

describe('test AboutUs', () => {
    expect(DfhiLectureHeader).toBeTruthy();
    
    const wrapper = mount(DfhiLectureHeader, {
        propsData: {
            modelValue : 'testProps'
          }
        
    });
    const inputSearch = wrapper.find('input');

    it('should render Tag and Attribute correctly', () => {
        expect(wrapper.find('h1').exists()).toBe(true);
        expect(inputSearch.exists()).toBe(true);
        expect(wrapper.find('.homeIcon').exists()).toBe(true);
        expect(wrapper.find("h1").text()).toBe('DFHI-Quizz');
        expect(inputSearch.element.placeholder).toBe("Suche....");
    })

    it('should render emit correctly', () => {
        inputSearch.setValue('test');
        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
        expect(wrapper.emitted('update:modelValue').length).toBe(1);
        expect(wrapper.emitted('update:modelValue')[0]).toEqual(['test']);
    })

    it('should render props correctly', () => {
 
        expect(wrapper.vm.modelValue).toBe('testProps')

    })
})