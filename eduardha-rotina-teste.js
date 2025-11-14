const nome = "Eduardha"
let diaUltil

for (let dia = 1; dia <=7; dia++){
    console.log(`Inicio do dia ${dia}`)
    
    if (dia == 6 || dia == 7){
        diaUltil = false
        console.log("Dia de fim de semana")
    } else {
        diaUltil = true
        console.log("Dia de meio de semana")
    }

    if (diaUltil) {
        let periodoDoDia = "manhã"
        
        while (periodoDoDia != "madrugada"){
            switch (periodoDoDia){
                case "manhã":
                    console.log(`Durante a manhã, a ${nome} está estudando`)
                    periodoDoDia = "tarde"
                    break

                case "tarde":
                    console.log(`Durante a tarde, a ${nome} está fazendo atividade`)
                    periodoDoDia = "noite"
                    break
                default:
                    console.log(`Durante a noite, a ${nome} está no tempo livre`)
                    periodoDoDia = "madrugada"
            }
        }
    } else{
        console.log(`${nome} está dormindo!`)
    }

    console.log("Final do dia " + dia)
    console.log("************************")
}