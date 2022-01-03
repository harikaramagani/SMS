describe('My First Test', () => {
    it('Visits the student', () => {
      cy.visit('http://localhost:8080/sms/SMS.html')
      cy.contains('STUDENT ADMISSION FORM')
      cy.get('#marksAddForm > #studentid').type('2017ME0010')
      cy.get('#marksAddForm > #dept').select('CE')
      cy.get('#marksAddForm > #semesterno').select('1')
      cy.get('#courseid1').type('ME001')
      cy.get('#marks1').type('33')
      cy.get('#courseid2').type('ME002')
      cy.get('#marks2').type('56')
      cy.get('#courseid3').type('ME003')
      cy.get('#marks3').type('58')
      cy.get('#examstatus').select('PRESENT')
      cy.get('#datetaken').type('2021-12-17')
      cy.get('#marksAddForm > [type="button"]').click()
    })
})