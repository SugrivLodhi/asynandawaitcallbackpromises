 // Dealing With CallBack 
 // const posts = [{ name: 'sugriv', lastname: 'Lodhi' },
 //     { name: 'Tejendra', lastname: 'Singh' },
 //     { name: 'Hina', lastname: 'Rabbani' }
 // ]

 // function getPost() {
 //     setTimeout(() => {
 //         let allPost = ''
 //         posts.forEach((post) => {
 //             allPost += `<li>${post.name}</li>`
 //         })
 //         document.body.innerHTML = allPost;

 //     }, 1000);
 // }

 // function createPost(newUser, callBack) {
 //     setTimeout(() => {
 //         posts.push(newUser);
 //         callBack();
 //     }, 2000);
 // }
 // createPost({ name: 'Ravi Pratap', lastname: 'Yadav' }, getPost);

 // Dealing with Promise
 //  const posts = [{ name: 'sugriv', lastname: 'Lodhi' },
 //      { name: 'Tejendra', lastname: 'Singh' },
 //      { name: 'Hina', lastname: 'Rabbani' }
 //  ]

 //  function getPost(res) {
 //      setTimeout(() => {
 //          let allPost = ''
 //          posts.forEach((post) => {
 //              allPost += `<li>${post.name}</li>`
 //          })
 //          document.body.innerHTML = allPost;
 //          console.log(res)

 //      }, 1000);
 //  }

 //  function createPost(newUser) {
 //      return new Promise((resolve, reject) => {
 //          setTimeout(() => {
 //              posts.push(newUser);
 //              const error = false;
 //              if (!error) {
 //                  resolve('We have Resolve the data');
 //              } else {
 //                  reject('error: Something went Wrong')
 //              }
 //          }, 2000)
 //      })
 //  }

 //  createPost({ name: 'Ravi Pratap', lastname: 'Yadav' })
 //      .then((res) => getPost(res))
 //      .catch((error) => console.log(error));
 //  //createPost({ name: 'Ravi Pratap', lastname: 'Yadav' }).then(getPost); both are Same above and inline

 //Dealing with Promise All
 //  const promise1 = Promise.resolve('Hello My Name is sugriv');
 //  const promse2 = 10;
 //  const promise3 = 'Rejendra is Bussiness Analyst';
 //  const promise4 = new Promise((resolve, reject) => {
 //      setTimeout(() => {
 //          resolve('hello is Resolve')
 //      }, 1000)
 //  })
 //  const promise5 = fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json())
 //  Promise.all([promise1, promse2, promise3, promise4, promise5]).then((values) => console.log(values))

 //Dealing with Asyn And Await

 //  const posts = [{ name: 'sugriv', lastname: 'Lodhi' },
 //      { name: 'Tejendra', lastname: 'Singh' },
 //      { name: 'Hina', lastname: 'Rabbani' }
 //  ]

 //  function getPost() {
 //      setTimeout(() => {
 //          let allPost = ''
 //          posts.forEach((post) => {
 //              allPost += `<li>${post.name}</li>`
 //          })
 //          document.body.innerHTML = allPost;
 //          console.log('We have resolve Our Problem')

 //      }, 1000);
 //  }

 //  function createPost(newUser) {
 //      return new Promise((resolve, reject) => {
 //          setTimeout(() => {
 //              posts.push(newUser);
 //              const error = false;
 //              if (!error) {
 //                  resolve('We have Resolve the data');
 //              } else {
 //                  reject('error: Something went Wrong')
 //              }
 //          }, 2000)
 //      })
 //  }
 //  async function intit() {
 //      await createPost({ name: 'Ravi Pratap', lastname: 'Yadav' });
 //      getPost()
 //  }
 //  intit();

 //Async and Await with fetch 
 async function fetchData() {
     const response = await fetch('https://jsonplaceholder.typicode.com/users');
     const data = await response.json();
     console.log(data);

 }
 fetchData();