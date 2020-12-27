new Vue({
  el: "#app",
  data: {
    record: {
      id: 1,
      provider: {
        logo_path: 'https://leevinireland.com/wp-content/uploads/2019/03/logo-transparent.png',
        name: 'Leevin Service and Management Ltd.',
        address: '36 North great George Street, D1.',
        city: 'Dublin',
        postal_code: '22222-22',
        website: 'https://leevinireland.com/'
      },
      contract_sections: [
        {
          type: 'licensee',
          content: [
           {
              from: 'Licensee',
              to: 'Anderson Fujihara',
              custom: null
           },
           {
              from: 'Email',
              to: 'fujihara.anderson@gmail.com',
              custom: null
           },
          ],
        },
        {
          type: 'lincesor',
          content: [
           {
              from: 'Licensor',
              to: 'Leevin Service and Management Ltd',
              custom: null
           },
           {
              from: 'Email',
              to: 'contact@leevinireland.com',
              custom: null
           },
          ],
        },
        {
          type: 'free_text',
          content: "<p class=\"MsoNormal\" style=\"margin: 0cm -11.4pt; line-height: 22px; font-size: 11pt; font-family: Calibri, sans-serif; color: rgb(0, 0, 0); font-style: normal; text-align: justify;\"><span lang=\"EN-IE\" style=\"font-size: 10pt; line-height: 20px; font-family: Arial, sans-serif;\">This Agreement is made between Leevin Service and Management Ltd. Or Leevin Ireland, mentioned as the Licensor, and <b>(below)</b> as the Licensees or he/his, together referred to as the Parties:</span><span lang=\"EN-IE\" style=\"font-size: 10pt; line-height: 20px;\"><o:p></o:p></span></p>"
        }
      ]
    }
  },
  methods: {
    toggle: function(todo){
      todo.done = !todo.done
    }
  }
})




