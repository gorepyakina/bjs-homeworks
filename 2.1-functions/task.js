// Задача 1

function getSolutions(a, b, c) {
  let D = b**2 - 4 * a * c;
  if (D < 0) {
    return { 
      D: D, 
      roots: [] 
    };
  } else if (D === 0) {
    let x1 = -b / (2 * a);
    return { 
      D: D, 
      roots: [x1] 
    };
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { 
      D: D, 
      roots: [x1, x2] 
    };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);
console.log();

// Задача 2

function getAverageScore(data) {
  data.average = getAverageMark(data);
  return data;
}

function getAverageMark(marks) {
  let count = 0;
  for (let key in marks) {
    count++;
  }
  let average = 0;
  for (let key in marks) {
    let sum = 0;
    for (let i = 0; i < marks[key].length; i++) {
      sum += marks[key][i] / marks[key].length;
      average += (marks[key][i] / marks[key].length) / count;
    }
    marks[key] = sum;
  }
  marks.average = average;
  return marks.average;
}

getAverageScore({
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  psysics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
});


// Задача 3

function getPersonData(secretData) {
  return getDecodedValue(secretData);
}

let pirate = new Object();

function getDecodedValue(secretData) {
  if (secretData === 0) {
    return 'Родриго';
  }
  if (secretData === 1) {
    return 'Эмильо';
  }
  for (let key in secretData) {
    if (key === 'aaa') {
      if (secretData[key] == 0) {
       pirate.firstName = 'Родриго';
      } else if (secretData[key] == 1) {
       pirate.firstName = 'Эмильо';
      }
    }
    if (key === 'bbb') {
      if (secretData[key] == 0) {
        pirate.lastName = 'Родриго';
      } else if (secretData[key] == 1) {
        pirate.lastName = 'Эмильо';
      }
    }
  }
  return pirate;
}

console.log(getPersonData({
  aaa: 0,
  bbb: 0
}));
console.log(getPersonData({
  aaa: 1,
  bbb: 0
}));
console.log(getPersonData({
  aaa: 0,
  bbb: 1
}));
console.log(getPersonData({
  aaa: 1,
  bbb: 1
}));