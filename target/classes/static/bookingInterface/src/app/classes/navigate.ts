export class Navigate {
managePropertyButton:boolean;
istPropertyButton:boolean;
loggedUserButton:boolean;
signInButton:boolean;
signUpButton:boolean;



constructor()
{
this.managePropertyButton=false;
this.istPropertyButton=false;
this.loggedUserButton=false;
this.signInButton=false;
this.signUpButton=false;
}

setLoggedUserButton(c:boolean)
{
    this.loggedUserButton = c;
}
getLoggedUserButton()
{
    return this.loggedUserButton;
}
setmanagePropertyButton()
{
    this.managePropertyButton=true;
}
getmanagePropertyButton()
{
    return this.managePropertyButton;
}
}
