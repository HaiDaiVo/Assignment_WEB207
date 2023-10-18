import Home from '../pages/Home';
import Login from '../pages/Login';
import Courses from '../pages/Courses';
import Test from '../pages/Test';
import Introduce from '~/components/Layouts/DefaultLayout/Content/Introduce';
import Profile from '../pages/Profile';
import Exam from '~/pages/Exam';
import CourseDetail from '~/pages/Course/CourseDetail';
//Public routes
const publicRoutes = [
      { path: '/', component: Home },
      { path: '/login', component: Login, layout: null },
      { path: '/test', component: Test, layout: null },
      { path: '/Courses', component: Courses },
      { path: '/profile', component: Profile, layout: null },
      { path: '/introduce', component: Introduce },
      { path: '/course/detail', component: CourseDetail },

      { path: '/course/detail/:id/:name', component: CourseDetail },
      { path: '/exams/:id', component: Exam, layout: null },
]
//private routes
const privateRoutes = [
      { path: '/profile', component: Profile },
]
export { publicRoutes, privateRoutes } 