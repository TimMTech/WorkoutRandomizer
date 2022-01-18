                                //Arrays of Workouts//
//Monday Chest/Biceps                                            
const chestArrayCompound = ['Bench Press', 'Incline Bench', 'Flat Dumbbell Press', 'Incline Dumbbell Press'];
const chestArrayNormal = ['Cable Flies', 'Dumbbell Pull Overs', 'Dips', 'Push-ups', 'Hammer Bench'];
const bicepArray = ['Barbell Curls', 'Hammer Curl', 'Incline Dumbbell Curl',
    'Cable Curl', 'Chin-Up', 'Concentration Curls', 'Rope Curls', 'Dual Cable Curls', 'High Cable Curl']

//Wednesday Back/Triceps/Abs
const backArrayCompound = ['Bent Over Rows', 'T-Bar Rows', 'Dumbbell Rows', 'Pull Ups'];
const backArrayNormal = ['Lat Pull Down', 'Close Grip Pull Down', 'Single-Arm Cable Row', 'Seated Row'];
const tricepsArray = ['Cable Tricep Push-downs', 'Tricep Dips', 'Over-Head Extensions', 'Skull Crushers',
    'Close Grip Extensions(V Bar)', 'Rope Push-downs', 'Diamond Push-ups',
    'Single Arm Over-Head Extensions']
const ab1Array = ['Machine Crunches', 'Machine Leg-Ups', 'Hanging Leg Raises', 'Twists', 'Laying Ab Crunches']

//Friday Shoulders/Traps
const shoulderArrayCompound = ['Seated Over-Head Press', 'Standing Barbell Over-Head Press', 'Dumbbell Over-Head Press',
    'Arnold Press'];
const shoulderArrayNormal = ['Lateral Raises', 'Front Raises', 'Face Pulls', 'Reverse Flies', 'Upright Rows',
    'Rear Delt Flies', 'Y-Pulls'];
const trapArray = ['Heavy Dumbbell Shrugs', 'Heavy Barbell Shrugs', 'Rope Shrugs', 'Seated Shrugs'];

//Saturday Legs/Calves/Abs
const legArrayCompound = ['Heavy Squats', 'Light Squats'];
const legArrayNormal = ['Leg Press', 'Hack Squats', 'Close Stance Smith Squats', 'Leg Extensions', 'Hamstring Curls', 'Wall Sits Timed'];
const calveArray = ['Standing Calf Raises', 'Seated Calf Raises', 'Inward/Outward Calf Raises'];
const ab2Array = ['Machine Crunches', 'Machine Leg-Ups', 'Hanging Leg Raises', 'Twist'];

//Instantiated Elements//
const chestWorkouts = document.querySelector('.mon-chest');
const bicepWorkouts = document.querySelector('.mon-biceps');

const backWorkouts = document.querySelector('.wed-back');
const tricepWorkouts = document.querySelector('.wed-triceps');
const ab1Workouts = document.querySelector('.wed-abs');

const shoulderWorkouts = document.querySelector('.fri-shoulders');
const trapWorkouts = document.querySelector('.fri-traps');

const legWorkouts = document.querySelector('.sat-legs');
const calveWorkouts = document.querySelector('.sat-calves');
const ab2Workouts = document.querySelector('.sat-abs');

//Instantiated Workout Plan
const workoutPlan = document.querySelector('.workouts');

let chestWorkoutGenerator = () => {
    const ulChestElement = document.createElement('ul');
    ulChestElement.textContent = 'Chest';
    chestWorkouts.appendChild(ulChestElement);
    let fullChestArray = Array.prototype.concat(chestArrayCompound, chestArrayNormal);
    fullChestArray.forEach((workout) => {
        const liChestElement = document.createElement('li');
        liChestElement.textContent = workout;
        liChestElement.style.listStyle = 'square inside';
        ulChestElement.appendChild(liChestElement);
    })
}

let bicepWorkoutGenerator = () => {
    const ulBicepElement = document.createElement('ul');
    ulBicepElement.textContent = 'Biceps';
    bicepWorkouts.appendChild(ulBicepElement);
    bicepArray.forEach((workout) => {
        const liBicepElement = document.createElement('li');
        liBicepElement.textContent = workout;
        liBicepElement.style.listStyle = 'square inside'
        ulBicepElement.appendChild(liBicepElement)
    })
}

let backWorkoutGenerator = () => {
    const ulBackElement = document.createElement('ul');
    ulBackElement.textContent = 'Back';
    backWorkouts.appendChild(ulBackElement)
    fullBackArray = Array.prototype.concat(backArrayCompound, backArrayNormal);
    fullBackArray.forEach((workout) => {
        const liBackElement = document.createElement('li');
        liBackElement.textContent = workout;
        liBackElement.style.listStyle = 'square inside';
        ulBackElement.appendChild(liBackElement);
    })
}

let tricepWorkoutGenerator = () => {
    const ulTricepElement = document.createElement('ul');
    ulTricepElement.textContent = 'Triceps';
    tricepWorkouts.appendChild(ulTricepElement);
    tricepsArray.forEach((workout) => {
        const liTricepElement = document.createElement('li');
        liTricepElement.textContent = workout;
        liTricepElement.style.listStyle = 'square inside';
        ulTricepElement.appendChild(liTricepElement);
    })
}

let ab1WorkoutGenerator = () => {
    const ulAb1Element = document.createElement('ul');
    ulAb1Element.textContent = 'Abdominals';
    ab1Workouts.appendChild(ulAb1Element);
    ab1Array.forEach((workout) => {
        const liAb1Element = document.createElement('li');
        liAb1Element.textContent = workout;
        liAb1Element.style.listStyle = 'square inside';
        ulAb1Element.appendChild(liAb1Element);
    })
}

let shoulderWorkoutGenerator = () => {
    const ulShoulderElement = document.createElement('ul');
    ulShoulderElement.textContent = 'Shoulders';
    shoulderWorkouts.appendChild(ulShoulderElement);
    fullShoulderArray = Array.prototype.concat(shoulderArrayCompound, shoulderArrayNormal);
    fullShoulderArray.forEach((workout) => {
        const liShoulderElement = document.createElement('li');
        liShoulderElement.textContent = workout;
        liShoulderElement.style.listStyle = 'square inside';
        ulShoulderElement.appendChild(liShoulderElement);
    })
}

let trapWorkoutGenerator = () => {
    const ulTrapElement = document.createElement('ul');
    ulTrapElement.textContent = 'Trapezoid';
    trapWorkouts.appendChild(ulTrapElement);
    trapArray.forEach((workout) => {
        const liTrapElement = document.createElement('li');
        liTrapElement.textContent = workout;
        liTrapElement.style.listStyle = 'square inside';
        ulTrapElement.appendChild(liTrapElement);
    })
}

let legWorkoutGenerator = () => {
    const ulLegElement = document.createElement('ul');
    ulLegElement.textContent = 'Legs';
    legWorkouts.appendChild(ulLegElement);
    fullLegArray = Array.prototype.concat(legArrayCompound, legArrayNormal);
    fullLegArray.forEach((workout) => {
        const liLegElement = document.createElement('li');
        liLegElement.textContent = workout;
        liLegElement.style.listStyle = 'square inside';
        ulLegElement.appendChild(liLegElement);
    })
}

let calveWorkoutGenerator = () => {
    const ulCalveElement = document.createElement('ul');
    ulCalveElement.textContent = 'Calves';
    calveWorkouts.appendChild(ulCalveElement);
    calveArray.forEach((workout) => {
        const liCalveElement = document.createElement('li');
        liCalveElement.textContent = workout;
        liCalveElement.style.listStyle = 'square inside';
        ulCalveElement.appendChild(liCalveElement)
    })
}

let ab2WorkoutGenerator = () => {
    const ulAb2Element = document.createElement('ul');
    ulAb2Element.textContent = 'Abdominals';
    ab2Workouts.appendChild(ulAb2Element);
    ab2Array.forEach((workout) => {
        const liAb2Element = document.createElement('li');
        liAb2Element.textContent = workout;
        liAb2Element.style.listStyle = 'square inside';
        ulAb2Element.appendChild(liAb2Element);
    })
}

let mondayWorkoutRandomizer = () => {
    let normalReturn = 3;
    let bicepReturn = 4;
    let chestCompoundRandom = chestArrayCompound[Math.floor(Math.random() * chestArrayCompound.length)];
    let chestNormalRandom = chestArrayNormal.sort(() => .5 - Math.random()).slice(0, normalReturn);
    let bicepRandom = bicepArray.sort(() => .5 - Math.random()).slice(0, bicepReturn);
    let mondayArray = Array.prototype.concat(chestCompoundRandom, chestNormalRandom, bicepRandom);
    return mondayArray;
}

let wednesdayWorkoutRandomizer = () => {
    let abReturn = 2;
    let normalReturn = 3;
    let tricepReturn = 4;
    let backCompoundRandom = backArrayCompound[Math.floor(Math.random() * backArrayCompound.length)];
    let backNormalRandom = backArrayNormal.sort(() => .5 - Math.random()).slice(0, normalReturn);
    let tricepRandom = tricepsArray.sort(() => .5 - Math.random()).slice(0, tricepReturn);
    let ab1Random = ab1Array.sort(() => .5 - Math.random()).slice(0, abReturn);
    let wednesdayArray = Array.prototype.concat(backCompoundRandom, backNormalRandom, tricepRandom, ab1Random);
    return wednesdayArray;
}

let fridayWorkoutRandomizer = () => {
    let normalReturn = 3;
    let trapReturn = 2;
    let shoulderCompoundRandom = shoulderArrayCompound[Math.floor(Math.random() * shoulderArrayCompound.length)];
    let shoulderNormalRandom = shoulderArrayNormal.sort(() => .5 - Math.random()).slice(0, normalReturn);
    let trapRandom = trapArray.sort(() => .5 - Math.random()).slice(0, trapReturn);
    let fridayArray = Array.prototype.concat(shoulderCompoundRandom, shoulderNormalRandom, trapRandom);
    return fridayArray;
}

let saturdayWorkoutRandomizer = () => {
    let normalReturn = 3;
    let calveReturn = 2;
    let ab2Return = 2;
    let legCompoundRandom = legArrayCompound[Math.floor(Math.random() * legArrayCompound.length)];
    let legNormalRandom = legArrayNormal.sort(() => .5 - Math.random()).slice(0, normalReturn);
    let calveRandom = calveArray.sort(() => .5 - Math.random()).slice(0, calveReturn);
    let ab2Random = ab2Array.sort(() => .5 - Math.random()).slice(0, ab2Return);
    let saturdayArray = Array.prototype.concat(legCompoundRandom,legNormalRandom, calveRandom, ab2Random);
    return saturdayArray;
}




let generator = () => {
    chestWorkoutGenerator();
    bicepWorkoutGenerator();
    backWorkoutGenerator();
    tricepWorkoutGenerator();
    ab1WorkoutGenerator();
    shoulderWorkoutGenerator();
    trapWorkoutGenerator();
    legWorkoutGenerator();
    calveWorkoutGenerator();
    ab2WorkoutGenerator();
}



let main = () => {
    randomizer();
    generator();
}

main()