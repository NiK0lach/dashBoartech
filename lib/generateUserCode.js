//const prefix = "IRSN";
export function generateUserCode(prefix, fullName) {
    // Extracting initials from full name
    
    const initials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();
    console.log(initials)
    // Extracting current timeStamp
    const currentTimeStamp = new Date().getTime().toString().substr(-5);

    // Combining elements to form the code
    const code = `${prefix}-${initials}-${currentTimeStamp}`;
    
    return code;
    
}

// Example usage:
/* const prefix = "IRSN";
const fullName = "DANKO HASHIK";
const code = generateUserCode(prefix, fullName);
console.log(code); */