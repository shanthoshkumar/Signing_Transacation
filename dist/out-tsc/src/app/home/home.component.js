"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Web3 = require("web3");
var Tx = require("ethereumjs-tx");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        this.title = 'app';
        this.web3 = null;
        // private_key = "cd67a2cbe1e4a555f7b6da3ef2fb357dc026943cc5c2bf5b85c48b8348a600d0"  //original key
        this.private_key = "a3c0074742371bfbfa3b2ffae0cac027ab1dcecb49fa0c7ea34f640aa89b3dd4"; //metamask acc key
        this.privateKey = Buffer.from(this.private_key, 'hex');
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
        var account = '0x4d8d095fc69Afedd24aA121f75C0Fa43D33F3706'; // Ganache
        var contractAddress = '0x44524dfd5d99240c659795cc0466b9d485174c56'; // Deployed manually
        var abi = [{ "constant": true, "inputs": [], "name": "a", "outputs": [{ "name": "", "type": "uint32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_a", "type": "uint32" }], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "get", "outputs": [{ "name": "", "type": "uint32" }], "payable": false, "stateMutability": "view", "type": "function" }];
        var contract = new this.web3.eth.Contract(abi, contractAddress, {
            from: account,
            gasLimit: 3000000,
        });
        try {
            var meta_1 = this;
            var obj = this.web3.eth.accounts.privateKeyToAccount("0x" + this.private_key);
            console.log(obj);
            this.account = obj["address"];
            var contract_1 = new this.web3.eth.Contract(abi, contractAddress, {
                from: this.account,
                gasLimit: 3000000,
            });
            var contractFunction = contract_1.methods.set(18);
            var functionAbi_1 = contractFunction.encodeABI();
            var estimatedGas_1;
            var nonce_1;
            console.log("Getting gas estimate");
            contractFunction.estimateGas({ from: this.account }).then(function (gasAmount) {
                estimatedGas_1 = gasAmount.toString(16);
                _this.estimated_gas = estimatedGas_1;
                console.log("Estimated gas: " + estimatedGas_1);
            });
            this.web3.eth.getBalance(this.account).then(function (bal) { return _this.balance = bal; });
            this.web3.eth.getTransactionCount(this.account).then(function (tcount) { return _this.transaction_count = tcount; });
            this.web3.eth.getCode("0x44524dfd5d99240c659795cc0466b9d485174c56").then(function (code_at) { return _this.code_at = code_at; });
            this.web3.eth.getBlockTransactionCount("latest", function (err, data) {
                meta_1.GBTC = data;
            });
            contract_1.methods.get().call().then(function (v) { return _this.value_before = v; });
            this.web3.eth.getTransactionCount(this.account).then(function (_Nonce) {
                _this._nonce = _Nonce.toString(16);
                console.log("Nonce: " + _this._nonce);
                var txParams = {
                    nonce: '0x' + nonce_1,
                    gasPrice: '493E0',
                    gasLimit: 4000000,
                    to: contractAddress,
                    value: '0x00',
                    data: functionAbi_1
                };
                var tx = new Tx(txParams);
                tx.sign(_this.privateKey);
                var serializedTx = tx.serialize();
                var temp_data = serializedTx.toString('hex');
                console.log(temp_data);
                _this.web3.eth.sendSignedTransaction('0x' + temp_data).on('receipt', console.log);
                contract_1.methods.get().call().then(function (v) { return _this.value_after = v; });
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map