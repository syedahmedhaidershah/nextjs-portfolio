export class StringLibrary {
    static phoneNumberToFormattedString(phoneNumber) {
        if (phoneNumber.length < 10) {
            return phoneNumber;
        }
        if (phoneNumber.length === 13) {
            return phoneNumber.replace(/(\+\d{2})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4');
        }
        if (phoneNumber.length === 12) {
            return phoneNumber.replace(/(\+\d{2})(\d{1})(\d{4})(\d{4})/, '$1 $2 $3 $4');
        }
    }
}