import request from '@/utils/request'
export default{
    //1讲师列表(条件查询分页)
    //current当前页  limit每页记录数   TeacherQuery条件查询
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            //TeacherQuery条件查询 ,后端使用RequestBody获取数据
            //data表示把对象转换成json进行传递到接口里面
            data: teacherQuery
          })

    },
    //删除讲师
    deleteTeacherId(id){
        return request({
            url: `/eduservice/teacher/${id}`,
            method:'delete'
    })
},
  //添加讲师
  addTeacher(teacher){
        return request({
            url:`/eduservice/teacher/addTeacher`,
            method:'post',
            data:teacher
        })
  },
  //根据id查询讲师
  getTeacherInfo(id){
    return request({
        url:`/eduservice/teacher/getTeacher/${id}`,
        method:'get'
    })
  },
  //修改讲师
  updateTeacherInfo(teacher){
    return request({
      url:`/eduservice/teacher/updatTeacher`,
      method:'post',
      data:teacher
  })
  }
}