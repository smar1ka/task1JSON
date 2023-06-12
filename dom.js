	fetch('ui.json')
  .then(response => response.json())
  .then(data => {
    // Access the JSON data and create HTML elements
    data.forEach(form => {

     
      var formContainer = document.createElement('div');
      
      // Set form alignment
      formContainer.style.display =  'flex' ;

      // formContainer.style.flexDirection =  'column' ;
      formContainer.style.flexDirection = form.form_alignment === 'vertical' ? 'column' : 'row';
      
      form.form_elements.forEach(element => {
        const elementContainer = document.createElement('div');
        
        if (element.type === 'button') {
          const button = document.createElement('button');
          button.textContent = 'Button';
          button.style.backgroundColor = element.color;
          elementContainer.appendChild(button);
        } else if (element.type === 'textBox') {
          const textBox = document.createElement('input');
          textBox.type = 'text';
          textBox.size = element.size;
          elementContainer.appendChild(textBox);
        } else if (element.type === 'label') {
          const label = document.createElement('label');
          label.textContent = element.content;
          label.style.color = element.color;
          elementContainer.appendChild(label);
        }
        
        formContainer.appendChild(elementContainer);
      });
      
      document.body.appendChild(formContainer);
    });

    // console.log(data[0]);return ;
  })
  .catch(error => {
    console.error('Error:', error);
  });
