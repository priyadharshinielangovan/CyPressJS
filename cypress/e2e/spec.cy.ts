
import 'cypress-file-upload';
import HomePage from './PageObjects/HomePage'
import FormPage from './PageObjects/FormPage'
import 'cypress-mochawesome-reporter/register';
import 'cypress-file-upload';
interface UserData {
  
    Fname: string;
    Lname: string;
    email: string;
    mobile: string;
  }


  
describe('template spec', () => {
  const homepage=new HomePage();
  const formpage=new FormPage();
  before(function(){
  cy.visit(Cypress.env('url'))
  

  })
  
  it('Form filling', () => {
   
    homepage.ClickonFormsIcon().click();
    formpage.SelectParticularForm();
    cy.fixture<UserData>('example').then((data) => {
      formpage.FirstName().type(data.Fname);
      formpage.LastName().type(data.Lname);
      formpage.Email().type(data.email);
      formpage.GenderRadio('Female');
      formpage.Phonenumber().type(data.mobile)
      formpage.Subjects().type('New')
      formpage.HobbiesCheckbox().click();
      formpage.FileUpload().attachFile('test.png')
      formpage.Address().type('Test')
      //formpage.StateDropdown()
      //formpage.SelectCity()
      //formpage.Submit()
      expect("string1").to.equal("string1");
     })
    
    
   
   
  })


})