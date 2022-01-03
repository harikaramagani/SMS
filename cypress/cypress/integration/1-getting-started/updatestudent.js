describe('My First Test', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/sms/SMS.html')
      cy.contains('STUDENT ADMISSION FORM')
      cy.get('#studentid').type('2017ME0010')
      cy.get('#firstname').type('HARIKAS')
      cy.get('#lastname').type('RAMAGANI')
      cy.get('#address').type('Guntur')
      cy.get('[onclick="updateStudent()"]').click()
    })
})