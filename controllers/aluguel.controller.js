import aluguelService from "../services/aluguel.service.js";

const create = async (req, res) => {
    try {
        const { carro, usuario, username, inicioAluguel, fimAluguel } = req.body;




        let getFinalDate = new Date(fimAluguel)

        let dateToday = new Date(Date.now())

        if (!carro, !username, !fimAluguel) {
            res.status(400).send({ message: "Submit all fields for registration." })
        }

        console.log(carro._id)
        console.log(fimAluguel)

        console.log(getFinalDate)

        console.log(dateToday)


        const rent = await aluguelService.findService();

        const hasThisCar = await aluguelService.findAllService();

        console.log(rent)

        console.log(hasThisCar)

        const id = carro._id

        if (hasThisCar.find((a) => a.carro._id = id)) {
            return res.status(400).send({ message: "Esse carro está indisponível." })
        } else {
            if (dateToday < getFinalDate) {
                console.log(rent)
                res.status(201).send({
                    message: "Aluguel registrado com sucesso!",
                    aluguel: {
                        carro,
                        usuario,
                        inicioAluguel,
                        fimAluguel
                    }
                })
                // if (!user) {
                //     return res.status(400).send({ message: "Erro ao registrar aluguel" });
                // }
                const user = await aluguelService.createService(req.body);
            } else {
                return res.status(400).send({ message: "Esse carro está indisponível." })
            }
        }

    }
    catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findAll = async (req, res) => {
    try {
        const rents = await (aluguelService.findAllService());

        if (rents.length === 0) {
            return res.status(400).send({ message: "There are no registered rents." })
        }

        res.send(rents);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}


export default { create, findAll }