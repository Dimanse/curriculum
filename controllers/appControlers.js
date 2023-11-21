

const inicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    })
}

const experienciaLaboral = (req,  res) => {
    res.render('laboral', {
        pagina: 'Experiencia Laboral'
    } )
}

const formacionAcademica = (req,  res) => {
    res.render('estudio', {
        pagina: 'Experiencia Académica'
    } )
}

const imprimirPdf = (req,  res) => {
    
    // const pdf = req._parsedOriginalUrl.href;
   

    res.render('pdf', {
      pagina: 'PDF',
      
    } )

}

export {
    inicio,
    experienciaLaboral,
    formacionAcademica,
    imprimirPdf,
}