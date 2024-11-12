import ShowUserService from "./ShowUserService";

const UpdateUserService = async(id:number, data:{name:string, email:string}) => {
    const user = await ShowUserService(id);
    await user.update(data);
    await user.reload();
    return user;

};

export default UpdateUserService;