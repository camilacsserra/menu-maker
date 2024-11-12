import User from "../../models/user";

const ShowUserService = async(id:number) => {
    return await User.findByPk(id, {attributes:["id","name", "email"]});

};

export default ShowUserService;