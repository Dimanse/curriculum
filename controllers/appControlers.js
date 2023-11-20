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
        pagina: 'Experiencia Laboral'
    } )
}

export {
    inicio,
    experienciaLaboral,
    formacionAcademica,
}