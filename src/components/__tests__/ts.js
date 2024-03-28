import { mount } from '@vue/test-utils'
import SreComponent from '@/components/SreComponent.vue'

describe('SreComponent', () => {
  it('should render correct content', () => {
    const answers = 5
    const length = 10
    const percentage = 50

    const wrapper = mount(SreComponent, {
      data() {
        return {
          Answers: answers,
          Length: length,
          Percentage: percentage
        }
      }
    })

    expect(wrapper.text()).toContain('die Punkte')
    expect(wrapper.text()).toContain(`${answers}/${length} = ${percentage}`)
    expect(wrapper.find('RouterLink').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Zurite')
  })
}),




 
 
const wrapper = mount(ScorePage, {
    propsData: {
        numberOfCorrectAnswers : '',
        quizQuestionLength : '',           
      }
});



import { mount } from '@vue/test-utils'
import SreComponent from '@/components/SreComponent.vue'

describe('SreComponent', () => {
  it('should render p and h1 elements', () => {
    const answers = 5
    const length = 10

    const wrapper = mount(SreComponent, {
      props: {
        Answers: answers,
        Length: length
      }
    })

    const pElement = wrapper.find('p')
    const h1Element = wrapper.find('h1')

    expect(pElement.exists()).toBe(true)
    expect(h1Element.exists()).toBe(true)
  })
})




import { mount } from '@vue/test-utils'
import SreComponent from '@/components/SreComponent.vue'

describe('SreComponent', () => {
  it('should render p and h1 elements', () => {
    const answers = 5
    const length = 10

    const wrapper = mount(SreComponent, {
      props: {
        Answers: answers,
        Length: length
      },
      global: {
        components: {
          RouterLink
        }
      }
    })

    const pElement = wrapper.find('p')
    const h1Element = wrapper.find('h1')

    expect(pElement.exists()).toBe(true)
    expect(h1Element.exists()).toBe(true)
  })
})




const { chromium } = require('@playwright/test');
const { TestService } = require('@playwright/test-service');

(async () => {
  const service = new TestService({
    browser: chromium.launch(),
    workers: 10, // Nombre d'utilisateurs simulés
    updateSnapshots: false,
  });

  await service.load('load-test-scenario.js');
  await service.run();
})();


for (let i = 0; i < numberOfUsers; i++) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    users.push({ browser, page });
  }





  const { chromium } = require('playwright');

(async () => {
  const numInstances = 10; // Nombre d'instances de navigateur (utilisateurs simulés)

  const browserPromises = [];

  for (let i = 0; i < numInstances; i++) {
    const browserPromise = (async () => {
      const browser = await chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();

      // Définissez le scénario de test de charge ici
      await page.goto('https://www.example.com');
      // Exécutez les actions nécessaires pour simuler l'activité de l'utilisateur
      // ...

      await browser.close();
    })();

    browserPromises.push(browserPromise);
  }

  await Promise.all(browserPromises);
})();



