function validator(input) {
    if (isNaN(input)) {
        return "Please enter a valid number";
    }
    return true;
}
;
export default validator;
