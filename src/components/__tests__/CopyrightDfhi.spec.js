import {describe, it, expect} from 'vitest'
import CopyrightDfhi from '../../components/CopyrightDfhi.vue'
import {mount} from '@vue/test-utils'


describe('test CopyrightDfhi', () => {
     expect(CopyrightDfhi).toBeTruthy();
    const wrapper = mount(CopyrightDfhi)
    const img = wrapper.find('img')
    const copyrightMessage ="Name und Anschrift des Verantwortlichen Kontaktdaten des Datenschutzbeauftragten Allgemeines zur Datenverarbeitung Rechte der betroffenen Person Bereitstellung der Webseite. Verantwortlichen Der Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer datenschutzrechtlicher Bestimmungen ist:"

    it('should render classes correctly', () => {
     expect(wrapper.find('.container-data-privacy').exists()).toBe(true);
     expect(wrapper.find('.homeIcon').exists()).toBe(true);
     expect(wrapper.find('.infoDataPrivacy').exists()).toBe(true);
     expect(wrapper.find('.ContactPrivacy').exists()).toBe(true);
     expect(wrapper.find('.FooterContactPrivacy').exists()).toBe(true);
    

 })
    it('should render Tags correctly', () => {
     expect(img.element.src).toBe("/src/assets/home.svg");
     expect(wrapper.find('h1').exists()).toBe(true);
     expect(wrapper.find('h1').text()).toBe("Datenschutz");
     expect(wrapper.find('.FooterContactPrivacy p').text()).toBe("DFHI-Quizz GmbH");
     expect(img.element.title).toBe("to up");
     expect(wrapper.find('p').text()).toBe(copyrightMessage)

    })

    it('should render number of p and Router correctly', () => {
            expect(wrapper.findAll('p')).toHaveLength(8)
            expect(wrapper.find('router-link[to="/Theme"]').exists()).toBe(true);   

     })
})