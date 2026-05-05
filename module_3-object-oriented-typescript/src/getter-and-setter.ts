//? 3-6 OOP: Getter and Setter in typescript

/**
 * !Note:
 * 1. setter: we use "set" function for set or modify a value. there is no return in "set".
 * 2. getter: we use "get" function for get something. there is a return in "get"
 */

//-----------------------------------------------------------
class BankAccount {
    public readonly userId: number;
    public userName: string;
    private _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }
//---------------------------------------------------
    //* normal use for set balance:
    // addBalance(balance: number){
    //     this._userBalance = this._userBalance + balance;
    // }

    //* using set function
    set addBalance(amount: number){
        this._userBalance = this._userBalance + amount;
    }
//---------------------------------------------------
    //* normal use for get something
    // getBalance(){
    //     return this._userBalance;
    // }

    //* using get function
    get getBalance(){
        return this._userBalance;
    }
//---------------------------------------------------
}



const aminAccount = new BankAccount(22, "al amin", 120);
aminAccount.addBalance = 50;
aminAccount.addBalance = 70;
console.log(aminAccount.getBalance); // output: 240