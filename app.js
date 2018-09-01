const http = new easyHttp;

// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const data = {
  name : 'Lakshay Sharma',
  username : '1234567898',
  email : 'lakshay@gmail.com'
}

http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

