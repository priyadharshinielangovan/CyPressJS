class Formpage{



    SelectParticularForm()
{

    return cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
}

 FirstName(){

    return cy.get('#firstName')
 }

  LastName(){

    return cy.get('#lastName').click()
  }

  Email(){
    return cy.get('#userEmail')
  }

  GenderRadio(gender:string){
    cy.get('#genterWrapper .col-sm-12:nth-child(2) .custom-control-label').each(($el) => {
      cy.wrap($el).invoke('text').then((text) => {
        if (text.trim() === gender) {
          return cy.wrap($el).click();
        }
      });
    });
    // return cy.get('#genterWrapper .col-sm-12:nth-child(2) .custom-control-label').contains(gender)
  }

  Phonenumber(){

    return cy.get('#userNumber')
  }

  Subjects(){

    return cy.get('#subjectsInput')
  }

  HobbiesCheckbox(){
    

    return cy.contains('Sports')
  }

  FileUpload(){

    return cy.get('#uploadPicture')
  }
 Address(){

  return cy.get('#currentAddress')
 }

 StateDropdown(){

  return cy.get('#state').type('NCR').contains('NCR').click()
 }

   SelectCity(){

    return cy.get('#city').type('Delhi').contains('Delhi').click()
   }

   Submit(){

    return cy.get('#submit').click()
   }


   
}
export default Formpage;