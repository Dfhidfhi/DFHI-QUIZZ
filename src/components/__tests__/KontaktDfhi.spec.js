import {describe, it, vi, expect} from 'vitest'
import Kontakt from  '../KontaktPage.vue'

import {mount, flushPromises} from '@vue/test-utils'

describe('test Kontakt', () => {
    console.log('handleSubsssmit appelée'); 
    expect(Kontakt).toBeTruthy();
    const wrapper = mount(Kontakt);
    const img = wrapper.find('img')
    
    it('should render Classes correctly', () => {
        expect(wrapper.find('.container-contact').exists()).toBe(true);
        expect(wrapper.find('.homeIcon').exists()).toBe(true);
      
    })

    it('should render Tags correctly', () => {
        expect(img.exists()).toBe(true);
        expect(wrapper.find("h1").exists()).toBe(true);
        expect(wrapper.find('h5').exists()).toBe(true);
        expect(wrapper.find("form").exists()).toBe(true);
    })
     it('should render links  correctly', () => {
        expect(img.element.src).toBe("/src/assets/home.svg");
        expect(wrapper.find('router-link[to="/Theme"]').exists()).toBe(true);   
    
     })
     it('should display error messages for empty fields', async () => {
    
            const wrapper = mount(Kontakt, {
              global: {
                stubs: {
                  teleport: true,
                },
              },
            })
            
            wrapper.vm.name = ''
            wrapper.vm.email = ''
            wrapper.vm.errors = {}
           
            wrapper.vm.handleSubmit()
            await flushPromises()
    
            expect(wrapper.vm.errors.name).toBe('Geben Sie den Name ein ')
            expect(wrapper.vm.errors.email).toBe('Geben Sie das Email ein ')
       
      })

     
      it('should display error message for empty name and for a false email', async () => {
        const wrapper = mount(Kontakt, {
          global: {
            stubs: {
              teleport: true,
            },
          },
        })
        wrapper.vm.name = '' 
        wrapper.vm.email = 'aboh.fr' 
        wrapper.vm.errors = {} 
      
        
        wrapper.vm.handleSubmit()
        await flushPromises() 
      
        expect(wrapper.vm.errors.name).toBe('Geben Sie den Name ein ')
        expect(wrapper.vm.errors.email).toBe('Geben Sie das richtige Email ein ')
      })
    
      it('should display error message for empty name and for a false email', async () => {
        const wrapper = mount(Kontakt, {
          global: {
            stubs: {
              teleport: true,
            },
          },
        })
        wrapper.vm.name = 'abou' 
        wrapper.vm.email = 'aboh@yah.fr' 
        wrapper.vm.errors = {} 
      
        
        wrapper.vm.handleSubmit()
        await flushPromises() 
      
        expect(wrapper.vm.errors.name).toBe(undefined)
        expect(wrapper.vm.errors.email).toBe(undefined)
      })
    


      it('should call handleSubmit when form is submitted', async () => {
        const handleSubmit = vi.fn()
        const wrapper = mount(Kontakt, {
          global: {
            stubs: {
              teleport: true,
            },
            mocks: {
              handleSubmit,
            },
          },
        })
    
        await wrapper.find('form').trigger('submit')
    
        expect(handleSubmit).toHaveBeenCalled()
      })

})