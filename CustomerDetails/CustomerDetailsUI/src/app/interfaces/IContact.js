"use strict";
var IContact = (function () {
    function IContact() {
        this.id = 0;
        this.CustomerId = 0;
        this.FirstName = '';
        this.LastName = '';
        this.Email = '';
        this.PhoneNumber = 0;
        this.IsActive = 1;
        this.IsEditMode = false;
        this.IsAddMode = false;
    }
    return IContact;
}());
exports.IContact = IContact;
//# sourceMappingURL=IContact.js.map