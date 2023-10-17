import { faPersonWalkingDashedLineArrowRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

async function getSubjectsAPI() {
      try {
            axios.defaults.withCredentials = true;
            const response = await axios.get('http://localhost:8080/HD-EDUCATION/api-subject');
            return response
      } catch (e) {
            return [];
      }
}

async function getAuthAPI() {
      try {
            axios.defaults.withCredentials = true;
            const response = await axios.get('http://localhost:8080/HD-EDUCATION/api-login');
            return response;
      } catch (e) {
            return null;
      }
}

async function registerAPI(data) {
      try {
            axios.defaults.withCredentials = true;
            const response = await axios.post('http://localhost:8080/HD-EDUCATION/api-register', data);
            return response;
      } catch (e) {
            return null;
      }
}

async function getExamAPI(params) {
      try {
            const response = await axios.get('http://localhost:8080/HD-EDUCATION/api-test', { params: params });
            return response;
      } catch (e) {
            return null;
      }
}
async function getStaticticalTestAPI() {
      try {
            const response = await axios.get('http://localhost:8080/HD-EDUCATION/api-statictical-test');
            return response;
      } catch (e) {
            return null;
      }
}
async function getStaticticalTestByUserAPI() {
      try {
            const response = await axios.get('http://localhost:8080/HD-EDUCATION/api-all-test-of-student');
            return response;
      } catch (e) {
            return null;
      }
}

async function createNewExamAPI(data) {
      try {
            const response = await axios.post('http://localhost:8080/HD-EDUCATION/api-test', data)
            return response
      } catch (e) {
            return null;
      }
}

async function updateAnswerAPI(data) {
      try {
            axios.defaults.withCredentials = true;
            const response = await axios.put('http://localhost:8080/HD-EDUCATION/api-test', data)
            return response
      } catch (e) {
            return null;
      }
}

async function updateProfileAPI(data) {
      try {
            axios.defaults.withCredentials = true;
            const response = await axios.put('http://localhost:8080/HD-EDUCATION/api-student', data);
            return response;
      } catch (e) {
            return null;
      }
}

async function updateExamAPI(data) {
      try {
            axios.defaults.withCredentials = true;
            const response = await axios.put('http://localhost:8080/HD-EDUCATION/api-test', data);
            return response;
      } catch (e) {
            return null;
      }
}

export { getAuthAPI, getSubjectsAPI, registerAPI, getExamAPI, updateProfileAPI, updateExamAPI, createNewExamAPI, updateAnswerAPI, getStaticticalTestAPI, getStaticticalTestByUserAPI }
export default getSubjectsAPI;