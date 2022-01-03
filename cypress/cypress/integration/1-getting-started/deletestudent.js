describe('My First Test', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/sms/SMS.html')
      cy.contains('STUDENT ADMISSION FORM')
      cy.get('#studentid').type('2017ME00')
      cy.get('[onclick="deleteStudent()"]').click()
    })
})