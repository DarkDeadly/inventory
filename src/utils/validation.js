export default function validation(datas) {
    let errors  = {}; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!datas.username) {
        errors.username = "enter your username"
    }
    if (!datas.email) {
        errors.email = "The email is a requirement !"
    } else if (!emailRegex.test(datas.email)) {
        errors.email = "Email Format is wrong"
    }
    if (!datas.password) {
        errors.password = "Password is a requirement"
    }else if (!passwordRegex.test(datas.password)) {
        errors.password = "the password must at least contains 1 number , 1 uppercase and 8 characters at least"
    }
    if(datas.password !== datas.confirmPass) {
        errors.confirmPass = "Password doesnt match" 
    }
 return errors
}

