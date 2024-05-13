/* 9 May 2024 Class
Exploring objects further */
// Revision
/* type Product = {
    title : string,
    desc ?: string,
    price: number,
    isAvailable : boolean
};

const product = {
    title : 'watch',
    //desc : 'this is a watch',
    price: 100,
    isAvailable : true
}; */
const student = {
    name: 'Shah',
    class: 'BE',
    gender: 'male',
    adress: { street: 'Street 1', building: 'Maskan', aptNo: 47, block: 'B' }
};
const tshirtDetails = {
    title: 'Man T-shirt',
    desc: 'This is a man\' t-shirt',
    price: 800,
    additionalInfo: {
        color: 'Red',
        size: 'Large',
        qty: 50
    }
};
console.log(tshirtDetails);
const studen2 = {
    bio: {
        name: 'Shah',
        gender: 'Male',
        dob: 2000
    },
    department: {
        depName: 'Computer Science',
        faculty: 'BSCS'
    },
};
console.log(Object.keys(studen2), Object.keys(studen2.bio), Object.keys(studen2.department));
console.log(Object.values(studen2), Object.values(studen2.bio), Object.values(studen2.department));
console.log(Object.entries(studen2), Object.entries(studen2.bio), Object.entries(studen2.department));
const greet = () => {
    console.log('Welcome! Thursday Class');
};
const student3 = {
    name: 'Shah',
    class: 'BE',
    gender: 'male',
    greet: function () {
        console.log('Hello World!');
    },
    callName: function () {
        console.log('Hello Shah!');
    },
    address: { street: 'Street 1', building: 'Maskan', aptNo: 47, block: 'B' }
};
student3.greet();
student3.callName();
const studentRegistery = {
    name: 'Shah',
    rollNum: 0,
    subject: 'English',
    genRollNum: (rollNum, num) => {
        return rollNum + num;
    }
};
console.log(studentRegistery.genRollNum(3, 4));
export {};
