import { SectionInfo } from './SectionInfo';

describe('section info rendering', () => {

    const sectionInfo = {
        title: 'Hello World! Mi chiamo Antonio',
        info: `Sono uno sviluppatore software! 
            Ho mosso i miei primi passi con JAVA e Spring Boot ma adesso 
            lavoro con Javascript, Typescript, Angular, React, next.js e altre 
            fantastiche librerie e frameworks.`,
        image: '/images/profile.jpeg'
    };

    it('should render', () => {

        cy.readFile('public/images/profile.jpeg', null).then((img) => {
            // Intercept requests to Next.js backend image endpoint
            cy.intercept('_next/image*', {
              statusCode: 200,
              headers: { 'Content-Type': 'image/png' },
              body: img.buffer,
            });
        });

        cy.viewport('macbook-16');
        cy.mount(<SectionInfo {... sectionInfo} />);
    });
});