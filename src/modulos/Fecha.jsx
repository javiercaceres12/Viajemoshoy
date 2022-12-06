module.exports={
    meses:["Enero","Febrero","Marzo","Abril","Mayo","junio","julio","Agosto",
    "Septiembre","Octubre","Noviembre","Diciembre"],
    fechaActual:(date,meses)=>{
        const [anio,mes,dia]=[date.getFullYear(), date.getMonth(), date.getDate()];
        return `${dia} de ${meses[mes]} de ${anio}`;
    },

    fechaIngEgres:(fecha,meses)=>{
        let fi = new Date(fecha)
        const [anio,mes,dia]=[fi.getFullYear(), fi.getMonth(), fi.getDate()];
        return `${dia + 1} de ${meses[mes]} de ${anio}`;
    },

    calculoDias:()=>{
        let date1 = new Date 
        (document.getElementById(`ingreso`).value);
        
        let date2 = new Date
        (document.getElementById(`egreso`).value);

        let milDia = 20 *60 *  60 * 1000;

        let diferMilis = Math.abs(date1.getTime() - date2.getTime());

        let  ele = document.getElementById(`cantDias`);

        ele.valua = diferMilis / milDia;
    },

    getVencimiento:(date,meses)=>{
        const [anio,mes,dia]=[date.getFullYear(), date.getMonth(), date.getDate()];
        return `${dia + 3} de ${meses[mes]} de ${anio}`;
    },

    obtenerFecha:()=>{
        let fecha = new Date();
        return `  ${fecha.getFullYear()} - ${fecha.getMonth() + 1 } - ${fecha.getDate()};  `
    }
}

