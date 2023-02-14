function meuEscobo(){
    const form = document.querySelector('form');
    const dados = [];
    const resultado = document.querySelector('.resultado');
    
    function recebeForm(evento){
      evento.preventDefault();
      const peso = form.querySelector('#peso');
      const altura = form.querySelector('#altura');
      dados.push([peso.value, altura.value]);
      let pesoCalculo = parseFloat(dados[0][0]);
      let alturaCalculo = parseFloat(dados[0][1]);
      let imcCalculo = pesoCalculo / (Math.pow(alturaCalculo, 2));


      if(isNaN(pesoCalculo) || isNaN(alturaCalculo) || pesoCalculo <= 0 || alturaCalculo <= 0) {
        resultado.innerHTML = `Peso ou Altura inválidos`;
        return;
      }
      if(pesoCalculo >= 30 && pesoCalculo <= 300 && alturaCalculo >= 1.0 && alturaCalculo <= 2.5) {
        let imcCalculo = pesoCalculo / (alturaCalculo**2);
        if(imcCalculo < 18.5){
          resultado.innerHTML = `Seu IMC é de ${imcCalculo.toFixed(2)} (Abaixo do peso)`;
        }else if(imcCalculo >= 18.5 && imcCalculo <=24.9){
          resultado.innerHTML = `Seu IMC é de ${imcCalculo.toFixed(2)} (Peso normal)`;
        }else if(imcCalculo >= 25 && imcCalculo <= 29.9){
          resultado.innerHTML = `Seu IMC é de ${imcCalculo.toFixed(2)} (Sobre Peso)`;
        }else if(imcCalculo >= 30 && imcCalculo <= 34.9){
          resultado.innerHTML = `Seu IMC é de ${imcCalculo.toFixed(2)} (Obesidade grau 1)`;
        }else if(imcCalculo >= 35 && imcCalculo <= 39.9){
          resultado.innerHTML = `Seu IMC é de ${imcCalculo.toFixed(2)} (Obesidade grau 2)`;
        }else{
          resultado.innerHTML = `Seu IMC é de ${imcCalculo.toFixed(2)} (Obesidade grau 3)`;
        }
      } else {
        resultado.innerHTML = `Peso ou Altura inválidos`;
      }
    }
    
    form.addEventListener('submit', recebeForm);
    return
  }
  meuEscobo();