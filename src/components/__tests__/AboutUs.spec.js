import {describe, it, expect} from 'vitest'
import AboutUs from  '../../components/AboutUs.vue'
import {mount} from '@vue/test-utils'

describe('test AboutUs', () => {
    
    expect(AboutUs).toBeTruthy();
    const wrapper = mount(AboutUs);
    const img = wrapper.find('img')
    const AboutUstMessage ="Ich bin Aboubacar Camara, Student am DFHI-ISFATES. Im Rahmen meiner Bachelorarbeit habe ich mich entschlossen, eine DFHI-Quiz-App zu entwickeln, mit der man seine verschiedenen Vorlesungen von 6. Semester spielerisch wiederholen kann. Wer möchte, kann diese Gelegenheit nutzen, um seine Prüfungen zu bestehen."
    
    it('should render Classes correctly', () => {
        expect(wrapper.find('.container-about-us').exists()).toBe(true);
        expect(wrapper.find('.homeIcon').exists()).toBe(true);
        expect(wrapper.find('.text-about-us').exists()).toBe(true);
    })

    it('should render Tags correctly', () => {
        expect(img.exists()).toBe(true);
        expect(wrapper.find("h1").text()).toBe('Über uns');
        expect(wrapper.find('p').text()).toBe(AboutUstMessage)
        expect(wrapper.find("h2").text()).toBe('Viel spaß beim Spielen .');
     })

     it('should render links  correctly', () => {
        expect(img.element.src).toBe("/src/assets/home.svg");
        expect(wrapper.find('router-link[to="/Theme"]').exists()).toBe(true);   

       
     })
})