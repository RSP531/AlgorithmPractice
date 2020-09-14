//this function returns a promise
function delay(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error('delay requires a valid number'))
    } else {
      setTimeout(resolve, time);
    }
  })
}

//this function does not return a promise
function setup() {
  delay(4000)
    .then(() => console.log('finished the first'))
    .then(() => {
      delay(4000)
        .then(() => console.log('finished the second'))
    })
}

setup()
//fetch returns a promise


/////////////////////////////////////////////////////////////////////
//WORKING EXAMPLE OF ASYNC AWAIT

//this function returns a promise
function delay(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error('delay requires a valid number'))
    } else {
      setTimeout(resolve, time);
    }
  })
}

//this functiond does not return a promise
async function delayES8(time, secondTime) {
  await delay(time);
  console.log('test')
  await delay(secondTime);
  console.log('this')
  // await doSomethingElse();
  // await doSomethingElse();
  //return // i don't think this is necessary
}

//this function does not return a promise
function setup() {
  delayES8(5000, 6000)
    .then(() => console.log('finished 1')) //will return after 3 seconds
}
setup()


/////////////////////////////////////////////////////////////////////
//WORKING EXAMPLE OF ASYNC AWAIT THAT USES DATA CALLS AND HOSTS 3 TASKS TO MAKE THEM ASYNCHRONOUS
function uploadFileToStorage(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error('delay requires a valid number'))
    } else {
      setTimeout(resolve, time);
    }
  })
}

function getStorageId(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error('delay requires a valid number'))
    } else {
      setTimeout(resolve, time);
    }
  })
}

function updateUserProfile(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error('delay requires a valid number'))
    } else {
      setTimeout(resolve, time);
    }
  })
}

let app = async () => {
  await uploadFileToStorage(4000)
  console.log('upload complete')
  await getStorageId(3000)
  console.log('get storage ID')
  await updateUserProfile(1000)
  console.log('user Profile updated')
}

app()