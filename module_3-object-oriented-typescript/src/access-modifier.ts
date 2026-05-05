//? Access Modifiers [using keyword "private" and "protected"]
/**
 * !Note:
 * 1. private: private keyword use korle amra shudhu oi class er moddhei variable ta use korte parbo
 * 2. protected: jokhon amra kono instance banabo, and shekhane amader private variable take use korte hobe tokhon amra shetake "private" keyword na likhe "protected" keyword likhbo 
 * 
 * 3. etake "encapsulation" o bola hoy
 */

//--------------------------------------------------------
//* private:

class BankAccount {
    public readonly userId: number;
    public userName: string;
    private _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }

    addBalance(balance: number){
        this._userBalance = this._userBalance + balance;
    }
}

// class StudentBankAccount extends BankAccount {
//     test(){
//         this._userBalance = //! ❌ we can't access it because it's  private
//     }
// }

const aminAccount = new BankAccount(22, "al amin", 100);
aminAccount.addBalance(150);
console.log(aminAccount);


//--------------------------------------------------------
//* proteced:

class BankAccount1 {
    public readonly userId: number;
    public userName: string;
    protected _userBalance: number; // protected property

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }

    addBalance(balance: number){
        this._userBalance = this._userBalance + balance;
    }
}

class StudentBankAccount1 extends BankAccount1{
    test(){
        this._userBalance //! we can access "_userBalance" because we use "protected" property in parent class (BankAccount)
    }
}