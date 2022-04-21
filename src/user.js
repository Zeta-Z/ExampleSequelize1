const db = require('../models')

exports.list = async (event) =>{

    try{
        const user = await db.users.findAndCountAll();

        if(user.count != 0){
            return{
                statusCode: 200,
                body: JSON.stringify(user)
            }
        }else{
            return{
                statusCode:404,
                body: JSON.stringify("Erros, no hay registros en la tabla")
            }
        }

    }catch(error){
        return{
            statusCode:500,
            body: JSON.stringify("Error!! " + error)
        }

    }
}

exports.create = async (event) =>{

    const {email,firstName,secondName,firstSurname,secondSurname,documentNumber,roleId,statusId} = JSON.parse(event.body)

    try{

        const user = await db.users.findOne({
            where: {email: email}
        });

        if(user){
            return{
                statusCode: 409,
                body: JSON.stringify("Usuario existente en el sistema")
            }
        }else{
            const newUser = await db.users.create({
                firstName: firstName,
                secondName:secondName,
                firstSurname: firstSurname,
                secondSurname: secondSurname,
                email: email,
                documentNumber:documentNumber,
                roleId: roleId,
                statusId: statusId
            });

            return{
                statusCode: 200,
                body: JSON.stringify("usuario creado de forma exitosa"+ JSON.stringify(newUser))
            }
        }

    }catch(error){
        return{
            statusCode: 500,
            body: JSON.stringify("Error!!!" + error)
        }
    }
}

exports.update = async (event) =>{

    const {email,firstName,secondName,firstSurname,secondSurname,documentNumber,roleId,statusId} = JSON.parse(event.body);

    try{

        const user = await db.users.findOne({
            where: {email: email}
        });

        if(!user){
            return{
                statusCode: 404,
                body: JSON.stringify("Usuario No existente en el sistema")
            }
        }else{
            const updatedUser = await db.users.update({
                firstName: firstName,
                secondName:secondName,
                firstSurname: firstSurname,
                secondSurname: secondSurname,
                documentNumber:documentNumber,
                statusId: statusId
            },{
                where:{
                    email:email
                }
            });
            return{
                statusCode: 200,
                body: JSON.stringify("Usuario Editado de forma correcta!")
            }
        }

    }catch(error){
        return{
            statusCode: 500,
            body: JSON.stringify("Error!!!" + error)
        }
    }
}