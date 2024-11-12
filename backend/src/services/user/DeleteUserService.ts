import User from "../../models/user";

const DeleteUserServices = async(id:number) => {
    await User.destroy({where:{id}})
};

export default DeleteUserServices;