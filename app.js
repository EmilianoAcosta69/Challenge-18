// Dada las revoluciones por minuto de un auto en un juego de carreras, indique si el conductor debe seguir con el mismo cambio, bajarlo o aumentarlo. 
//Sabiendo que:
// Si las RPM son menores a 1000 debe bajar
// Si las RPM están entre 1000 y 3000 debe mantener
// Si las RPM son más de 3000 debe subir

let revoluciones = parseInt(prompt('A cuantas RPM (Revolucines por Minuto) va usted?'));

if(isNaN (revoluciones) || revoluciones <= 0){
    alert('El numero ingresado no es correcto. Vuelve a intentarlo');
}else if(revoluciones > 0 && revoluciones < 1000){
    alert('Baja un cambio.');
}else if(revoluciones >= 1000 && revoluciones <= 3000){
    alert('Segui con esa velocidad, vas bien.');
}else if(revoluciones > 3000){
    alert('Vas a tener que subir un cambio.');
}
