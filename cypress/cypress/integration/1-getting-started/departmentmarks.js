describe('My First Test', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/sms/SMS.html')
      cy.contains('STUDENT ADMISSION FORM')
      //cy.get('[for="studentid"]').type('2017ME0010')
      cy.get('#reportForm > #semesterno').select('2')
      cy.get('[onclick="getIndividualList()"]').click()
     
    })
})