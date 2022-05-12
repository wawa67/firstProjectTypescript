interface Course{
    name:String;
    duration: Number;
    educator: String;
}
class CreateCourseService{
    execute(data:Course){
        console.log(data.name, data.duration,data.educator);
    }
}

export default new CreateCourseService();