

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
    res.render('pdf', {
      pagina: 'PDF',
      
    } )

}

const galeriaCertificados = (req, res) => {
    res.render('certificados', {
        pagina: 'Certificados Académicos',
    })
}

const galeriaReferencias = (req, res) => {
    res.render('referencias', {
        pagina: 'Cartas de Referencia'
    })
}

export {
    inicio,
    experienciaLaboral,
    formacionAcademica,
    imprimirPdf,
    galeriaCertificados,
    galeriaReferencias,
}