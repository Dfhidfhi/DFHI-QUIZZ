import { describe, it, expect } from 'vitest'
import QuizFooter from '../../components/QuizFooter.vue'
import { mount } from '@vue/test-utils'



describe('test QuizFooter', () => {
    expect(QuizFooter).toBeTruthy();
    const wrapper = mount(QuizFooter)

    it('should render classes correctly', () => {
        expect(wrapper.find('#footer').exists()).toBe(true);
        expect(wrapper.find('.container-links-socialMedia').exists()).toBe(true);
        expect(wrapper.find('.links').exists()).toBe(true);
        expect(wrapper.find('.active').exists()).toBe(true);
        expect(wrapper.find('.socialMedia').exists()).toBe(true);
        expect(wrapper.find('.row').exists()).toBe(true);
        expect(wrapper.find('.horizontal-line').exists()).toBe(true);
        expect(wrapper.find('.copyright').exists()).toBe(true);

    })

    it('should render tests correctly', () => {
        const copyrightMessage = "Copyright © 2023 DFHI-Quizz . Alle Rechte vorbehalten. Dieses Material ist nur für den Bildungsgebrauch bestimmt, sofern nicht anders angegeben.";
        const socialMediaMessage = "Folgen Sie uns";
        expect(wrapper.html()).toContain("Über uns")
        expect(wrapper.html()).toContain("Github")
        expect(wrapper.html()).toContain("Datenschutz")
        expect(wrapper.html()).toContain("Kontakt")
        expect(wrapper.html()).toContain("Folgen Sie uns")
        expect(wrapper.find('.copyright').text()).toBe(copyrightMessage);
        expect(wrapper.find("p").text()).toBe(socialMediaMessage);

    })

    it('should render functional social media links and img', () => {
        expect(wrapper.find('a[href="https://www.facebook.com/"][target="_blank"][ aria-label="Besuchen Sie uns auf Facebook "]').exists()).toBe(true)
        expect(wrapper.find('a[href="https://www.linkedin.com/"][target="_blank"][aria-label= "Besuchen Sie uns auf Linkedin"]').exists()).toBe(true)
        expect(wrapper.find('a[href="https://www.twitter.com/"][target="_blank"][aria-label= "Besuchen Sie uns auf Twitter"]').exists()).toBe(true)
        expect(wrapper.find('img[src="/src/assets/linkedin.svg"][title="Besuchen Sie uns auf Linkedin"]').exists()).toBe(true)
        expect(wrapper.find('img[src="/src/assets/facebook.svg"][title="Besuchen Sie uns auf Facebook"]').exists()).toBe(true)
        expect(wrapper.find('img[src="/src/assets/twitter.svg"][title="Besuchen Sie uns auf Twitter"]').exists()).toBe(true)


        expect(wrapper.find('ul li a img').element.src).toBe("/src/assets/facebook.svg");
        expect(wrapper.findAll('.socialMedia ul li')).toHaveLength(3)




    })


    it('should render  Router correctly ', () => {
      
        expect(wrapper.find('router-link[to="/AboutUs"]').exists()).toBe(true);        
        expect(wrapper.find('router-link[to="/Copyright"]').exists()).toBe(true);        
        expect(wrapper.find('router-link[to="/Kontakt"]').exists()).toBe(true);



    })




})