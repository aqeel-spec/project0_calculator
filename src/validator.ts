
function validator (input : number) {
    if (isNaN(input)) {
        return "Please enter a valid number"
    }
    return true
};
export default validator;
