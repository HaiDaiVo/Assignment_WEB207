import Home from '../pages/Home';
import Login from '../pages/Login';
import Exams from '../pages/Exams';
import Test from '../pages/Test';
import Course from '../pages/Course';
import Profile from '../pages/Profile';
import Exam from '~/pages/Exam/index,';
//Public routes
const publicRoutes = [
      { path: '/', component: Home },
      { path: '/login', component: Login, layout: null },
      { path: '/exams', component: Exams },
      { path: '/exams/exam', component: Exam,layout : null },
      { path: '/test', component: Test, layout: null },
      { path: '/course', component: Course },
      { path: '/profile', component: Profile, layout: null },

]
//private routes
const privateRoutes = [
      { path: '/profile', component: Profile },
]

export { publicRoutes, privateRoutes } 