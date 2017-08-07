"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "nativescriptrocks@telerik.com";
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("You’re using: " + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <StackLayout>\n      <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n      <TextField hint=\"Email Address\" keyboardType=\"email\" [(ngModel)]=\"email\"\n  autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n      <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n      <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n      <Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n    </StackLayout>\n  ",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFpQjFDLElBQWEsWUFBWTtJQWZ6QjtRQWdCRSxVQUFLLEdBQUcsK0JBQStCLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7SUFRckIsQ0FBQztJQU5DLDZCQUFNLEdBQU47UUFDRSxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxvQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxZQUFZO0lBZnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsdWtCQVVUO1FBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDckUsQ0FBQztHQUNXLFlBQVksQ0FVeEI7QUFWWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbG9nb19sb2dpblwiIHN0cmV0Y2g9XCJub25lXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPjwvSW1hZ2U+XG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIiBbKG5nTW9kZWwpXT1cImVtYWlsXCJcbiAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIj48L1RleHRGaWVsZD5cblxuICAgICAgPEJ1dHRvbiBbdGV4dF09XCJpc0xvZ2dpbmdJbiA/ICdTaWduIGluJyA6ICdTaWduIHVwJ1wiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiICh0YXApPVwic3VibWl0KClcIj48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gW3RleHRdPVwiaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCcgOiAnQmFjayB0byBsb2dpbidcIiAodGFwKT1cInRvZ2dsZURpc3BsYXkoKVwiPjwvQnV0dG9uPlxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGAsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBlbWFpbCA9IFwibmF0aXZlc2NyaXB0cm9ja3NAdGVsZXJpay5jb21cIjtcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuXG4gIHN1Ym1pdCgpIHtcbiAgICBhbGVydChcIllvdeKAmXJlIHVzaW5nOiBcIiArIHRoaXMuZW1haWwpO1xuICB9XG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG59Il19