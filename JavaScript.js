function calcularIMC(peso, altura){
    var kg = parseFloat(prompt('Digite seu peso: '));
    var alt = parseFloat(prompt('Digite sua altura: '));
    var result = (kg / (alt * alt));
    alert('Seu IMC é de: '+result); 
}