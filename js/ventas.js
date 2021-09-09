class Computador {
    constructor(producto, precio, marca, procesador, dDuro, mRAM, pantalla){
        this.producto=producto;
        this.precio=precio;
        this.marca=marca;
        this.procesador=procesador;
        this.dDuro=dDuro;
        this.mRAM=mRAM;
        this.pantalla=pantalla;
    }
    toString(){
        return `<table>
        <tr><th>Producto<td>${this.producto}
        <tr><th>Precio<td>S/ ${this.precio}.00
        <tr><th>Marca<td>${this.marca}
        <tr><th>Procesador<td>${this.procesador}
        <tr><th>Disco Duro<td>${this.dDuro}
        <tr><th>Memoria RAM<td>${this.mRAM}
        <tr><th>Pantalla<td>${this.pantalla}"</table>`
    }
}
class Parlante {
    constructor(producto, precio, marca, entrada){
        this.producto=producto;
        this.precio=precio;
        this.marca=marca;
        this.entrada=entrada;
    }
    toString(){
        return `<table>
        <tr><th>Producto<td>${this.producto}
        <tr><th>Precio<td>S/ ${this.precio}.00
        <tr><th>Marca<td>${this.marca}
        <tr><th>Entrada<td>${this.entrada}</table>`
    }
}
class Impresora {
    constructor(producto, precio, marca, entrada){
        this.producto=producto;
        this.precio=precio;
        this.marca=marca;
        this.entrada=entrada;
       
    }
    toString(){
        return `<table>
        <tr><th>Producto<td>${this.producto}
        <tr><th>Precio<td> S/ ${this.precio}.00
        <tr><th>Marca<td>${this.marca}
        <tr><th>Entrada<td>${this.entrada}</table>`
    }
}
class Laptop {
    constructor(producto, precio, marca, procesador, dDuro, mRAM, touch, tamaño){
        this.producto=producto;
        this.precio=precio;
        this.marca=marca;
        this.procesador=procesador;
        this.dDuro=dDuro;
        this.mRAM=mRAM;
        this.touch=touch;
        this.tamaño=tamaño;
    }
    toString(){
        return `<table>
        <tr><th>Producto<td>${this.producto}
        <tr><th>Precio<td>S/ ${this.precio}.00
        <tr><th>Marca<td>${this.marca}
        <tr><th>Procesador<td>${this.procesador}
        <tr><th>Disco Duro<td>${this.dDuro}
        <tr><th>Memoria RAM<td>${this.mRAM}
        <tr><th>Táctil<td>${this.touch}
        <tr><th>Tamaño<td>${this.tamaño}"</table>`
    }
}
const compurador1 = new Computador("Ordenador de marca", 8500, "Lenovo", "i7-10501", "1TB 7200 RPM", "16GB DDR4 2400", "22");
const parlante1 = new Parlante("Parlante", 950, "Samsung", "USB & Bt");
const impresora1 = new Impresora("Impresora Multifuncional", 1600, "Epson", "USB & WiFi");
const laptop1 = new Laptop("Laptop", 5400, "ACER", "Intel i5-9700", "1TB 7200 RPM", "16GB DDR4 2400","Sí", 17);
function pt1(){
        document.getElementById("det1").innerHTML+=compurador1.toString();
}
function pt2(){
        document.getElementById("det1").innerHTML+=parlante1.toString();
}
function pt3(){
        document.getElementById("det1").innerHTML+=impresora1.toString();
}
function pt4(){

        document.getElementById("det1").innerHTML+=laptop1.toString();            
}
function ppro(){
        ccomp=document.getElementById("cantOr").value;
        cpar=document.getElementById("cantPar").value;
        cprint=document.getElementById("cantPr").value;
        cmon=document.getElementById("cantMon").value;

        por=ccomp*8500;
        ppar=cpar*950;
        pprint=cprint*1600;
        pmon=cmon*5400;

        document.getElementById("por").value=`S/ ${por}.00`
        document.getElementById("ppar").value=`S/ ${ppar}.00`
        document.getElementById("ppr").value=`S/ ${pprint}.00`
        document.getElementById("pmon").value=`S/ ${pmon}.00`

        psigv=por+ppar+pprint+pmon;
        document.getElementById("psigv").value=`S/ ${psigv}.00`

        igv=psigv*0.18;
        document.getElementById("igv").value=`S/ ${igv}.00`

        total=psigv+igv;
        document.getElementById("total").value=`S/ ${total}.00`           
}
function comprar(){
    
    let quitar = document.getElementsByClassName("oculto");
    for(i=0; i<quitar.length;i++){
        quitar[0].classList.toggle("oculto");
    }    
}
function imprimir(){
    let nom=prompt("Ingrese su nombre");
    let dni=+parseInt(prompt("Ingrese su DNI"));
    let add=prompt("Ingrese su dirección")
    let i=1;

    if (nom!="" && dni>=0 && dni<=99999999) {
        let canto= document.getElementById("cantOr").value;
        let preo= document.getElementById("por").value;

        let cantp= document.getElementById("cantPar").value;
        let prep= document.getElementById("ppar").value;

        let canti= document.getElementById("cantPr").value;
        let prei= document.getElementById("ppr").value;

        let cantl= document.getElementById("cantMon").value;
        let prel= document.getElementById("pmon").value;

        let psig= document.getElementById("psigv").value;
        let igv=document.getElementById("igv").value;
        let tot= document.getElementById("total").value;

        document.getElementById("imprimir").innerHTML+=   `<table class="imprimir">
            <tr><th class="head">BOLETA DE VENTA N°-<td class="pc">${i++}
            <tr><th class="nom">Nombre</th><td class="pc">${nom}</td></tr>
            <tr><th class="nom">DNI<td class="pc">${dni}
            <tr><th class="nom">Dirección<td class="pc">${add}
            <tr><th class="nom">Ordenador<td class="pc">Cantidad: ${canto}<td class="pc">${preo}
            <tr><th class="nom">Parlante<td class="pc">Cantidad: ${cantp}<td class="pc">${prep}
            <tr><th class="nom">Impresora<td class="pc">Cantidad: ${canti}<td class="pc">${prei}
            <tr><th class="nom">Laptop<td class="pc">Cantidad: ${cantl}<td class="pc">${prel}
            <tr><th class="nom">Precio sin IGV<td class="pc">${psig}    
            <tr><th class="nom">IGV<td class="pc">${igv}
            <tr><th class="nom">TOTAL<td class="pc">${tot}
            
        `
    } else {
        alert("Ingrese su nombre y DNI para continuar")
    }
   
}