import { describe, it, expect } from 'vitest'
import DfhiLectureBody from '../../components/DfhiLectureBody.vue'
import { mount } from '@vue/test-utils'


describe('test e', () => {
    const wrapper = mount(DfhiLectureBody);
   

    it('should rendercorrectly', () => {
        

        
        expect(wrapper).toBeTruthy();
        expect(wrapper.element.subjectName).toBe();
        expect(wrapper.element.subjectImage).toBe();
        expect(wrapper.element.subjectQuestions).toBe();
        
      
     })
  
})