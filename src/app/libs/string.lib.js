export class StringLibrary {
    static phoneNumberToFormattedString(phoneNumber) {
        return phoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '($1) $2 $3 $4');
    }
}