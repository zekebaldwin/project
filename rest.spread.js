//   1.) const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

//   2.) const findMin = (...args) => Math.min(...args)

//   3.) const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//   4.) const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }


const extend = (array1, array2) => {
    newArr = [...array1, ...array2] 
    return newArr;
}

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, value) => {
    const newObj ={...obj}
    newObj[key] = value
    return newObj
}