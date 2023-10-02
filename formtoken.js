// function getCSRFToken() {
//     const cookieName = 'csrftoken=';
//     const decodedCookies = decodeURIComponent(document.cookie);
//     const cookiesArray = decodedCookies.split(';');

//     for (let i = 0; i < cookiesArray.length; i++) {
//         let cookie = cookiesArray[i].trim();
//         if (cookie.indexOf(cookieName) === 0) {
//             return cookie.substring(cookieName.length, cookie.length);
//         }
//     }
//     return null; // return null if the CSRF token cookie is not found
// }

// // Example usage
//   const csrfToken = getCSRFToken();
//   if (csrfToken) {
//       console.log('CSRF Token:', csrfToken);
//   } else {
//       console.error('CSRF Token not found');
//   }


const item = [
    {
        id:1,
    },
    {
        id:2,
    }

]
const me = ['nick', 'pelo']

const changed = JSON.stringify(item)

const evaluate = (id) =>{
    if(changed.includes(id)){
        console.log('indeed');
    }
    else{
        console.log('unavailable')
    }
}


const flip = (id) =>{
    for(let i = 0 ; i< item.length; i++){
        if(item[i].id !== id){
            return [...item, {id:id}]
        }
        else{
            return item
        }
    }
    // const newArr = item.filter(item=> item.id !== id)
    // return newArr
}

// console.log(changed)
// console.log(JSON.parse(changed))
// evaluate(2)
// console.log(typeof(changed))
// console.log(typeof(item))
// console.log(flip(3))

const name = '11111111'
const lebitso = [...name, '1']
console.log(lebitso.length)

console.log(typeof(lebitso))