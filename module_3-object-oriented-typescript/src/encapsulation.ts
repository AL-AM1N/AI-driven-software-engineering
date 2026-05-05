//?  Encapsulation, the 4th pillar of OOP

/**
 * !Note: 
 * amra "private" and "protected" use kore kono property k access kora maintain korteci, mane amra excapsulated korteci, etakei encapsulation bole
 */

class BankAccount1 {
    public readonly userId: number;
    public userName: string;
    protected _userBalance: number; // protected property

    constructor(userId: number, userName: string, userBalance: number){
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }

    private addBalance(balance: number){
        this._userBalance = this._userBalance + balance;
    }

    callHiddenMethod (balance: number){
        this.addBalance(balance);
    }
}

class StudentBankAccount1 extends BankAccount1{
    test(){
        this.callHiddenMethod(50); //! we can access "callHiddenMethod" so that we can add balance because we use "private" property in parent class (BankAccount)
    }
}