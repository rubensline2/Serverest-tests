export class Home {
    url = '/';
    
    navigate() {
      cy.visit(this.url);
    }
  
  }
  
  export const HomePage = new Home();