let calculation=localStorage.getItem('calculation') || '';

      showFinalValue();

      function calculate(number){
      calculation+=number;
      showFinalValue();
      localStorage.setItem('calculation',calculation);
      }

      function showFinalValue(){
        document.querySelector('.displayingOutput').innerHTML=calculation;
        //document.querySelector('.displayingOutput').innerHTML='hello';
      }