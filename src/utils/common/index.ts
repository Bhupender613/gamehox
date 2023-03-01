export const generateAppointmentNumber=()=>{
 return 'APT' + String(Math.floor(Math.random()*90000) + 10000);
}

export const randomNumnberForCsv=()=>{
    return Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
   }

export const generateOutletNumber=()=>{
    const randomNumber= Math.floor(Math.random()*90000) + 10000;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const firstAlphabet= alphabet[Math.floor(Math.random() * alphabet.length)];
    const secondAlphabet= alphabet[Math.floor(Math.random() * alphabet.length)];
    return firstAlphabet+randomNumber+secondAlphabet;
   }

  